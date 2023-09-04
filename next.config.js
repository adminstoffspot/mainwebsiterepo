/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true, 
    async headers() {
        return [
            {
              source: '/(.*)',
              headers: [
                {
                  key: 'X-Frame-Options',
                  value: 'DENY',
                },
                {
                  key: 'Content-Security-Policy',
                  value:
                    "default-src 'self' 'https://blog.logrocket.com'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'",
                },
                {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
                },
                {
                  key: 'Permissions-Policy',
                  value: "camera=(); battery=(self); geolocation=(); microphone=('https://a-domain.com')",
                },
                {
                  key: 'Referrer-Policy',
                  value: 'origin-when-cross-origin',
                },
              ],
            },
          ];
      },   
    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/api/robots'
            },

        ];
    }
  }

module.exports = nextConfig
