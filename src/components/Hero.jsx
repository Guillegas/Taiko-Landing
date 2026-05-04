import { Icon } from './Icon';

const TRUST = [
  { icon: 'Shield',      text: 'Datos seguros' },
  { icon: 'Zap',        text: 'Configuración rápida' },
  { icon: 'Headphones', text: 'Soporte incluido' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden noise"
      style={{ background: '#060e22' }}
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute rounded-full"
          style={{ width: 600, height: 600, top: -100, left: -150, background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{ width: 500, height: 500, bottom: -80, right: -100, background: 'radial-gradient(circle, rgba(30,64,175,0.4) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        <div
          className="orb-3 absolute rounded-full"
          style={{ width: 350, height: 350, top: '50%', left: '55%', background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px', zIndex: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(96,165,250,0.3)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">SaaS para PYMES — Disponible ahora</span>
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-none tracking-tight mb-6"
            style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
          >
            Digitaliza tu<br />
            negocio con<br />
            <span className="grad-text">Inteligencia</span><br />
            <span className="grad-text">Artificial</span>
          </h1>

          <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-lg" style={{ fontWeight: 300 }}>
            Unimos gestión de catálogo inteligente y un asistente de IA que atiende a tus clientes las 24&nbsp;horas.
            Sin conocimientos técnicos. Sin complicaciones.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('demos')}
              className="btn-primary text-white font-semibold px-7 py-4 rounded-2xl text-base flex items-center gap-2.5 border-0 cursor-pointer font-dm"
            >
              <Icon name="Play" size={18} />
              Ver Demos
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="text-white font-medium px-7 py-4 rounded-2xl text-base flex items-center gap-2 cursor-pointer font-dm transition-all duration-200 hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              Nuestros servicios
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>

          {/* Trust signals */}
          <div className="flex items-center gap-6 mt-12 flex-wrap">
            {TRUST.map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon name={icon} size={16} className="text-blue-400" />
                <span className="text-blue-300 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mockup chat card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <div
              className="rounded-2xl p-6 w-80"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold text-sm">Asistente TAIKO</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-green-400 text-xs">Online</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white max-w-48" style={{ background: '#2563eb' }}>
                    ¿Tienen el Toyota Corolla disponible?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-52" style={{ background: 'rgba(255,255,255,0.08)', color: '#e2e8f0' }}>
                    ¡Sí! Tenemos 3 unidades disponibles. ¿Le interesa gasolina o híbrido? 🚗
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-white max-w-44" style={{ background: '#2563eb' }}>
                    Híbrido, ¿cuál es el precio?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-52" style={{ background: 'rgba(255,255,255,0.08)', color: '#e2e8f0' }}>
                    El Corolla Hybrid 2025 parte desde 26.500€. ¿Quiere que le envíe la ficha completa?
                  </div>
                </div>
              </div>

              <div
                className="mt-4 flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="text-blue-300 text-sm flex-1 opacity-50">Escribe tu pregunta...</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#2563eb' }}>
                  <Icon name="Send" size={13} className="text-white" />
                </div>
              </div>
            </div>

            {/* Top badge */}
            <div
              className="absolute -top-6 -right-6 rounded-2xl px-4 py-3"
              style={{ background: 'rgba(37,99,235,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="flex items-center gap-2">
                <Icon name="Bot" size={16} className="text-white" />
                <span className="text-white text-xs font-semibold">IA con RAG</span>
              </div>
            </div>

            {/* Bottom badge */}
            <div
              className="absolute -bottom-5 -left-8 rounded-2xl px-4 py-3"
              style={{ background: 'rgba(15,30,61,0.9)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center gap-2">
                <Icon name="BookOpen" size={14} className="text-blue-400" />
                <span className="text-blue-200 text-xs font-medium">Tu catálogo • siempre actualizado</span>
              </div>
            </div>

            {/* Android app badge */}
            <div
              className="absolute -bottom-16 right-0 rounded-2xl px-4 py-3"
              style={{ background: 'rgba(22,163,74,0.15)', backdropFilter: 'blur(20px)', border: '1px solid rgba(22,163,74,0.35)' }}
            >
              <div className="flex items-center gap-2">
                <Icon name="Smartphone" size={14} className="text-green-400" />
                <span className="text-green-300 text-xs font-medium">App Android disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-blue-400 text-xs tracking-widest uppercase">Descubrir</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  );
}
