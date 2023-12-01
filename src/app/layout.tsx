import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from '../../public/favicon.ico'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Vista',
  description: 'Creamos recorridos 3D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <link rel="shortcut icon" href={favicon.src} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
