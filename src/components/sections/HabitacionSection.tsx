import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Habitación compartida',
    price: '50$ / noche',
    highlight: 'Comparte una habitación con personas de tus mismos intereses y hacé conexiones.',
    description:
      'Disfrutá de alojamiento compartido con tres comidas al día, limpieza diaria de la habitación y actividades inolvidables.',
  },
  {
    title: 'Habitación privada',
    price: '70$ / noche',
    highlight: 'Mantené tu privacidad en una habitación con baño.',
    description:
      'Disfrutá del alojamiento privado con tres comidas al día, limpieza diaria de la habitación y actividades inolvidables.',
  },
  {
    title: 'Habitación familiar',
    price: '160$ / noche',
    highlight: 'Alójate con tu familia.',
    description:
      'Disfrutá del alojamiento con tu familia con tres comidas al día, limpieza diaria de la habitación y actividades inolvidables.',
  },
];

export default function HabitacionSection() {
  return (
    <section className="bg-mist-50 px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-2xl border border-jungle-900/10 bg-white p-8 shadow-lg"
          >
            <h2 className="text-center font-display text-2xl text-jungle-900">
              {card.title}
            </h2>
            <p className="mt-2 text-center font-body text-xl font-medium text-sloth-500">
              {card.price}
            </p>
            <div className="mt-6 h-px w-full bg-river-200" />
            <p className="mt-6 min-h-[4.5rem] text-center font-body font-bold text-jungle-900">
              {card.highlight}
            </p>
            <p className="mt-3 min-h-[3.5rem] text-center font-body text-sm text-jungle-900/70">
              {card.description}
            </p>
            <div className="mt-auto pt-8 flex justify-center">
              <a
                href="#Visitanos"
                className="rounded-full bg-sloth-500 px-8 py-3 font-body text-sm font-medium text-mist-50 shadow-lg transition-transform hover:scale-105"
              >
                Comenzar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
