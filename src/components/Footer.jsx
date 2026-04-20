import { Icon } from './Icon';

const NAV = [
  ['servicios', 'Servicios'],
  ['demos',     'Demos'],
  ['nosotros',  'Nosotros'],
  ['contacto',  'Contacto'],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Footer() {
  return (
    <footer style={{ background: '#030a18', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/uploads/logoTaiko-transparent.png"
                alt="TAIKO"
                style={{ height: 36, width: 'auto', filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(96,165,250,0.3))' }}
              />
            </div>
            <p className="text-blue-300 text-sm leading-relaxed max-w-xs" style={{ fontWeight: 300 }}>
              SaaS para pequeños y medianos comercios. Catálogo inteligente y atención al cliente con IA.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-4 font-sora">Plataforma</h5>
            <ul className="space-y-2.5">
              {NAV.map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-blue-300 text-sm hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0 font-dm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-white text-sm font-semibold mb-4 font-sora">Contacto</h5>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-blue-400" />
                <span className="text-blue-300 text-sm">hola@taiko.es</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={14} className="text-blue-400" />
                <span className="text-blue-300 text-sm">España</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-blue-400 text-sm">© 2026 TAIKO. Todos los derechos reservados.</p>
          <span className="text-blue-400 text-xs">Hecho con ❤️ para el pequeño comercio</span>
        </div>
      </div>
    </footer>
  );
}
