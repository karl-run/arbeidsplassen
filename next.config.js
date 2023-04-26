/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  img-src 'self' data:;
  script-src 'self' 'unsafe-eval';
  style-src 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.googleapis.com fonts.gstatic.com cdn.nav.no;
`

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
