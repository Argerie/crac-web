import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="/crac-web/images/hero/perez-hero.png"
          alt={t('hero.heroImageAlt')}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-jungle-900/20" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-mist-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl font-bold md:text-7xl"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 font-body text-lg text-mist-50/90 md:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#Voluntarios"
            className="rounded-full bg-sloth-500 px-7 py-3 text-center font-body font-medium text-mist-50 shadow-lg"
          >
            {t('hero.voluntariados')}
          </a>
          <a
            href="#Visitanos"
            className="rounded-full bg-sloth-500 px-7 py-3 text-center font-body font-medium text-mist-50 shadow-lg"
          >
            {t('hero.visitanos')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

