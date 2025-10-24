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
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
