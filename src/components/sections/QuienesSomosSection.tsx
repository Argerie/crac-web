import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function QuienesSomosSection() {
  const { t } = useTranslation();
  return (
    <section id="QuienesSomos" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">
            {t('quienes.titulo')}
          </h2>

          <p className="mt-4 font-body text-jungle-900/70">
            {t('quienes.p1')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.p2')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.p3')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.p4')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p4Sci')}
            </span>{' '}
            {t('quienes.p4b')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.p5a')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5aSci')}
            </span>
            {t('quienes.p5b')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5bSci')}
            </span>
            {t('quienes.p5c')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5cSci')}
            </span>
            {t('quienes.p5d')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5dSci')}
            </span>
            {t('quienes.p5e')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5eSci')}
            </span>
            {t('quienes.p5f')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5fSci')}
            </span>
            {t('quienes.p5g')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p5gSci')}
            </span>
            {t('quienes.p5end')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.p6a')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p6aSci')}
            </span>
            {t('quienes.p6b')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p6bSci')}
            </span>
            {t('quienes.p6c')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p6cSci')}
            </span>
            {t('quienes.p6d')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p6dSci')}
            </span>
            {t('quienes.p6e')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.p6eSci')}
            </span>
            {t('quienes.p6end')}
          </p>

          <h3 className="mt-8 font-display text-2xl text-jungle-900">{t('quienes.historiaTitle')}</h3>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.historiaP1')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.historiaP2')}{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              {t('quienes.historiaP2Sci')}
            </span>{' '}
            {t('quienes.historiaP2end')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.historiaP3')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.historiaP4')}
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            {t('quienes.historiaP5')}
          </p>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <video
          src="/crac-web/videos/needus.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
