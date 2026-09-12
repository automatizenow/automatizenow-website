'use client'

import { useState } from 'react'
import { Clock, Mail, MapPin, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const EMAIL = 'automatizenow.team@gmail.com'

export function ContactCta() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Consulta de ${form.name || 'un nuevo contacto'}${form.company ? ` · ${form.company}` : ''}`,
    )
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\n${form.message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contacto" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/18 blur-[140px]" />
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border/70 card-hairline">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Copy + contact details */}
            <Reveal className="lg:col-span-2">
              <div className="flex h-full flex-col justify-between gap-8 p-6 sm:gap-10 sm:p-10">
                <div>
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Hablemos de tu proyecto.
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    Cuéntanos qué te quita tiempo y te responderemos con una propuesta clara. La
                    primera consulta es gratuita y sin compromiso.
                  </p>
                </div>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/50 text-brand-soft">
                      <Mail className="h-4 w-4" />
                    </span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all text-foreground hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-brand-soft">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">Vitoria-Gasteiz, España</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-brand-soft">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">Respuesta en menos de 24 horas</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 border-t border-border/70 bg-background/40 p-6 sm:p-10 lg:border-l lg:border-t-0"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Nombre" htmlFor="name">
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="field-input"
                      placeholder="Tu nombre"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="field-input"
                      placeholder="tú@empresa.com"
                    />
                  </Field>
                </div>
                <Field label="Empresa (opcional)" htmlFor="company">
                  <input
                    id="company"
                    value={form.company}
                    onChange={update('company')}
                    className="field-input"
                    placeholder="Nombre de tu empresa"
                  />
                </Field>
                <Field label="¿Qué te quita tiempo?" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="field-input resize-none"
                    placeholder="Cuéntanos brevemente qué proceso te gustaría automatizar…"
                  />
                </Field>
                <button
                  type="submit"
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Enviar consulta
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Al enviar aceptas que te contactemos sobre tu consulta. Tratamos tus datos
                  conforme al RGPD.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  )
}
