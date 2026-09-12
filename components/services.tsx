import Image from 'next/image'
import { Bot, Globe, MessageCircle, PhoneCall, Waypoints, Workflow } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    icon: Bot,
    title: 'Inteligencia Artificial',
    desc: 'Integramos IA en tu negocio: análisis, generación de contenido y decisiones inteligentes sobre tus propios datos.',
  },
  {
    icon: Globe,
    title: 'Desarrollo Web',
    desc: 'Páginas rápidas y cuidadas al detalle, diseñadas para transmitir confianza y convertir visitantes en clientes.',
  },
  {
    icon: PhoneCall,
    title: 'Recepcionista IA',
    desc: 'Una voz natural que atiende tus llamadas, resuelve dudas y agenda citas por ti. Disponible a cualquier hora.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp IA',
    desc: 'Asistentes que responden al instante, cualifican clientes y cierran citas en el canal donde ya están.',
  },
  {
    icon: Waypoints,
    title: 'Integraciones API',
    desc: 'Conectamos tus herramientas para que la información fluya sola, sin copiar datos ni duplicar trabajo.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-brand-soft">Servicios</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Todo lo que tu empresa necesita para trabajar mejor
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Cada servicio tiene un único objetivo: que la tecnología haga el trabajo repetitivo
            y tu equipo se concentre en crecer.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Featured card */}
          <Reveal className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <article className="group relative h-full overflow-hidden rounded-2xl card-hairline p-6 transition-colors hover:border-brand/40 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient text-white shadow-lg shadow-brand/30">
                  <Workflow className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                  Automatización de procesos
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Convertimos tareas repetitivas en flujos automáticos que funcionan 24/7, sin
                  errores, liberando horas de trabajo cada semana para todo tu equipo.
                </p>
                <div className="relative mt-6 flex-1 overflow-hidden rounded-xl border border-border/60">
                  <Image
                    src="/network-visual.png"
                    alt="Nodos conectados representando procesos automatizados"
                    width={512}
                    height={512}
                    className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
              </div>
            </article>
          </Reveal>

          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-2xl card-hairline p-6 transition-colors hover:border-brand/40 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60 text-brand-soft transition-colors group-hover:border-brand/40">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
