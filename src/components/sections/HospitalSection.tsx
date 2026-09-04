import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HospitalSection() {
  const { t } = useTranslation();
  return (
    <section id="Hospital" className="bg-mist-50 px-6 pt-4 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">
            {t('hospital.title')}
          </h2>
          <p className="mt-4 font-body text-jungle-900/70">
            {t('hospital.p1')}
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            {t('hospital.p2')}
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            {t('hospital.p3')}
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src="/crac-web/images/hospital/hospital.jpeg"
          alt={t('hospital.imgAlt')}
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}