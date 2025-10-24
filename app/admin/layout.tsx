import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: "Admin Dashboard | Cosmo Granites",
  description: "Admin dashboard for managing Cosmo Granites website content",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gray-50">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
