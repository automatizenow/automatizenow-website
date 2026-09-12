'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FAQS = [
  {
    q: '¿Cuánto cuesta un proyecto de automatización?',
    a: 'Depende del alcance. Por eso la primera consulta es gratuita: analizamos tu caso y te damos un presupuesto cerrado antes de empezar, con el detalle de lo que incluye. Sin sorpresas ni costes ocultos.',
  },
  {
    q: '¿Cuánto se tarda en implementar una solución?',
    a: 'Una automatización concreta puede estar funcionando en cuestión de días. Los proyectos más completos (webs, asistentes de IA, integraciones entre varios sistemas) se entregan por fases, normalmente en pocas semanas, para que veas resultados desde el principio.',
  },
  {
    q: '¿Qué herramientas y tecnologías utilizáis?',
    a: 'Trabajamos con plataformas líderes del sector: herramientas de automatización como n8n o Make, la API oficial de WhatsApp Business, modelos de IA de primer nivel y las APIs propias de las herramientas que ya usas. Elegimos la tecnología según tu caso, nunca al revés.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'No. Entregamos los sistemas funcionando, documentados y con la formación necesaria para tu equipo. Nuestro objetivo es que la tecnología trabaje sola, no darte otra herramienta que aprender.',
  },
  {
    q: '¿Qué pasa con mis datos y los de mis clientes?',
    a: 'Tratamos los datos conforme al RGPD. Firmamos acuerdos de confidencialidad cuando el proyecto lo requiere, limitamos los accesos al mínimo imprescindible y te asesoramos para que tus automatizaciones también cumplan la normativa.',
  },
  {
    q: '¿Ofrecéis mantenimiento y soporte posterior?',
    a: 'Sí. Ofrecemos planes de acompañamiento opcionales para supervisar, ajustar y ampliar tus sistemas. Y si prefieres gestionarlo por tu cuenta, todo queda en tu propiedad y documentado: sin permanencia y sin dependencia de nosotros.',
  },
  {
    q: '¿Trabajáis solo en Vitoria-Gasteiz?',
    a: 'No. Estamos en Vitoria-Gasteiz, pero trabajamos con empresas de toda España. Las reuniones se realizan por videollamada y toda la implementación se hace en remoto con la misma cercanía.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium text-brand-soft">Preguntas frecuentes</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Y si no encuentras la respuesta, escríbenos: contestamos en menos de 24 horas.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border/70 rounded-2xl border border-border/70 card-hairline">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-medium tracking-tight sm:text-base">
                      {item.q}
                    </span>
                    <Plus
                      className={`h-4.5 w-4.5 shrink-0 text-brand-soft transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
