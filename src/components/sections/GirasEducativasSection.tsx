import { motion } from 'framer-motion';

export default function GirasEducativasSection() {
  return (
    <section id="Giras" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src="/images/galeria/volcan.jpeg"
          alt="Gira educativa en la naturaleza"
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">Giras educativas</h2>
          <p className="mt-4 font-body text-jungle-900/70">
            Recorridos diseñados para escuelas, colegios y grupos. Aprendé sobre la
            conservación de la vida silvestre y el trabajo del centro de rescate.
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            Una experiencia que combina educación ambiental, contacto con la naturaleza y
            momentos que quedan para siempre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
