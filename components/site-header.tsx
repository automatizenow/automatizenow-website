'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas', href: '#faq' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="AutomatizeNow, inicio">
          <Image
            src="/automatizenow-logo.png"
            alt=""
            width={30}
            height={30}
            className="h-7 w-7 object-contain"
            priority
          />
          <span className="font-display text-[15px] font-semibold tracking-tight">
            Automatize<span className="text-brand-soft">Now</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Consulta gratuita
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Principal móvil">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Consulta gratuita
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
