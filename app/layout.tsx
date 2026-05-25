import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Edu Rise - Coaching Institute',
  description: 'Learn Today, Lead Tomorrow - Professional Coaching for Classes 1-10',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
