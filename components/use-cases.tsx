import Image from 'next/image'
import {
  BarChart3,
  CalendarClock,
  FileText,
  Headset,
  Inbox,
  Mail,
  UserPlus,
  Waypoints,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FEATURED = [
  {
    icon: Headset,
    image: '/showcase-chat.png',
    title: 'Atención por WhatsApp y voz IA',
    desc: 'Asistentes que responden al instante en WhatsApp y recepcionistas de voz que atienden llamadas, resuelven dudas y agendan citas. A cualquier hora, con traspaso a tu equipo cuando hace falta.',
    tags: ['WhatsApp Business', 'Agentes de voz', '24/7'],
  },
  {
    icon: BarChart3,
    image: '/showcase-dashboard.png',
    title: 'Informes y datos al instante',
    desc: 'Tus ventas y métricas clave reunidas en un panel claro y en informes que se envían solos cada semana. Cero horas picando datos, decisiones con información al día.',
    tags: ['Paneles', 'Informes automáticos', 'KPIs'],
  },
  {
    icon: Waypoints,
    image: '/showcase-flow.png',
    title: 'Procesos e integraciones conectados',
    desc: 'Conectamos CRM, email, facturación y hojas de cálculo para que la información fluya sola entre tus herramientas, sin copiar datos ni duplicar trabajo.',
    tags: ['n8n · Make', 'APIs', 'Sincronización'],
  },
]

const CASES = [
  {
    icon: UserPlus,
    title: 'Captación y seguimiento de leads',
    desc: 'Cada formulario o mensaje entra solo en tu CRM, con respuesta automática al cliente en segundos.',
  },
  {
    icon: CalendarClock,
    title: 'Reservas y citas',
    desc: 'Una agenda que se gestiona sola, con recordatorios que reducen las ausencias de tus clientes.',
  },
  {
    icon: FileText,
    title: 'Facturas y documentos',
    desc: 'Presupuestos, facturas y contratos que se generan y envían solos a partir de tus datos.',
  },
  {
    icon: Mail,
    title: 'Emails y seguimiento comercial',
    desc: 'Secuencias que nutren a cada contacto en el momento justo, sin que tengas que acordarte.',
  },
  {
    icon: Inbox,
    title: 'Gestión de solicitudes',
    desc: 'Peticiones que se clasifican, asignan y responden automáticamente según tus reglas.',
  },
  {
    icon: BarChart3,
    title: 'Tareas administrativas',
    desc: 'El trabajo repetitivo de cada día resuelto en segundo plano, sin errores ni olvidos.',
  },
]

export function UseCases() {
  return (
    <section id="casos" className="relative py-16 sm:py-24 lg:py-32">
      {/* Contained ambient glow (overflow-x-clip prevents any horizontal scroll) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-x-clip">
        <div className="absolute left-[-5%] top-1/3 h-[360px] w-[360px] rounded-full bg-brand-2/12 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-brand-soft">Casos de uso</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Lo que podemos transformar
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Ejemplos reales de soluciones que desarrollamos a medida. Son escenarios de muestra
            de lo que construimos, no proyectos de clientes. Si tu caso no aparece aquí,
            cuéntanoslo: casi todo lo repetitivo se puede automatizar.
          </p>
        </Reveal>

        {/* Featured, image-led examples */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-3">
          {FEATURED.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl card-hairline transition-colors hover:border-brand/40">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60">
                  <Image
                    src={f.image || '/placeholder.svg'}
                    alt=""
                    width={640}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/70 text-brand-soft backdrop-blur">
                    <f.icon className="h-4.5 w-4.5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border/70 bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Compact grid of further examples */}
        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05}>
              <article className="group h-full bg-background p-5 transition-colors hover:bg-card sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-brand-soft transition-colors group-hover:border-brand/40">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold leading-tight tracking-tight text-balance">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-border/60 card-hairline p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-pretty text-sm text-muted-foreground">
              ¿Tienes un proceso concreto en mente? Te decimos si se puede automatizar y cómo.
            </p>
            <a
              href="#contacto"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Cuéntanos tu caso →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
