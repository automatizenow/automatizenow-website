import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://automatizenow.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AutomatizeNow · Automatización, IA e integraciones para empresas',
    template: '%s · AutomatizeNow',
  },
  description:
    'Diseñamos sistemas de automatización, inteligencia artificial y desarrollo web a medida para que tu empresa ahorre tiempo, reduzca errores y crezca con orden. Primera consulta gratuita.',
  keywords: [
    'automatización de procesos',
    'inteligencia artificial para empresas',
    'integraciones API',
    'desarrollo web',
    'asistentes de IA',
    'WhatsApp IA',
    'AutomatizeNow',
    'Vitoria-Gasteiz',
  ],
  authors: [{ name: 'AutomatizeNow' }],
  creator: 'AutomatizeNow',
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'AutomatizeNow',
    title: 'AutomatizeNow · Tecnología que trabaja por tu empresa',
    description:
      'Automatización, inteligencia artificial e integraciones a medida para empresas que quieren ahorrar tiempo y crecer con orden.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomatizeNow · Tecnología que trabaja por tu empresa',
    description:
      'Automatización, inteligencia artificial e integraciones a medida para empresas.',
  },
  icons: {
    icon: '/automatizenow-logo.png',
    apple: '/automatizenow-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#141018',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
