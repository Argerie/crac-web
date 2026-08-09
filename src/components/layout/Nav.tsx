import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-mist-50/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <span
          className={`font-display text-xl font-semibold ${scrolled ? 'text-jungle-900' : 'text-mist-50'}`}
        >
          CRARC
        </span>
        <div className="hidden items-center gap-8 font-utility text-sm md:flex">
          {['Misión', 'Equipo', 'Amigos', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={scrolled ? 'text-jungle-900' : 'text-mist-50'}
            >
              {item}
            </a>
          ))}
          <button className={`font-utility text-sm ${scrolled ? 'text-jungle-900' : 'text-mist-50'}`}>
            ES / EN
          </button>
        </div>
        <button className="rounded-full bg-toucan-400 px-5 py-2 font-body text-sm font-medium text-mist-50 transition-transform hover:scale-105">
          Dona
        </button>
      </div>
    </nav>
  );
}
