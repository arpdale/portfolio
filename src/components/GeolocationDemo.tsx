import { useGeolocation } from '@/hooks/useGeolocation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Globe, Clock, User, ExternalLink, Zap } from 'lucide-react';

export default function GeolocationDemo() {
  const { data, isLoading, error, formattedLocation, trackEventWithGeo } = useGeolocation();

  const handleTestEvent = () => {
    trackEventWithGeo('Demo Event Triggered', {
      test_type: 'manual_button_click',
      page: 'geolocation_demo'
    });
    alert('Event tracked! Check your Vercel Analytics dashboard.');
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">🌍 Geolocation Demo</h1>
          <p className="text-muted-foreground">Loading visitor location data...</p>
        </div>
        
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">⚠️ Geolocation Error</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This might be expected in development mode. The service will use mock data or fallback gracefully.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">🌍 Geolocation Demo</h1>
        <p className="text-muted-foreground">
          Testing visitor location capture and analytics integration
        </p>
        <Badge variant="outline" className="text-lg px-4 py-2">
          <MapPin className="w-4 h-4 mr-2" />
          {formattedLocation}
        </Badge>
      </div>

      {/* Geolocation Data */}
      {data && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Captured Location Data
            </CardTitle>
            <CardDescription>
              This data is automatically captured and included with all analytics events
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground">City</label>
                <p className="text-lg">{data.city}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Country</label>
                <p className="text-lg">{data.flag} {data.country}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Region</label>
                <p className="text-lg">{data.countryRegion}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Continent</label>
                <p className="text-lg capitalize">{data.region}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Coordinates</label>
                <p className="text-sm font-mono">
                  {data.latitude && data.longitude 
                    ? `${data.latitude}, ${data.longitude}`
                    : 'Not available'
                  }
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Session ID</label>
                <p className="text-sm font-mono break-all">{data.sessionId}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Timestamp
                </label>
                <p className="text-sm">{new Date(data.timestamp).toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  <User className="w-4 h-4 inline mr-1" />
                  User Agent
                </label>
                <p className="text-xs text-muted-foreground break-all">{data.userAgent}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Analytics Integration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Analytics Integration
          </CardTitle>
          <CardDescription>
            All portfolio events now include geolocation context automatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Events with Geo Context:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Page views</li>
                <li>• Project interactions</li>
                <li>• Contact form activity</li>
                <li>• Social media clicks</li>
                <li>• Resume downloads</li>
                <li>• Case study views</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Additional Data Fields:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• geo_city, geo_country</li>
                <li>• geo_region, geo_country_region</li>
                <li>• session_id for user journeys</li>
                <li>• timestamp for temporal analysis</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <Button onClick={handleTestEvent} className="w-full md:w-auto">
              <Zap className="w-4 h-4 mr-2" />
              Test Event Tracking
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              This will send a test event to Vercel Analytics with your location data
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Development Info */}
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="text-sm">Development Notes</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Development Mode:</strong> Uses mock data (Pagosa Springs, CO) for consistent testing
          </p>
          <p>
            <strong>Production Mode:</strong> Captures real visitor location via Vercel Edge Functions
          </p>
          <p>
            <strong>Privacy:</strong> Only captures general location data (city/country level), no precise coordinates stored
          </p>
          <div className="flex items-center gap-2 pt-2">
            <ExternalLink className="w-4 h-4" />
            <a 
              href="https://vercel.com/analytics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Analytics Dashboard
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 