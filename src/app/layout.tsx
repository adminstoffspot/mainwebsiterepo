import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STOFFSPOT | COMMING SOON',
  description: 'Discover a world of style at StoffSpot – your premier destination for buying and selling quality clothing online. Explore a diverse marketplace filled with fashion treasures, where you can effortlessly refresh your wardrobe or turn your gently worn garments into cash. Join our community of fashion enthusiasts today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
