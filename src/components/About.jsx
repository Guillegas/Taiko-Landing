import { Icon } from './Icon';

const VALUES = [
  {
    icon: 'Target',
    title: 'Accesibilidad',
    text: 'La IA no debería ser solo para las grandes empresas. Hacemos que estas herramientas estén al alcance de cualquier comercio.',
  },
  {
    icon: 'Lightbulb',
    title: 'Simplicidad',
    text: 'Tecnología potente no tiene por qué ser compleja. Diseñamos pensando en personas sin conocimientos técnicos.',
  },
  {
    icon: 'TrendingUp',
    title: 'Crecimiento real',
    text: 'Buscamos que nuestros clientes aumenten sus ventas y mejoren la experiencia de sus propios clientes, de forma medible.',
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-32 px-6 relative overflow-hidden" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: copy */}
          <div className="reveal">
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Sobre Nosotros
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}
            >
              Democratizando<br />la IA para el<br />pequeño comercio
            </h2>
            <div className="space-y-5 text-gray-500 leading-relaxed">
              <p>
                TAIKO nace con una misión clara: acercar las capacidades de inteligencia artificial que tienen las grandes plataformas tecnológicas al pequeño y mediano comercio.
              </p>
              <p>
                Vemos a diario cómo los pequeños negocios compiten en desventaja frente a grandes marketplaces con equipos de tecnología y recursos inmensos. Creemos que eso no es justo, y que la tecnología debería ser una palanca de igualdad.
              </p>
              <p>
                Por eso construimos herramientas sencillas, honestas y efectivas: un panel de gestión de catálogo que cualquiera puede usar, y un asistente de IA que entiende a tus clientes y habla por ti cuando no puedes estar disponible.
              </p>
            </div>
          </div>

          {/* Right: value cards */}
          <div className="space-y-6">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`reveal delay-${i + 1} flex gap-5 p-6 rounded-2xl bg-white`}
                style={{ border: '1px solid #e8edf8', boxShadow: '0 2px 12px rgba(30,64,175,0.05)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#eff6ff' }}
                >
                  <Icon name={v.icon} size={22} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
