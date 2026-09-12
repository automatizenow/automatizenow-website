'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

const CHIPS = [
  'Soluciones 100 % a medida',
  'Sin permanencia ni ataduras',
  'Respuesta en menos de 24 h',
  'Vitoria-Gasteiz · toda España',
]

const FLOATERS = [
  { label: 'Lead capturado', side: 'left', top: '18%' },
  { label: 'Cita agendada', side: 'right', top: '30%' },
  { label: 'Factura enviada', side: 'left', top: '64%' },
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <div className="absolute left-1/2 top-[-10%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand/25 blur-[110px] animate-pulse-glow sm:h-[520px] sm:w-[520px] sm:blur-[130px]" />
        <div className="absolute right-[8%] top-[35%] h-[240px] w-[240px] rounded-full bg-brand-2/20 blur-[90px] sm:h-[360px] sm:w-[360px] sm:blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-soft" />
            Automatización · Inteligencia Artificial · Integraciones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-balance text-[2rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-6xl"
          >
            Tecnología que <span className="text-gradient">trabaja por tu empresa</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
          >
            Automatizamos tareas, integramos tus herramientas y aplicamos IA donde
            realmente aporta. Menos trabajo manual, menos errores y más tiempo para
            hacer crecer tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Empieza tu consulta gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card sm:w-auto"
            >
              Ver qué hacemos
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            {CHIPS.map((chip) => (
              <li key={chip} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full brand-gradient" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-12 max-w-4xl sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/70 glow-ring">
            <Image
              src="/hero-visual.png"
              alt="Representación visual de flujos de datos automatizados convergiendo"
              width={1024}
              height={1024}
              priority
              className="h-[240px] w-full object-cover object-center sm:h-[440px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

            {/* Floating labels */}
            {FLOATERS.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                className={`absolute hidden items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs text-foreground backdrop-blur md:inline-flex ${
                  reduce ? '' : 'animate-float-slow'
                }`}
                style={{
                  top: f.top,
                  [f.side]: '4%',
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px] shadow-emerald-400/50" />
                {f.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
