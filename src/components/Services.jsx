import { Icon } from './Icon';

const CARDS = [
  {
    icon: 'LayoutGrid',
    title: 'Gestión de Catálogo',
    description: 'Un panel de administración pensado para personas sin conocimientos técnicos. Añade, edita y organiza tus productos fácilmente. Importación masiva mediante archivo CSV.',
    highlights: ['Panel intuitivo sin código', 'Importación masiva CSV', 'Categorías y filtros', 'Fotos y descripciones'],
    featured: false,
  },
  {
    icon: 'MessageSquare',
    title: 'Asistente Inteligente con IA',
    description: 'Un chatbot que conoce tu catálogo en profundidad y responde a las preguntas de tus clientes en lenguaje natural, recomendando los productos adecuados en cada momento.',
    highlights: ['Comprende lenguaje natural', 'Recomendaciones de producto', 'Disponible 24/7', 'Basado en tu catálogo real'],
    featured: true,
  },
  {
    icon: 'Smartphone',
    title: 'Multiplataforma',
    description: 'Lleva el asistente de IA a donde están tus clientes: tu web, WhatsApp, Telegram o una app nativa Android. Responde automáticamente las 24 horas sin que tengas que estar pendiente del móvil.',
    highlights: ['Integración con WhatsApp Business', 'Integración con Telegram', 'También en tu web', 'App nativa Android'],
    featured: false,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 px-6" style={{ background: '#f8faff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5" style={{ letterSpacing: '-0.025em' }}>
            Todo lo que necesitas<br />en una sola plataforma
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Herramientas diseñadas para que cualquier comercio pueda digitalizarse, sin necesidad de un equipo técnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`service-card reveal delay-${i + 1} rounded-3xl p-8 ${card.featured ? 'text-white relative overflow-hidden' : 'bg-white'}`}
              style={
                card.featured
                  ? { background: 'linear-gradient(145deg, #1e3a8a, #1e40af)', boxShadow: '0 24px 60px rgba(30,64,175,0.35)' }
                  : { border: '1px solid #e8edf8' }
              }
            >
              {card.featured && (
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)', transform: 'translate(40px,-40px)' }}
                />
              )}

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={card.featured ? { background: 'rgba(255,255,255,0.15)' } : { background: '#eff6ff' }}
              >
                <Icon name={card.icon} size={24} className={card.featured ? 'text-white' : 'text-blue-600'} />
              </div>

              <h3
                className={`text-xl font-bold mb-3 relative z-10 ${card.featured ? 'text-white' : 'text-gray-900'}`}
                style={{ letterSpacing: '-0.02em' }}
              >
                {card.title}
              </h3>

              <p className={`text-sm leading-relaxed mb-6 relative z-10 ${card.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                {card.description}
              </p>

              <ul className="space-y-2 relative z-10">
                {card.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={card.featured ? { background: 'rgba(255,255,255,0.2)' } : { background: '#dbeafe' }}
                    >
                      <Icon name="Check" size={10} className={card.featured ? 'text-white' : 'text-blue-600'} />
                    </div>
                    <span className={`text-sm ${card.featured ? 'text-blue-100' : 'text-gray-600'}`}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
