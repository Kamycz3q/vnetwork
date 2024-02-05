import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HexaVerse - twój serwer Minecraft',
  description: 'By Kamycz3q#4601',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/HexaVerseTransparent.png" />
      </head>
      <body>
        {children}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossOrigin="anonymous"></link>

      </body>
    </html>
  )
}
