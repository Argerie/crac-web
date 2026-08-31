const media = [
  { type: 'img', src: '/images/galeria/actividades-voluntarios.jpeg', alt: 'Actividades con voluntarios' },
  { type: 'img', src: '/images/galeria/comida-voluntarios.jpeg', alt: 'Preparación de comida para los animales' },
  { type: 'img', src: '/images/galeria/voluntas.jpeg', alt: 'Voluntarios del centro' },
  { type: 'img', src: '/images/hospital/hospital.jpeg', alt: 'Hospital veterinario del centro' },
  { type: 'img', src: '/images/galeria/volcan.jpeg', alt: 'Volcán de Costa Rica' },
  { type: 'img', src: '/images/galeria/hospita.jpeg', alt: 'Atención en el hospital veterinario' },
  { type: 'img', src: '/images/voluntariados.jpeg', alt: 'Voluntariados en acción' },
];

export default function ImageCarouselGallery() {
  return (
    <section className="bg-mist-50 py-24">
      <h2 className="mb-10 px-6 text-center font-display text-3xl text-jungle-900 md:text-4xl">
        La vida en el centro
      </h2>
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
        {media.map((m) =>
          m.type === 'video' ? (
            <video
              key={m.src}
              src={m.src}
              autoPlay
              muted
              loop
              playsInline
              aria-label={m.alt}
              className="h-80 w-64 shrink-0 rounded-xl object-cover"
            />
          ) : (
            <img
              key={m.src}
              src={m.src}
              alt={m.alt}
              loading="lazy"
              className="h-80 w-64 shrink-0 rounded-xl object-cover"
            />
          )
        )}
      </div>
    </section>
  );
}
