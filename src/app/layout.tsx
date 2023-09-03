import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo';
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
      __html: `{
      "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  "name": "Stoffspot Private Limited",
  "image": "https://stoffspot.com/Assets/lOGO-01.png",
  "title": "STOFFSPOT | COMMING SOON Your One-Stop Exchange Marketplace Shop, Swap and Save",
  "description": "StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.",
  "url": "https://stoffspot.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nr Hanuman Nagar Bhandup",
    "addressLocality": "Mumbai",
    "postalCode": "400078",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/company/stoffspot-private-limited/",
    "https://www.instagram.com/stoff_spot/?igshid=MWZjMTM2ODFkZg%3D%3D"
  ] 
      }
      `
    }
  }
  return (
    <html lang="en">
      <head>
      <NextSeo
      openGraph={{
        url: 'https://stoffspot.com/',
        title: 'STOFFSPOT | COMMING SOON',
        description: 'StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.',
        images: [
          {
            url: 'https://stoffspot.com/Assets/lOGO-01.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
          {
            url: 'https://stoffspot.com/Assets/lOGO-02.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/png',
          },
          { url: 'https://stoffspot.com/Assets/lOGO-03.png' }
        ],
        siteName: 'Stoffspot',
      }}
      twitter={{
        handle: '@stoffspot', // Your Twitter handle
        site: '@stoffspot', // Your website's Twitter handle
        cardType: 'summary_large_image', // Twitter card type
      }
    }
    />
        <link rel='icon' href='https://stoffspot.com/Assets/lOGO-01.png' />
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
