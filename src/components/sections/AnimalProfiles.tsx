import { motion } from 'framer-motion';
import animals from '../../data/animals.json';
import FieldLogCard from '../ui/FieldLogCard';
import type { Animal } from '../../types';

export default function AnimalProfiles() {
  return (
    <section id="Amigos" className="bg-mist-50 px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        Animales rescatados
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center font-body text-jungle-900/60">
        Pasa el cursor sobre cada tarjeta para conocer su historia.
      </p>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(animals as Animal[]).map((animal, i) => (
          <motion.div
            key={animal.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <FieldLogCard animal={animal} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
