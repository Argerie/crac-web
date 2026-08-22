import { motion } from 'framer-motion';

export default function VolunteersSection() {
  return (
    <section id="Voluntarios" className="bg-river-200 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src="/images/voluntariados.jpeg"
          alt="Voluntarios del Costa Rica Animal Rescue Center"
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">Voluntarios</h2>
          <p className="mt-4 font-body text-jungle-900/70">
            Vive en primera línea del rescate: prepara dietas, construye enriquecimientos
            ambientales y acompaña a los animales en su recuperación.
          </p>
          <p className="mt-2 font-body text-jungle-900/70">
            No necesitas experiencia — solo ganas de aprender y manos que ayuden.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-toucan-400 px-5 py-2 font-body text-sm font-medium text-mist-50 shadow-lg">
            Quiero ser voluntario →
          </span>
        </motion.div>
      </div>
    </section>
  );
}
