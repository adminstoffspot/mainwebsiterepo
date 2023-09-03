import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STOFFSPOT | COMMING SOON',
  description: 'StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const addJsonLd = () => {
    return {
      __html: `
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "STOFFSPOT",
      "url": "https://stoffspot.com/",
      "description": "StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.",
      "publisher": {
        "@type": "Organization",
        "name": "STOFFSPOT",
        "logo": {
          "@type": "ImageObject",
          "url": 'https://stoffspot.com/Assets/lOGO-02.png',
          "width": 200,
          "height": 50
        }
      }
      `
    }
  }
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='https://stoffspot.com/Assets/lOGO-01.png'/>
        <meta
          property="og:description"
          content="StoffSpot is a online marketplace for buying and selling clothing"
        />
        <meta
          property="og:image"
          content="./Assets/lOGO-02.png"
        />
        <meta name="google-site-verification" content="9V1wd7g77Y9gGLlgJlia3CCJ2qI8DOFholXrXgB6Ilw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
        <link rel="canonical" href="https://stoffspot.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
