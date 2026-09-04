import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const links = [
    { label: t('nav.quienesSomos'), href: '#QuienesSomos' },
    { label: t('nav.voluntariado'), href: '#Voluntarios' },
    { label: t('nav.hospital'), href: '#Hospital' },
    { label: t('nav.giras'), href: '#Giras' },
    { label: t('nav.visitanos'), href: '#Visitanos' },
  ];

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-5 py-4">
        <a href="#" className="relative z-10 flex items-center">
          <img
            src="/crac-web/images/brand/logo.jpeg"
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
            <div className="flex items-center justify-between border-b border-mist-50/20 py-4">
              <button
                onClick={() => setContactOpen((v) => !v)}
                className="flex items-center gap-3 font-utility text-lg text-mist-50 transition-colors hover:text-jungle-900"
              >
                {t('nav.contactanos')}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${
                    contactOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {contactOpen && (
              <div className="overflow-hidden border-b border-mist-50/20 py-2">
                <a
                  href={`https://wa.me/${t('footer.phone').replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-macaw-300 hover:underline"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.48 3.54 1.34 5.02L2 22l5.08-1.32A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.63 13.71c-.24.68-.99 1.12-1.68 1.24-.39.07-.89.09-1.72-.1-1.02-.3-2.09-.97-3.16-2.17-.77-.86-1.54-1.91-2.11-3.02-.53-1.06-.69-1.93-.71-2.5-.02-.58.28-1.05.57-1.36.14-.15.32-.23.52-.23h.4c.14 0 .33-.02.5.12.21.35.6 1.39.64 1.48.04.09.07.19.01.3-.06.12-.1.2-.19.31l-.3.35c-.1.1-.2.19-.08.37.12.18.56.93 1.22 1.52.84.76 1.55 1 1.79 1.12.24.12.38.1.53-.06.14-.15.6-.69.76-.93.16-.24.32-.2.53-.12.22.07 1.39.66 1.63.78.24.12.4.18.45.28.06.1.06.61-.18 1.3z" />
                  </svg>
                  WhatsApp +506 85228125
                </a>
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="mt-3 flex items-center gap-3 font-body text-sm text-macaw-300 hover:underline"
                >
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a2 2 0 00-2 2v1.5l7.4 4.4a2 2 0 002.2 0L18 7.5V6a2 2 0 00-2-2H3zm-2 6.9V14a2 2 0 002 2h14a2 2 0 002-2v-3.1l-6.1 3.65a4 4 0 01-4.4 0L1 10.9z" />
                  </svg>
                  {t('nav.correo')}: {t('footer.email')}
                </a>
              </div>
            )}
            <div className="flex items-center gap-3 py-5">
              <button
                onClick={() => {
                  setOpen(false);
                  changeLang('es');
                }}
                className={`rounded-full px-4 py-1.5 font-utility text-sm transition-colors ${
                  i18n.language === 'es'
                    ? 'bg-mist-50 text-jungle-900'
                    : 'text-mist-50 hover:text-jungle-900'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  changeLang('en');
                }}
                className={`rounded-full px-4 py-1.5 font-utility text-sm transition-colors ${
                  i18n.language === 'en'
                    ? 'bg-mist-50 text-jungle-900'
                    : 'text-mist-50 hover:text-jungle-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  document.getElementById('Dona')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-sloth-500 px-6 py-2.5 font-body text-sm font-medium text-mist-50 ring-2 ring-mist-50/70 transition-transform hover:scale-105"
              >
{t('nav.dona')}
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

