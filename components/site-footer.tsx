import Image from 'next/image'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'Método', href: '#metodo' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/automatizenow-logo.png"
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-display text-[15px] font-semibold tracking-tight">
                Automatize<span className="text-brand-soft">Now</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Automatización, inteligencia artificial e integraciones a medida para empresas que
              quieren ahorrar tiempo y crecer con orden.
            </p>
          </div>

          <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AutomatizeNow. Todos los derechos reservados.</p>
          <p>Vitoria-Gasteiz · toda España</p>
        </div>
      </div>
    </footer>
  )
}
