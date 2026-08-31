import { useState } from 'react';

const links = [
  { label: 'Quiénes somos', href: '#QuienesSomos' },
  { label: 'Voluntariado', href: '#Voluntarios' },
  { label: 'Hospital', href: '#Voluntarios' },
  { label: 'Giras educativas', href: '#Giras' },
  { label: 'Visítanos', href: '#Visitanos' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-5 py-4">
        <a href="#" className="relative z-10 flex items-center">
          <img
            src="/images/brand/logo.jpeg"
            alt="CRARC — Costa Rica Animal Rescue Center"
            className="h-11 w-auto rounded-lg shadow-md"
          />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg bg-jungle-900/70 p-2 shadow-md backdrop-blur"
        >
          <span
            className={`block h-[2px] w-5 rounded bg-mist-50 transition-transform duration-300 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-mist-50 transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-5 rounded bg-mist-50 transition-transform duration-300 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        <div
          className={`fixed inset-y-0 left-0 z-[5] w-72 bg-fern-500 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col px-8 pt-28">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const id = item.href.replace('#', '');
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-b border-mist-50/20 py-4 font-utility text-lg text-mist-50 transition-colors hover:text-jungle-900"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-6 py-5">
              <button
                onClick={() => setOpen(false)}
                className="font-utility text-sm text-mist-50"
              >
                ES / EN
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  document.getElementById('Dona')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-sloth-500 px-6 py-2.5 font-body text-sm font-medium text-mist-50 ring-2 ring-mist-50/70 transition-transform hover:scale-105"
              >
                Dona
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[4] bg-black/30 backdrop-blur-sm"
        />
      )}
    </>
  );
}
