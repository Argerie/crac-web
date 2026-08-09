const images = [
  'https://picsum.photos/seed/gallery1/500/600',
  'https://picsum.photos/seed/gallery2/500/600',
  'https://picsum.photos/seed/gallery3/500/600',
  'https://picsum.photos/seed/gallery4/500/600',
  'https://picsum.photos/seed/gallery5/500/600',
  'https://picsum.photos/seed/gallery6/500/600',
];

export default function ImageCarouselGallery() {
  return (
    <section className="py-24">
      <h2 className="mb-10 px-6 text-center font-display text-3xl text-jungle-900 md:text-4xl">
        La vida en el centro
      </h2>
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt="Galería CRARC"
            className="h-80 w-64 shrink-0 rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}
