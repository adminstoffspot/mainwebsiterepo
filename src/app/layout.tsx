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
      __html: `{
      "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  "name": "Stoffspot Private Limited",
  "image": "https://stoffspot.com/Assets/lOGO-01.png",
  "@id": "",
  "url": "https://stoffspot.com/",
  "telephone": "",
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
        <link rel='icon' href='https://stoffspot.com/Assets/lOGO-01.png' />
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
        <meta property="og:image" content="<generated>" />
<meta property="og:image:type" content="<generated>" />
<meta property="og:image:width" content="<generated>" />
<meta property="og:image:height" content="<generated>" />
<meta name="twitter:image" content="<generated>" />
<meta name="twitter:image:type" content="<generated>" />
<meta name="twitter:image:width" content="<generated>" />
<meta name="twitter:image:height" content="<generated>" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
