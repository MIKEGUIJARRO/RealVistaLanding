import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from '../../public/favicon.ico'
import Head from 'next/head'

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
      <Head>
        <title key="title">Real Vista</title>
        <meta key="keywords" name="keywords" content={`RealVista, RealVista.com, RealVista.ai, RealVista.org`} />
        <meta key="description" name="description" content='Recorridos virtuales' />
        <meta key="og-title" property="og:title" content={'RealVista'} />
        <meta key="og-description" property="og:description" content='Recorridos virtuales' />
        <meta key="og-url" property="og:url" content={`https://realvista.org`} />
        <meta property="og:image" itemProp="image" content="https://res.cloudinary.com/dzvqqr5hv/image/upload/v1701417952/realvista_ss_f34jb2.png" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
