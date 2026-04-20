import { useState } from 'react';
import { Icon } from './Icon';

const FIELDS = [
  { id: 'nombre',  label: 'Nombre completo',     type: 'text',  placeholder: 'Tu nombre',          span: false },
  { id: 'email',   label: 'Email',               type: 'email', placeholder: 'tu@email.com',        span: false },
  { id: 'negocio', label: 'Nombre del negocio',  type: 'text',  placeholder: 'Mi Comercio S.L.',    span: true  },
];

function validate(form) {
  const errors = {};
  if (!form.nombre.trim())                              errors.nombre  = 'Por favor, introduce tu nombre.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email   = 'Introduce un email válido.';
  if (!form.negocio.trim())                            errors.negocio = 'Indica el nombre de tu negocio.';
  if (!form.mensaje.trim())                            errors.mensaje = 'Escribe un mensaje antes de enviar.';
  return errors;
}

const EMPTY = { nombre: '', email: '', negocio: '', mensaje: '' };

export function Contact() {
  const [form,   setForm]   = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [errors, setErrors] = useState({});

  const update = (id) => (e) => setForm((prev) => ({ ...prev, [id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  const reset = () => { setStatus('idle'); setForm(EMPTY); };

  const inputStyle = (id) => ({
    background: 'rgba(255,255,255,0.06)',
    border: `1px solid ${errors[id] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}`,
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <section id="contacto" className="py-32 px-6" style={{ background: '#060e22' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
            ¿Hablamos?
          </h2>
          <p className="text-blue-200 text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Cuéntanos sobre tu negocio y te explicamos cómo TAIKO puede ayudarte. Sin compromisos.
          </p>
        </div>

        <div
          className="rounded-3xl p-10 reveal"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {status === 'sent' ? (
            <div className="text-center py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <Icon name="CheckCircle" size={36} className="text-green-400" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">¡Mensaje enviado!</h3>
              <p className="text-blue-200">Nos pondremos en contacto contigo en breve.</p>
              <button
                onClick={reset}
                className="mt-6 text-blue-400 text-sm underline bg-transparent border-0 cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {FIELDS.map((f) => (
                  <div key={f.id} className={f.span ? 'md:col-span-2' : ''}>
                    <label className="block text-blue-200 text-sm font-medium mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={update(f.id)}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none"
                      style={inputStyle(f.id)}
                    />
                    {errors[f.id] && <p className="text-red-400 text-xs mt-1.5">{errors[f.id]}</p>}
                  </div>
                ))}
              </div>

              <div className="mb-7">
                <label className="block text-blue-200 text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  placeholder="Cuéntanos qué tipo de negocio tienes y qué te gustaría mejorar..."
                  value={form.mensaje}
                  onChange={update('mensaje')}
                  className="w-full px-4 py-3.5 rounded-xl text-white text-sm resize-none outline-none"
                  style={inputStyle('mensaje')}
                />
                {errors.mensaje && <p className="text-red-400 text-xs mt-1.5">{errors.mensaje}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2.5 border-0 cursor-pointer font-dm disabled:opacity-80 disabled:cursor-wait"
              >
                {status === 'sending' ? (
                  <>
                    <Icon name="Loader" size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={18} />
                    Enviar Consulta
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
