import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Del Castillo Sergio | Backend Developer',
  description: 'Backend Developer with more than 8 years of experience in designing and implementing scalable, multi-platform software solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
