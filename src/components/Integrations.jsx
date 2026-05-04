import { Icon } from './Icon';

const CHANNELS = [
  {
    icon: 'MessageCircle',
    name: 'WhatsApp Business',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.1)',
    border: 'rgba(37,211,102,0.25)',
    description: 'Tu asistente responde en el chat de WhatsApp de tu negocio. Tus clientes preguntan como siempre y reciben respuestas inmediatas con información real de tu catálogo.',
  },
  {
    icon: 'Send',
    name: 'Telegram',
    color: '#229ED9',
    bg: 'rgba(34,158,217,0.1)',
    border: 'rgba(34,158,217,0.25)',
    description: 'Conecta tu bot de Telegram con el catálogo de TAIKO. Ideal para negocios cuya comunidad ya usa Telegram como canal principal de comunicación.',
  },
  {
    icon: 'Globe',
    name: 'Tu Web',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.1)',
    border: 'rgba(37,99,235,0.25)',
    description: 'Incrusta el widget de TAIKO en tu página web con una sola línea de código. El asistente aparece como un chat flotante listo para atender visitas.',
  },
  {
    icon: 'Smartphone',
    name: 'App Móvil Android',
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.1)',
    border: 'rgba(22,163,74,0.25)',
    description: 'Despliega una app nativa Android para que tus clientes accedan al catálogo y al asistente de IA directamente desde su móvil, con notificaciones y experiencia premium.',
  },
];

export function Integrations() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#060e22' }}>
      {/* Ambient orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{ width: 700, height: 300, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Integraciones
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
            Tu asistente, donde<br />están tus clientes
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Conecta TAIKO con WhatsApp, Telegram o tu web. Tu negocio atiende clientes{' '}
            <strong className="text-white font-medium">24 horas al día, 7 días a la semana</strong>, aunque estés durmiendo.
          </p>
        </div>

        {/* Channel cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {CHANNELS.map((ch, i) => (
            <div
              key={ch.name}
              className={`reveal delay-${i + 1} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1`}
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${ch.border}` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: ch.bg, border: `1px solid ${ch.border}` }}
                >
                  <Icon name={ch.icon} size={22} style={{ color: ch.color }} className="" />
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}
                >
                  ✓ Disponible
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ letterSpacing: '-0.02em' }}>
                {ch.name}
              </h3>
              <p className="text-blue-300 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                {ch.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="reveal rounded-3xl px-10 py-9 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(30,64,175,0.25))', border: '1px solid rgba(96,165,250,0.2)' }}
        >
          <div className="flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,99,235,0.3)' }}
            >
              <Icon name="Clock" size={26} className="text-blue-300" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-1" style={{ letterSpacing: '-0.02em' }}>
                Atención al cliente 24/7, sin coste adicional
              </h4>
              <p className="text-blue-300 text-sm">
                El asistente nunca descansa. Responde al instante en WhatsApp, Telegram o tu web, con la información actualizada de tu catálogo.
              </p>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary flex-shrink-0 text-white font-semibold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap border-0 cursor-pointer font-dm"
          >
            <Icon name="ArrowRight" size={16} />
            Quiero integrarlo
          </button>
        </div>
      </div>
    </section>
  );
}
