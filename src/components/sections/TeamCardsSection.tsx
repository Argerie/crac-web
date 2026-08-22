import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Animales rescatados',
    description:
      'Conoce a Milagro, Pico, Congo y compañía — cada tarjeta esconde una historia de rescate.',
    href: '#Amigos',
    imageUrl: 'https://picsum.photos/seed/rescuedanimals/1200/600',
  },
  {
    title: 'Voluntariados',
    description:
      'Vive la experiencia de cuidar la fauna: alimentación, enriquecimiento ambiental y mucho más.',
    href: '#Voluntarios',
    imageUrl: '/images/voluntariados.jpeg',
  },
];

export default function TeamCardsSection() {
  return (
    <section id="Equipo" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        Explora
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-6">
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
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-toucan-400 px-5 py-2 font-body text-sm font-medium text-mist-50 shadow-lg">
                Conócelos →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
