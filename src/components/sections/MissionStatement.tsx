import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section id="Misión" className="bg-river-200 px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center font-display text-3xl text-jungle-900 md:text-4xl"
      >
        Cada año rescatamos y rehabilitamos decenas de animales silvestres en estado de
        vulnerabilidad, devolviéndoles la oportunidad de vivir en libertad.
      </motion.p>
    </section>
  );
}
