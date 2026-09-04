import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function GirasEducativasSection() {
  const { t } = useTranslation();
  return (
    <section id="Giras" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src="/crac-web/images/galeria/volcan.jpeg"
          alt={t('giras.imgAlt')}
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">{t('giras.title')}</h2>
          <p className="mt-4 font-body text-jungle-900/70">
            {t('giras.p1')}
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            {t('giras.p2')}
          </p>
          <a
            href="#Visitanos"
            className="mt-8 inline-block rounded-full bg-sloth-500 px-8 py-3 font-body text-sm font-medium text-mist-50 shadow-lg transition-transform hover:scale-105"
          >
            {t('nav.visitanos')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

