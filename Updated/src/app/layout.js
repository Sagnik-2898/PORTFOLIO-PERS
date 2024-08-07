import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sagnik Banerjee',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics/>
      <SpeedInsights/>
    </html>
  )
}
