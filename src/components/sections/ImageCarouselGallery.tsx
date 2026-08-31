import { useTranslation } from 'react-i18next';

export default function ImageCarouselGallery() {
  const { t } = useTranslation();
  const media = [
    { type: 'img', src: '/crac-web/images/galeria/actividades-voluntarios.jpeg', alt: t('gallery.img1') },
    { type: 'img', src: '/crac-web/images/galeria/comida-voluntarios.jpeg', alt: t('gallery.img2') },
    { type: 'img', src: '/crac-web/images/galeria/voluntas.jpeg', alt: t('gallery.img3') },
    { type: 'img', src: '/crac-web/images/hospital/hospital.jpeg', alt: t('gallery.img4') },
    { type: 'img', src: '/crac-web/images/galeria/volcan.jpeg', alt: t('gallery.img5') },
    { type: 'img', src: '/crac-web/images/galeria/hospita.jpeg', alt: t('gallery.img6') },
    { type: 'img', src: '/crac-web/images/voluntariados.jpeg', alt: t('gallery.img7') },
  ];
  return (
    <section className="bg-mist-50 py-24">
      <h2 className="mb-10 px-6 text-center font-display text-3xl text-jungle-900 md:text-4xl">
        {t('gallery.title')}
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

