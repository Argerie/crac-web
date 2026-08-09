import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="https://picsum.photos/seed/heroforest/1600/1000"
          alt="Costa Rica Animal Rescue Center"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-jungle-900/50" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-mist-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl font-bold md:text-7xl"
        >
          Rescatamos vida silvestre
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 font-body text-lg text-mist-50/90 md:text-xl"
        >
          Visítanos en Costa Rica y conoce a los animales que hemos rescatado.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <motion.button
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.2, delay: 1.5, repeat: 1 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-toucan-400 px-7 py-3 font-body font-medium text-mist-50 shadow-lg"
          >
            Visítanos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="rounded-full border-2 border-mist-50 px-7 py-3 font-body font-medium text-mist-50"
          >
            Dona ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
