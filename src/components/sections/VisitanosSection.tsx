import { motion } from 'framer-motion';

export default function VisitanosSection() {
  return (
    <section id="Visitanos" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">Visítanos</h2>
          <p className="mt-4 font-body text-jungle-900/70">
            Ven a conocer el santuario y a los animales rescatados que son residentes
            permanentes del centro. Podés venir con toda la familia; nuestros horarios de
            atención son de lunes a domingo de 8:00 am a 4:00 pm.
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            Nos encontramos en Cebadilla de Turrúcares, en la provincia de Alajuela. El
            recorrido tiene una duración de alrededor de una hora y siempre tendrás una guía
            capacitada dentro del rescate.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src="/images/iris.jpeg"
          alt="Perezoso en el santuario"
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
