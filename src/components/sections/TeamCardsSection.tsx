import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function TeamCardsSection() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('teamCards.quienesTitle'),
      description: t('teamCards.quienesDesc'),
      href: '#QuienesSomos',
      imageUrl: '/crac-web/images/quienes.jpeg',
    },
    {
      title: t('teamCards.voluntariadosTitle'),
      description: t('teamCards.voluntariadosDesc'),
      href: '#Voluntarios',
      imageUrl: '/crac-web/images/voluntariados.jpeg',
    },
    {
      title: t('teamCards.hospitalTitle'),
      description: t('teamCards.hospitalDesc'),
      href: '#Voluntarios',
      imageUrl: '/crac-web/images/hospital/hospital.jpeg',
    },
    {
      title: t('teamCards.visitanosTitle'),
      description: t('teamCards.visitanosDesc'),
      href: '#Visitanos',
      imageUrl: '/crac-web/images/parquer.jpeg',
    },
    {
      title: t('teamCards.girasTitle'),
      description: t('teamCards.girasDesc'),
      href: '#Giras',
      imageUrl: '/crac-web/images/galeria/volcan.jpeg',
    },
  ];

  return (
    <section id="Equipo" className="mx-auto max-w-7xl bg-mist-50 px-6 py-24">
      <div className="grid grid-cols-1 gap-6">
        {sections.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.02 }}
            className="group relative block h-72 overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={s.imageUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-jungle-900/50 transition-colors duration-300 group-hover:bg-jungle-900/35" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <h3 className="font-display text-3xl text-mist-50">{s.title}</h3>
              <p className="mt-1 max-w-md font-body text-sm text-mist-50/90">{s.description}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-sloth-500 px-5 py-2 font-body text-sm font-medium text-mist-50 shadow-lg">
                {t('teamCards.cta')}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

