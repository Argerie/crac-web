import { motion } from 'framer-motion';
import team from '../../data/team.json';

export default function TeamCardsSection() {
  return (
    <section id="Equipo" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        Nuestro equipo
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {team.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <img
              src={t.photoUrl}
              alt={t.name}
              className="mx-auto h-32 w-32 rounded-full object-cover shadow-md"
            />
            <h3 className="mt-4 font-display text-lg text-jungle-900">{t.name}</h3>
            <p className="mt-1 font-body text-sm text-jungle-900/60">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
