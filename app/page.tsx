import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TechMarquee } from '@/components/tech-marquee'
import { Services } from '@/components/services'
import { UseCases } from '@/components/use-cases'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AutomatizeNow',
  description:
    'Automatización de procesos, inteligencia artificial, integraciones y desarrollo web a medida para empresas.',
  url: 'https://automatizenow.com',
  email: 'automatizenow.team@gmail.com',
  areaServed: 'ES',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vitoria-Gasteiz',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Automatización de procesos',
    'Inteligencia Artificial',
    'Integraciones API',
    'Desarrollo web',
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <UseCases />
        <Process />
        <About />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
