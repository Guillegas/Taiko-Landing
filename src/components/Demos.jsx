import { Icon } from './Icon';

const DEMOS = [
  {
    id: 'concesionario',
    icon: 'Car',
    category: 'Automoción',
    title: 'Concesionario de Coches',
    description: 'Descubre cómo un concesionario usa TAIKO para que sus clientes encuentren el vehículo perfecto a través de una conversación natural con el asistente de IA.',
    tags: ['Catálogo de vehículos', 'Filtros por precio', 'Fichas técnicas'],
    active: true,
    url: 'https://frontend-xi-navy-88.vercel.app/',
    gradient: 'linear-gradient(135deg, #0f1e3d 0%, #1e40af 100%)',
  },
  {
    id: 'zapatillas',
    icon: 'ShoppingBag',
    category: 'Moda',
    title: 'Tienda de Zapatillas',
    description: 'Una tienda de calzado deportivo que muestra cómo el asistente recomienda modelos según talla, estilo y actividad física del cliente.',
    tags: ['Catálogo de modelos', 'Tallas y colores', 'Comparador'],
    active: false,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #374151 100%)',
  },
];

export function Demos() {
  return (
    <section id="demos" className="py-32 px-6" style={{ background: '#060e22' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Demos Interactivas
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
            TAIKO en acción
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            Prueba casos de uso reales y comprueba cómo el asistente atiende a los clientes con tu catálogo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DEMOS.map((demo, i) => (
            <div
              key={demo.id}
              className={`demo-card reveal delay-${i + 1} rounded-3xl overflow-hidden relative`}
              style={{ border: demo.active ? '1px solid rgba(96,165,250,0.25)' : '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Visual header */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: demo.gradient }}
              >
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)' }} />
                <div
                  className="w-24 h-24 rounded-3xl flex items-center justify-center relative z-10"
                  style={
                    demo.active
                      ? { background: 'rgba(37,99,235,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(96,165,250,0.4)' }
                      : { background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }
                  }
                >
                  <Icon name={demo.icon} size={40} className={demo.active ? 'text-blue-200' : 'text-gray-400'} />
                </div>
                {!demo.active && (
                  <div
                    className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold text-gray-300"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    Próximamente
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                  {demo.category}
                </span>
                <h3 className="text-white text-xl font-bold mt-1.5 mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {demo.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                  {demo.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full text-blue-300"
                      style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(96,165,250,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {demo.active ? (
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5 text-white font-semibold px-6 py-3 rounded-xl text-sm no-underline font-dm"
                  >
                    <Icon name="Play" size={16} />
                    Probar Demo Interactiva
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl cursor-not-allowed font-dm"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Icon name="Clock" size={16} />
                    En desarrollo · Próximamente
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
