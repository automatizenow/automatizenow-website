import { useEffect, useState, type FormEvent, type MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  CircleGauge,
  FileCheck2,
  Layers3,
  Menu,
  MessageCircle,
  PhoneCall,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

const ASSETS = {
  logo: "/__manus__/automatizenow-logo_261195a1.png",
  hero: "/__manus__/hero-visual_6acdb915.png",
  network: "/__manus__/network-visual_f2d88cc1.png",
  chat: "/__manus__/showcase-chat_0fdfe9d5.png",
  dashboard: "/__manus__/showcase-dashboard_4dc78ccb.png",
  flow: "/__manus__/showcase-flow_f072739d.png",
  team: "/__manus__/team-workflow_c076736c.jpg",
  architecture: "/__manus__/system-architecture_9068d45e.jpg",
};

const WHATSAPP_LINK = "https://wa.me/34690634014?text=Hola%20AutomatizeNow%2C%20quiero%20informaci%C3%B3n%20sobre%20automatizaci%C3%B3n";

const navigation = [
  ["Servicios", "#servicios"],
  ["Casos de uso", "#casos"],
  ["Método", "#metodo"],
  ["Nosotros", "#nosotros"],
];

const services = [
  {
    number: "01",
    title: "Automatización\nde procesos",
    text: "Convertimos tareas repetitivas en flujos automáticos que funcionan 24/7, liberando horas de trabajo cada semana.",
    icon: Zap,
    className: "service-large",
  },
  {
    number: "02",
    title: "Inteligencia\nArtificial",
    text: "IA aplicada sobre tus datos para atender, analizar, clasificar y decidir con mayor velocidad.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Recepcionista\nIA",
    text: "Una voz natural que atiende llamadas, resuelve dudas y agenda citas a cualquier hora.",
    icon: PhoneCall,
  },
  {
    number: "04",
    title: "WhatsApp\nIA",
    text: "Asistentes que responden al instante, cualifican clientes y cierran citas en su canal habitual.",
    icon: MessageCircle,
  },
  {
    number: "05",
    title: "Integraciones\nAPI",
    text: "Conectamos tus herramientas para que la información fluya sin duplicar trabajo.",
    icon: Layers3,
  },
];

const cases = [
  {
    eyebrow: "Atención que no espera",
    title: "Conversaciones que\nconvierten en citas.",
    description:
      "Un asistente disponible cuando tus clientes lo necesitan. Responde, cualifica y deja cada conversación preparada para tu equipo.",
    tags: ["WhatsApp Business", "Agentes de voz", "Disponible 24/7"],
    image: ASSETS.chat,
    badge: "WhatsApp + Voz IA",
  },
  {
    eyebrow: "Datos que se mueven solos",
    title: "Decisiones claras,\nsin perseguir datos.",
    description:
      "Ventas, operaciones y métricas clave reunidas en un solo lugar. Informes que llegan cuando los necesitas, no cuando queda tiempo.",
    tags: ["Paneles", "Informes automáticos", "KPIs"],
    image: ASSETS.dashboard,
    badge: "Reporting inteligente",
  },
  {
    eyebrow: "Procesos conectados",
    title: "Cada herramienta,\nen la misma dirección.",
    description:
      "CRM, correo, facturación y hojas de cálculo conectados con la lógica que necesita tu operativa.",
    tags: ["n8n · Make", "APIs", "Sincronización"],
    image: ASSETS.flow,
    badge: "Integraciones a medida",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Claridad desde el inicio",
    text: "Presupuestos cerrados y plazos claros. Sin letra pequeña ni costes ocultos.",
  },
  {
    icon: FileCheck2,
    title: "Tus sistemas son tuyos",
    text: "Todo queda en tu propiedad, documentado y sin depender de nosotros.",
  },
  {
    icon: CircleGauge,
    title: "Valor que se puede medir",
    text: "Definimos resultados reales: tiempo recuperado, errores evitados y respuestas más rápidas.",
  },
];

const questions = [
  {
    question: "¿Cuánto cuesta un proyecto de automatización?",
    answer:
      "Depende del alcance. La primera consulta es gratuita: analizamos tu caso y te damos un presupuesto cerrado antes de empezar, con el detalle de lo que incluye.",
  },
  {
    question: "¿Cuánto se tarda en implementar una solución?",
    answer:
      "Las soluciones se plantean por fases. Tras la primera conversación definimos un calendario realista, cuidando que la implantación no interrumpa tu operativa.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. Trabajamos a partir de cómo ya funciona tu negocio y te entregamos una solución clara, documentada y fácil de utilizar.",
  },
  {
    question: "¿Qué pasa con mis datos y los de mis clientes?",
    answer:
      "Diseñamos cada integración con criterios de privacidad, acceso mínimo necesario y cumplimiento RGPD adaptado a la naturaleza de tu proyecto.",
  },
];

const testimonials = [
  { initials: "MC", name: "Marta C.", role: "Dirección de operaciones", company: "Pyme de servicios", quote: "Recuperamos horas cada semana y, sobre todo, dejamos de depender de recordatorios manuales.", tone: "violet" },
  { initials: "JL", name: "Javier L.", role: "Socio fundador", company: "Empresa B2B", quote: "Lo que más valoramos fue que entendieran nuestro proceso antes de proponernos ninguna herramienta.", tone: "blue" },
  { initials: "AR", name: "Ana R.", role: "Responsable comercial", company: "Negocio local", quote: "Ahora cada lead recibe respuesta y nuestro equipo puede centrarse en las conversaciones que importan.", tone: "mint" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#inicio" aria-label="AutomatizeNow, inicio">
      <img src={ASSETS.logo} alt="" />
      {!compact && (
        <span>
          <b>Automatize</b><em>Now</em>
        </span>
      )}
    </a>
  );
}

function GridTexture() {
  return <div className="grid-texture" aria-hidden="true" />;
}

function FlowCanvas() {
  return (
    <div className="flow-canvas" aria-label="Visual de un flujo de automatización">
      <div className="flow-orbit flow-orbit-one" />
      <div className="flow-orbit flow-orbit-two" />
      <div className="flow-arc flow-arc-one" />
      <div className="flow-arc flow-arc-two" />
      <div className="flow-center">
        <img src={ASSETS.logo} alt="" />
      </div>
      <div className="flow-card flow-card-one"><span className="signal-dot" /><div><b>Lead entrante</b><small>Formulario web</small></div><ChevronRight /></div>
      <div className="flow-card flow-card-two"><Bot /><div><b>IA cualifica</b><small>En segundos</small></div><span className="status">Listo</span></div>
      <div className="flow-card flow-card-three"><Check /><div><b>Cita agendada</b><small>Calendario sincronizado</small></div></div>
      <div className="flow-pill flow-pill-top">RESPUESTA &lt; 1 MIN</div>
      <div className="flow-pill flow-pill-bottom">SISTEMA ACTIVO <span /></div>
      <i className="star s-one" /><i className="star s-two" /><i className="star s-three" /><i className="star s-four" />
    </div>
  );
}

function MetricCard({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <article className="metric-card reveal">
      <span className="metric-value">{value}</span>
      <h3>{label}</h3>
      <p>{detail}</p>
    </article>
  );
}

function EditorialHero() {
  return (
    <div className="editorial-hero" aria-label="Panel editorial de automatización para empresas">
      <div className="editorial-glow" />
      <div className="editorial-window">
        <div className="editorial-window-top"><span /><span /><span /><b>automatizenow / workspace</b></div>
        <div className="editorial-window-body"><div className="editorial-sidebar"><i /><i /><i /><i /></div><div className="editorial-main"><small>VISTA GENERAL</small><h3>Tu operación,<br /><em>en movimiento.</em></h3><div className="editorial-stats"><span><b>+64%</b><small>tiempo recuperado</small></span><span><b>24/7</b><small>sistemas activos</small></span></div><div className="editorial-line"><i /><i /><i /><i /><i /><i /></div></div></div>
      </div>
      <div className="editorial-note note-one"><span className="signal-dot" /><div><b>Proceso automatizado</b><small>Listo para crecer</small></div></div>
      <div className="editorial-note note-two"><Check /><div><b>+5.6 h</b><small>recuperadas esta semana</small></div></div>
      <div className="editorial-word">WORK<br /><em>SMARTER</em></div>
    </div>
  );
}

function TiltHandlers() {
  return {
    onMouseMove: (event: ReactMouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      event.currentTarget.style.setProperty("--tilt-x", `${y * -6}deg`);
      event.currentTarget.style.setProperty("--tilt-y", `${x * 7}deg`);
    },
    onMouseLeave: (event: ReactMouseEvent<HTMLElement>) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    },
  };
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [sent, setSent] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formError, setFormError] = useState("");
  const tilt = TiltHandlers();
  const savings = { hours: 56, money: 1344 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonials.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    const data = new FormData(event.currentTarget);
    data.append("_subject", `Nueva consulta AutomatizeNow · ${data.get("name") || "Nuevo contacto"}`);
    data.append("_captcha", "false");
    data.append("_template", "table");
    fetch("https://formsubmit.co/ajax/automatizenow.team@gmail.com", { method: "POST", headers: { Accept: "application/json" }, body: data })
      .then((response) => { if (!response.ok) throw new Error("No se pudo enviar"); setSent(true); })
      .catch(() => setFormError("No hemos podido enviar el mensaje. Escríbenos directamente a automatizenow.team@gmail.com."));
  };

  return (
    <main id="inicio">
      <section className="hero section-dark">
        <GridTexture />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <header className="nav-wrap">
          <nav className="nav container" aria-label="Navegación principal">
            <BrandMark />
            <div className="nav-links">
              {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            </div>
            <a href="#contacto" className="nav-cta">Consulta gratuita <ArrowUpRightIcon /></a>
            <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir navegación">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </nav>
          {menuOpen && (
            <div className="mobile-menu container">
              {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
              <a href="#contacto" onClick={closeMenu}>Consulta gratuita <ArrowRight /></a>
            </div>
          )}
        </header>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="kicker reveal"><span className="kicker-spark">✦</span> AUTOMATIZACIÓN · IA · INTEGRACIONES</div>
            <h1 className="hero-title reveal">Tu empresa avanza.<br /><span>La tecnología</span> la acompaña.</h1>
            <p className="hero-lede reveal">Automatizamos tareas, conectamos herramientas y aplicamos IA donde realmente aporta. Más foco para crecer. Menos trabajo que no mueve tu negocio.</p>
            <div className="hero-actions reveal">
              <a href="#contacto" className="button button-primary">Empieza tu consulta <ArrowRight /></a>
              <a href="#casos" className="button button-ghost"><Play fill="currentColor" /> Ver lo que hacemos</a>
            </div>
            <div className="hero-proof reveal">
              <div className="avatar-stack"><span>R</span><span>L</span><span>A</span><span>M</span></div>
              <p><b>Soluciones hechas a medida</b><br />para equipos que quieren trabajar mejor.</p>
            </div>
          </div>
          <div className="hero-visual reveal"><div className="hero-abstract"><span>01 / AUTOMATION SYSTEMS</span><b>Más claridad.<br /><em>Menos fricción.</em></b><i /><small>Diseñamos sistemas que trabajan alrededor de tu negocio.</small></div></div>
        </div>
        <div className="hero-foot container">
          <div><span className="pulse" /> Disponible para nuevos proyectos</div>
          <a href="#servicios">Descubre cómo trabajamos <ArrowDownRight /></a>
        </div>
      </section>

      <section className="tech-strip">
        <div className="container tech-inner">
          <span className="eyebrow">CONSTRUIMOS SOBRE TECNOLOGÍA DE PRIMER NIVEL</span>
          <div className="tech-marquee" aria-label="Tecnologías con las que trabajamos"><div className="tech-logos">
            <b>n8n</b><b>make</b><b className="openai-mark">◎ OpenAI</b><b>Notion</b><b>HubSpot</b><b>stripe</b><b>zapier</b><b>n8n</b><b>make</b><b className="openai-mark">◎ OpenAI</b><b>Notion</b><b>HubSpot</b><b>stripe</b><b>zapier</b>
          </div></div>
        </div>
      </section>

      <section className="outcomes section-dark" id="servicios">
        <GridTexture />
        <div className="container">
          <div className="section-heading centered reveal">
            <span className="eyebrow">NO MÁS TIEMPO PERDIDO</span>
            <h2>La operativa que ya tienes.<br /><span>Pero a otra velocidad.</span></h2>
            <p>Automatizamos lo repetitivo para que tu equipo pueda dedicar su atención a los clientes, las decisiones y el crecimiento.</p>
          </div>
          <div className="metrics-grid">
            <MetricCard value="24/7" label="Sistemas que no paran" detail="Procesos disponibles incluso cuando tu equipo descansa." />
            <MetricCard value="1×" label="Un único flujo de trabajo" detail="Todas tus herramientas conectadas, sin silos ni duplicados." />
            <MetricCard value="0" label="Tareas olvidadas" detail="Reglas claras, avisos a tiempo y todo lo que importa bajo control." />
          </div>
        </div>
      </section>

      <section className="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="services-head reveal">
            <div>
              <span className="eyebrow dark-eyebrow">SERVICIOS</span>
              <h2 id="services-heading">Tecnología diseñada<br />alrededor de tu negocio.</h2>
            </div>
            <p>No vendemos una herramienta. Diseñamos el sistema exacto que elimina fricción en tu manera de trabajar.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.number} {...tilt} className={`service-card tilt-card reveal ${service.className ?? ""}`}>
                  <div className="service-card-top"><span>{service.number}</span><Icon /></div>
                  <h3>{service.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <p>{service.text}</p>
                  <a href="#contacto" aria-label={`Saber más sobre ${service.title.replace("\n", " ")}`}>Saber más <ArrowRight /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cases section-dark" id="casos">
        <GridTexture />
        <div className="container">
          <div className="section-heading reveal">
            <span className="eyebrow">CASOS DE USO</span>
            <h2>Una buena automatización<br />se nota <span>antes de explicarla.</span></h2>
          </div>
          <div className="case-list">
            {cases.map((item, index) => (
              <article {...tilt} className={`case-card tilt-card reveal ${index % 2 === 1 ? "case-reverse" : ""}`} key={item.title}>
                <div className="case-copy">
                  <span className="case-count">0{index + 1}</span>
                  <span className="eyebrow">{item.eyebrow}</span>
                  <h3>{item.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a className="text-link" href="#contacto">Quiero una solución así <ArrowRight /></a>
                </div>
                <div className="case-image-wrap">
                  <img src={item.image} alt="" />
                  <div className="case-image-gradient" />
                  <div className="image-caption"><span className="pulse" /> {item.badge}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="metodo">
        <div className="container process-container">
          <div className="process-main reveal">
            <span className="eyebrow dark-eyebrow">NUESTRO MÉTODO</span>
            <h2>De la idea al<br /><span>sistema que funciona.</span></h2>
            <p>Un proceso claro, con conversaciones sencillas y decisiones que entiendes en cada etapa.</p>
            <a className="button button-dark" href="#contacto">Hablemos de tu proceso <ArrowRight /></a>
          </div>
          <ol className="process-list">
            {[
              ["01", "Analizamos", "Entendemos qué tareas te frenan y dónde está la oportunidad real."],
              ["02", "Diseñamos", "Definimos una solución concreta, con las herramientas que mejor encajan."],
              ["03", "Implementamos", "Construimos e integramos sin interrumpir el ritmo de tu equipo."],
              ["04", "Optimizamos", "Medimos, ajustamos y mejoramos para que el resultado se multiplique."],
            ].map(([number, title, text]) => <li className="reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowDownRight /></li>)}
          </ol>
        </div>
      </section>

      <section className="calculator" id="calculadora">
        <div className="container calculator-grid">
          <div className="calculator-copy reveal">
            <span className="eyebrow dark-eyebrow">ESTIMA EL IMPACTO</span>
            <h2>¿Cuánto tiempo<br /><span>puedes recuperar?</span></h2>
            <p>Una estimación rápida para entender el valor de automatizar antes de hablar de herramientas o presupuestos.</p>
            <div className="calculator-note"><span><Users /></span><p>El resultado es orientativo y depende de la complejidad real de tus procesos.</p></div>
          </div>
          <div className="calculator-panel reveal">
            <div className="calculator-result"><div><span className="result-number">{savings.hours} h</span><small>recuperadas al mes</small></div><div><span className="result-number">{savings.money.toLocaleString("es-ES")} €</span><small>valor estimado al mes</small></div></div>
            <div className="savings-stage"><div className="savings-board manual-board"><b>A mano</b><small>Como se ha hecho siempre</small><span>Responder emails <i>10:42</i></span><span>Revisar datos <i>13:16</i></span><span>Actualizar CRM <i>16:20</i></span></div><div className="savings-clock" aria-label={`Ahorro estimado de ${savings.hours} horas al mes`}><div className="clock-ring"><span className="clock-tick tick-1" /><span className="clock-tick tick-2" /><span className="clock-tick tick-3" /><span className="clock-tick tick-4" /><span className="clock-hand" /><span className="clock-center" /></div><strong>{savings.hours} h</strong><small>recuperadas / mes</small></div><div className="savings-board auto-board"><b>Con AutomatizeNow</b><small>Lo que puede hacer tu sistema</small><span>Responder emails <i>09:18</i></span><span>Revisar datos <i>09:48</i></span><span>Actualizar CRM <i>10:11</i></span></div></div>
            <a className="button button-primary" href="#contacto">Quiero analizar mi caso <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="testimonials section-dark" id="testimonios">
        <GridTexture />
        <div className="container">
          <div className="section-heading centered reveal"><span className="eyebrow">CONFIANZA QUE SE CONSTRUYE</span><h2>La tecnología importa.<br /><span>La experiencia también.</span></h2><p>La estructura está preparada para publicar testimonios autorizados de clientes, con su foto y logo, sin inventar historias ni datos.</p></div>
          <div className="testimonial-carousel" aria-roledescription="carrusel" aria-label="Testimonios de clientes"><div className="testimonial-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
            {testimonials.map((testimonial) => <article {...tilt} className={`testimonial-card tilt-card reveal ${testimonial.tone}`} key={testimonial.name}><div className="testimonial-top"><div className="testimonial-avatar">{testimonial.initials}</div><div><b>{testimonial.name}</b><small>{testimonial.role}</small></div><span className="company-mark">{testimonial.company}</span></div><p>“{testimonial.quote}”</p><div className="testimonial-footer"><span className="stars">★★★★★</span><small>Historia preparada para validación</small></div></article>)}
          </div></div><div className="carousel-controls"><button type="button" onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Testimonio anterior"><ChevronLeft /></button>{testimonials.map((testimonial, index) => <button className={index === activeTestimonial ? "active" : ""} type="button" key={testimonial.name} onClick={() => setActiveTestimonial(index)} aria-label={`Ver testimonio ${index + 1}`} />)}<button type="button" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} aria-label="Siguiente testimonio"><ChevronRight /></button></div>
        </div>
      </section>

      <section className="about section-dark" id="nosotros">
        <GridTexture />
        <div className="about-orb" />
        <div className="container about-grid">
          <div className="about-image reveal">
            <img src={ASSETS.team} alt="Equipo revisando un flujo de automatización" />
            <div className="about-image-label"><Sparkles /> Vitoria-Gasteiz<br />Toda España</div>
          </div>
          <div className="about-copy reveal">
            <span className="eyebrow">POR QUÉ AUTOMATIZENOW</span>
            <h2>Un equipo pequeño.<br /><span>Un estándar muy alto.</span></h2>
            <p>AutomatizeNow nace con una convicción: la automatización y la inteligencia artificial no son solo para las grandes corporaciones.</p>
            <p>Escuchamos, proponemos y construimos únicamente aquello que aporta valor real a tu operativa. Si algo no va a funcionar, te lo diremos.</p>
            <div className="trust-list">
              {trustPoints.map((point) => { const Icon = point.icon; return <div key={point.title}><span><Icon /></span><article><h3>{point.title}</h3><p>{point.text}</p></article></div>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <img className="proof-background" src={ASSETS.architecture} alt="" />
        <div className="container proof-grid">
          <div className="proof-copy reveal"><span className="eyebrow dark-eyebrow">HECHO PARA QUEDARSE</span><h2>Tu negocio no necesita otra moda.<br /><span>Necesita una base más fuerte.</span></h2></div>
          <div className="proof-quote reveal"><span>“</span><p>Construimos sistemas que tu equipo puede entender, utilizar y hacer crecer. La tecnología tiene que darte autonomía, no crear una nueva dependencia.</p><div><BrandMark compact /><small>AutomatizeNow<br />Tecnología que trabaja por tu empresa</small></div></div>
        </div>
      </section>

      <section className="contact section-dark" id="contacto">
        <GridTexture />
        <div className="contact-glow" />
        <div className="container contact-grid">
          <div className="contact-copy reveal">
            <span className="eyebrow">TU PRÓXIMO PASO</span>
            <h2>Hagamos que<br /><span>el trabajo fluya.</span></h2>
            <p>Cuéntanos qué te quita tiempo y te responderemos con una propuesta clara. La primera conversación es gratuita y sin compromiso.</p>
            <div className="contact-details"><a href="mailto:automatizenow.team@gmail.com">automatizenow.team@gmail.com</a><span>Vitoria-Gasteiz · Toda España</span><span><i className="pulse" /> Respuesta en menos de 24 h</span></div>
          </div>
          <form className="contact-form reveal" onSubmit={handleForm}>
            {sent ? <div className="form-sent"><span><Check /></span><h3>Gracias por contarnos tu caso.</h3><p>Te responderemos en menos de 24 horas.</p><button type="button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <>
              <label>Nombre<input required name="name" placeholder="¿Cómo te llamas?" /></label>
              <label>Email<input required name="email" type="email" placeholder="tu@empresa.com" /></label>
              <label>Empresa <small>(opcional)</small><input name="company" placeholder="Nombre de tu empresa" /></label>
              <label>¿Qué te quita tiempo?<textarea required name="message" placeholder="Cuéntanos el proceso que te gustaría mejorar..." rows={4} /></label>
              <button className="button button-primary button-submit" type="submit">Enviar consulta <Send /></button>
              {formError && <p className="form-error">{formError}</p>}<p className="form-note">Envío seguro y directo a <b>automatizenow.team@gmail.com</b> mediante FormSubmit. Tratamos tus datos conforme al RGPD.</p>
            </>}
          </form>
        </div>
      </section>

      <section className="faq" id="preguntas">
        <div className="container faq-grid">
          <div className="faq-intro reveal"><span className="eyebrow dark-eyebrow">PREGUNTAS FRECUENTES</span><h2>Respuestas claras,<br />desde el principio.</h2><p>Si tienes un caso concreto, la mejor respuesta empieza con una conversación.</p><a href="#contacto" className="text-link">Escríbenos tu caso <ArrowRight /></a></div>
          <div className="accordion reveal">
            {questions.map((item, index) => <div className={`accordion-item ${openQuestion === index ? "open" : ""}`} key={item.question}><button onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{item.question}</span><ChevronDown /></button><div className="accordion-answer"><p>{item.answer}</p></div></div>)}
          </div>
        </div>
      </section>

      <footer className="footer section-dark">
        <div className="container footer-main"><div><BrandMark /><p>Automatización, inteligencia artificial e integraciones a medida para empresas que quieren ahorrar tiempo y crecer con orden.</p></div><div className="footer-links"><span>NAVEGACIÓN</span>{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="#contacto">Contacto</a></div><div className="footer-links"><span>CONTACTO</span><a href="mailto:automatizenow.team@gmail.com">automatizenow.team@gmail.com</a><p>Vitoria-Gasteiz<br />Toda España</p></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} AutomatizeNow</span><span>Hecho con intención · Sin plantillas</span></div>
      </footer>
      <a className="whatsapp-float" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp de AutomatizeNow"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.46 0 .11 5.35.11 11.93c0 2.1.55 4.15 1.59 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.46-8.43ZM12.05 21.85h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.88 9.88 0 1 1 8.36 4.61Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.74-.87-2.89-1.55-4.04-3.5-.3-.52.3-.48.86-1.6.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" /></svg></a>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <span className="arrow-up">↗</span>;
}
