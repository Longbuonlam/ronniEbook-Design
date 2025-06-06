import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BookVerse - Your Digital Library',
  description: 'A modern eBook platform for book lovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
