import { track } from '@vercel/analytics'

export interface GeolocationData {
  timestamp: string
  city: string
  country: string
  countryRegion: string
  region: string
  latitude: string
  longitude: string
  flag: string
  userAgent: string
  referer: string
  sessionId: string
}

export interface GeolocationResponse {
  success: boolean
  data?: GeolocationData
  error?: string
}

class GeolocationService {
  private hasTracked = false
  private geoData: GeolocationData | null = null

  /**
   * Check if we're in development mode
   */
  private isDevelopment(): boolean {
    return import.meta.env.DEV || window.location.hostname === 'localhost'
  }

  /**
   * Generate mock geolocation data for development
   */
  private getMockGeolocationData(): GeolocationData {
    return {
      timestamp: new Date().toISOString(),
      city: 'Pagosa Springs',
      country: 'United States',
      countryRegion: 'CO',
      region: 'us-west-1',
      latitude: '37.2694',
      longitude: '-107.0098',
      flag: '🇺🇸',
      userAgent: navigator.userAgent,
      referer: window.location.href,
      sessionId: crypto.randomUUID()
    }
  }

  /**
   * Initialize geolocation tracking on app startup
   */
  async initializeTracking(): Promise<void> {
    if (this.hasTracked) return

    // In development, use mock data
    if (this.isDevelopment()) {
      console.log('🔧 Development mode: Using mock geolocation data')
      this.geoData = this.getMockGeolocationData()
      this.hasTracked = true
      return
    }

    try {
      const response = await fetch('/api/geolocation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Geolocation API responded with status: ${response.status}`)
      }

      // Check if the response is actually JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Expected JSON response, got: ${contentType}`)
      }

      const result: GeolocationResponse = await response.json()

      if (result.success && result.data) {
        this.geoData = result.data
        this.hasTracked = true

        // Send geolocation data to Vercel Analytics
        track('geolocation_captured', {
          city: result.data.city,
          country: result.data.country,
          region: result.data.region,
          countryRegion: result.data.countryRegion,
          sessionId: result.data.sessionId,
        })

        console.log('Geolocation tracking initialized:', result.data)
      }
    } catch (error) {
      console.error('Failed to initialize geolocation tracking:', error)
      // Fallback to mock data if production API fails
      console.log('🔄 Falling back to mock geolocation data')
      this.geoData = this.getMockGeolocationData()
      this.hasTracked = true
    }
  }

  /**
   * Get the cached geolocation data
   */
  getGeolocationData(): GeolocationData | null {
    return this.geoData
  }

  /**
   * Track a custom event with geolocation context
   */
  trackEventWithGeo(eventName: string, properties: Record<string, any> = {}): void {
    if (this.geoData) {
      track(eventName, {
        ...properties,
        geo_city: this.geoData.city,
        geo_country: this.geoData.country,
        geo_region: this.geoData.region,
        geo_country_region: this.geoData.countryRegion,
        session_id: this.geoData.sessionId,
      })
    } else {
      // Fallback to regular tracking if geo data isn't available
      track(eventName, properties)
    }
  }

  /**
   * Get a formatted location string for display
   */
  getFormattedLocation(): string {
    if (!this.geoData) return 'Unknown'
    
    const parts = []
    if (this.geoData.city && this.geoData.city !== 'unknown') parts.push(this.geoData.city)
    if (this.geoData.countryRegion && this.geoData.countryRegion !== 'unknown') parts.push(this.geoData.countryRegion)
    if (this.geoData.country && this.geoData.country !== 'unknown') {
      const countryPart = this.geoData.flag ? `${this.geoData.flag} ${this.geoData.country}` : this.geoData.country
      parts.push(countryPart)
    }
    
    return parts.length > 0 ? parts.join(', ') : 'Unknown'
  }
}

// Export a singleton instance
export const geolocationService = new GeolocationService() 