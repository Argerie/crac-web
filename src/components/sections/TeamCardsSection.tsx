import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Quiénes somos',
    description:
      'Conoce la historia del centro de rescate de vida silvestre, nuestra misión, propósito y cómo puedes formar parte de esta historia.',
    href: '#QuienesSomos',
    imageUrl: '/images/quienes.jpeg',
  },
  {
    title: 'Voluntariados',
    description:
      'Nuestras personas voluntarias viven la experiencia de cuidar a los animales rescatados y tienen aventuras inolvidables.',
    href: '#Voluntarios',
    imageUrl: '/images/voluntariados.jpeg',
  },
  {
    title: 'Hospital',
    description: 'Sé parte de nuestro equipo médico veterinario: rescata y aprende.',
    href: '#Voluntarios',
    imageUrl: '/images/hospital/hospital.jpeg',
  },
  {
    title: 'Visítanos',
    description: 'Conoce a los animales rescatados en un recorrido guiado por el santuario.',
    href: '#Visitanos',
    imageUrl: '/images/parquer.jpeg',
  },
  {
    title: 'Giras educativas',
    description:
      'Recorridos diseñados para escuelas y grupos, para aprender sobre conservación.',
    href: '#Giras',
    imageUrl: '/images/galeria/volcan.jpeg',
  },
];

export default function TeamCardsSection() {
  return (
    <section id="Equipo" className="mx-auto max-w-7xl bg-mist-50 px-6 py-24">
      <div className="grid grid-cols-1 gap-6">
        {sections.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="group relative block h-72 overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={s.imageUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jungle-900/50 transition-colors duration-300 group-hover:bg-jungle-900/35" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <h3 className="font-display text-3xl text-mist-50">{s.title}</h3>
              <p className="mt-1 max-w-md font-body text-sm text-mist-50/90">{s.description}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-sloth-500 px-5 py-2 font-body text-sm font-medium text-mist-50 shadow-lg">
                Conócenos →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
