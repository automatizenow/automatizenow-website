import { Gauge, HeartHandshake, KeyRound, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Transparencia real',
    desc: 'Presupuestos cerrados y plazos claros antes de empezar. Sin letra pequeña ni costes ocultos.',
  },
  {
    icon: KeyRound,
    title: 'Tus sistemas son tuyos',
    desc: 'Todo lo que construimos queda en tu propiedad, documentado y sin dependencia de nosotros.',
  },
  {
    icon: Gauge,
    title: 'Resultados medibles',
    desc: 'Definimos contigo qué significa éxito y lo medimos: horas ahorradas, respuestas más rápidas, menos errores.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañamiento continuo',
    desc: 'No desaparecemos tras la entrega. Medimos, ajustamos y optimizamos contigo a largo plazo.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-14 gap-y-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium text-brand-soft">Nosotros</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Un equipo pequeño.
            <br />
            Un estándar muy alto.
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              AutomatizeNow nace en Vitoria-Gasteiz con una convicción: la automatización y la
              inteligencia artificial no son solo para las grandes corporaciones. Ayudamos a
              pymes y negocios de toda España a recuperar el tiempo que pierden en tareas
              repetitivas, con sistemas diseñados a la medida de cómo trabajan de verdad.
            </p>
            <p>
              No vendemos herramientas ni aplicamos plantillas. Escuchamos, proponemos y
              construimos únicamente aquello que aporta valor real a tu operativa. Y si algo no
              te va a dar resultados, te lo diremos. Preferimos tu confianza a un proyecto más.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <article className="h-full rounded-2xl card-hairline p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-brand-soft">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-[15px] font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
