const TECH = [
  'n8n',
  'Make',
  'WhatsApp Business API',
  'OpenAI',
  'Google Workspace',
  'Notion',
  'Airtable',
  'Zapier',
  'Stripe',
  'HubSpot',
]

export function TechMarquee() {
  return (
    <section aria-label="Tecnologías con las que trabajamos" className="border-y border-border/60 py-8">
      <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Construimos sobre tecnología de primer nivel
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...TECH, ...TECH].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display shrink-0 text-lg font-medium tracking-tight text-muted-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
