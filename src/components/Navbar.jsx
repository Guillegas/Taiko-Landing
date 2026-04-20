import { useState, useEffect } from 'react';
import { Icon } from './Icon';

const NAV_LINKS = ['Servicios', 'Demos', 'Nosotros', 'Contacto'];

function scrollTo(sectionId) {
  document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (label) => {
    setMenuOpen(false);
    scrollTo(label);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus:outline-none"
        >
          <img
            src="/uploads/logoTaiko-transparent.png"
            alt="TAIKO"
            style={{ height: 38, width: 'auto', filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(96,165,250,0.4))' }}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => handleLink(label)}
              className="nav-link text-blue-100 text-sm font-medium font-dm bg-transparent border-0 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('Contacto')}
          className="hidden md:inline-flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl border-0 cursor-pointer font-dm"
        >
          Solicitar Demo
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menú"
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 pt-2 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => handleLink(label)}
              className="text-blue-100 text-base text-left font-medium font-dm bg-transparent border-0 cursor-pointer"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleLink('Contacto')}
            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl w-fit border-0 cursor-pointer font-dm"
          >
            Solicitar Demo
          </button>
        </div>
      )}
    </nav>
  );
}
