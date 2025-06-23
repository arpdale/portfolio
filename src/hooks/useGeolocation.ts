import { useState, useEffect } from 'react'
import { geolocationService, type GeolocationData } from '@/services/geolocationService'

interface UseGeolocationReturn {
  data: GeolocationData | null
  isLoading: boolean
  error: string | null
  formattedLocation: string
  trackEventWithGeo: (eventName: string, properties?: Record<string, any>) => void
}

export function useGeolocation(): UseGeolocationReturn {
  const [data, setData] = useState<GeolocationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializeGeolocation = async () => {
      try {
        // Initialize the service if not already done
        await geolocationService.initializeTracking()
        
        // Check for data periodically until it's available
        const checkForData = () => {
          const geoData = geolocationService.getGeolocationData()
          if (geoData) {
            setData(geoData)
            setIsLoading(false)
            setError(null)
          } else {
            // Keep checking for a bit longer
            setTimeout(checkForData, 500)
          }
        }

        // Start checking after a brief delay
        setTimeout(checkForData, 100)

        // Set a timeout to stop loading after a reasonable time
        setTimeout(() => {
          if (!data) {
            setIsLoading(false)
            setError('Geolocation data not available')
          }
        }, 5000)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to get geolocation')
        setIsLoading(false)
      }
    }

    initializeGeolocation()
  }, [])

  const formattedLocation = data ? geolocationService.getFormattedLocation() : 'Unknown'

  const trackEventWithGeo = (eventName: string, properties: Record<string, any> = {}) => {
    geolocationService.trackEventWithGeo(eventName, properties)
  }

  return {
    data,
    isLoading,
    error,
    formattedLocation,
    trackEventWithGeo
  }
} 