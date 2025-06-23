import { geolocation } from '@vercel/functions'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  try {
    // Get geolocation data from the request
    const geo = geolocation(req)
    
    // Get additional request info
    const userAgent = req.headers.get('user-agent') || 'unknown'
    const referer = req.headers.get('referer') || 'direct'
    const timestamp = new Date().toISOString()
    
    // Construct the geolocation data object
    const geoData = {
      timestamp,
      city: geo.city || 'unknown',
      country: geo.country || 'unknown',
      countryRegion: geo.countryRegion || 'unknown',
      region: geo.region || 'unknown',
      latitude: geo.latitude || 'unknown',
      longitude: geo.longitude || 'unknown',
      flag: geo.flag || '',
      userAgent,
      referer,
      // Add a unique session identifier for this visit
      sessionId: crypto.randomUUID()
    }
    
    // Log the data (this will appear in Vercel function logs)
    console.log('Geolocation Analytics:', JSON.stringify(geoData))
    
    // You can also send this data to an external analytics service
    // For example, to your Supabase database or another analytics platform
    
    // Return the geolocation data (can be used by your frontend if needed)
    return new Response(JSON.stringify({
      success: true,
      data: geoData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
    
  } catch (error) {
    console.error('Geolocation tracking error:', error)
    
    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to capture geolocation data'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
} 