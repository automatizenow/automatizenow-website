import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    n: '01',
    title: 'Analizamos',
    desc: 'Estudiamos tus procesos y detectamos dónde la tecnología puede generar más impacto.',
  },
  {
    n: '02',
    title: 'Diseñamos',
    desc: 'Definimos la solución exacta: arquitectura, herramientas e integraciones necesarias.',
  },
  {
    n: '03',
    title: 'Implementamos',
    desc: 'Construimos e integramos el sistema en tu operativa sin interrumpir tu día a día.',
  },
  {
    n: '04',
    title: 'Optimizamos',
    desc: 'Medimos, ajustamos y mejoramos de forma continua para multiplicar los resultados.',
  },
]

export function Process() {
  return (
    <section id="metodo" className="relative border-y border-border/60 bg-card/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-medium text-brand-soft">Método</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            De la idea al resultado, sin fricción
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Un proceso claro para que sepas exactamente qué esperar en cada fase.
          </p>
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-semibold text-brand-soft">
                  {step.n}
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
