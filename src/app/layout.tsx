import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STOFFSPOT | COMMING SOON',
  description: 'StoffSpot is a top online marketplace for buying and selling high-quality clothing, offering a diverse range of options to refresh your wardrobe or turn gently worn garments into cash.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='https://stoffspot.com/Assets/lOGO-01.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
