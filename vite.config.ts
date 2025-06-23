import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/geolocation': {
        target: 'https://ipapi.co/json/',
        changeOrigin: true,
        rewrite: (_path) => '',
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Handle the response from ipapi.co and format it for our service
            let body = '';
            proxyRes.on('data', (chunk) => {
              body += chunk;
            });
            proxyRes.on('end', () => {
              try {
                const ipData = JSON.parse(body);
                const formatted = {
                  success: true,
                  data: {
                    timestamp: new Date().toISOString(),
                    city: ipData.city || 'Unknown',
                    country: ipData.country_name || 'Unknown',
                    countryRegion: ipData.region_code || ipData.region || 'Unknown',
                    region: ipData.continent_code?.toLowerCase() || 'unknown',
                    latitude: String(ipData.latitude || ''),
                    longitude: String(ipData.longitude || ''),
                    flag: ipData.country_code ? getFlagEmoji(ipData.country_code) : '🌍',
                    userAgent: req.headers['user-agent'] || '',
                    referer: req.headers.referer || req.headers.origin || '',
                    sessionId: crypto.randomUUID()
                  }
                };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(formatted));
              } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Failed to parse geolocation data' }));
              }
            });
          });
        }
      }
    }
  }
})

// Helper function to convert country code to flag emoji
function getFlagEmoji(countryCode: string): string {
  const cC = countryCode.toUpperCase();
  return cC.replace(/./g, char => 
    String.fromCodePoint(127465 + char.charCodeAt(0))
  );
}
