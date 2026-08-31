const media = [
  { type: 'video', src: '/images/galeria/mono-congo-bebe.mp4', alt: 'Bebé de mono congo' },
  { type: 'img', src: '/images/galeria/perezoso-bebe-cobija.jpeg', alt: 'Perezoso bebé arropado' },
  { type: 'img', src: '/images/galeria/perezoso-ojos-cerrados.jpeg', alt: 'Perezoso con los ojos cerrados' },
  { type: 'img', src: '/images/galeria/perezoso-principal.jpeg', alt: 'Perezoso del centro de rescate' },
  { type: 'img', src: '/images/galeria/perezosos-besos.jpeg', alt: 'Perezosos dándose besos' },
  { type: 'img', src: '/images/galeria/tucan.jpeg', alt: 'Tucán rescatado' },
  { type: 'img', src: '/images/galeria/zorro-bebe.jpeg', alt: 'Zorro bebé rescatado' },
];

export default function MissionStatement() {
  return (
    <section id="Misión" className="overflow-hidden bg-mist-50 py-16">
      <div className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
        {[...media, ...media].map((m, i) =>
          m.type === 'video' ? (
            <video
              key={i}
              src={m.src}
              autoPlay
              muted
              loop
              playsInline
              aria-label={m.alt}
              className="h-64 w-96 shrink-0 object-cover"
            />
          ) : (
            <img
              key={i}
              src={m.src}
              alt={m.alt}
              loading="lazy"
              className="h-64 w-96 shrink-0 object-cover"
            />
          )
        )}
      </div>
    </section>
  );
}
