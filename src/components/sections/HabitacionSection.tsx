import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function HabitacionSection() {
  const { t } = useTranslation();
  const cards = [
    {
      id: 'compartida',
      title: t('habitacion.compartidaTitle'),
      price: t('habitacion.compartidaPrice'),
      highlight: t('habitacion.compartidaHighlight'),
      description: t('habitacion.compartidaDesc'),
    },
    {
      id: 'privada',
      title: t('habitacion.privadaTitle'),
      price: t('habitacion.privadaPrice'),
      highlight: t('habitacion.privadaHighlight'),
      description: t('habitacion.privadaDesc'),
    },
    {
      id: 'familiar',
      title: t('habitacion.familiarTitle'),
      price: t('habitacion.familiarPrice'),
      highlight: t('habitacion.familiarHighlight'),
      description: t('habitacion.familiarDesc'),
    },
  ];

  return (
    <section className="bg-mist-50 px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col rounded-2xl border border-jungle-900/10 bg-white p-8 shadow-lg"
          >
            <h2 className="text-center font-display text-2xl text-jungle-900">
              {card.title}
            </h2>
            <p className="mt-2 text-center font-body text-xl font-medium text-sloth-500">
              {card.price}
            </p>
            <div className="mt-6 h-px w-full bg-river-200" />
            <p className="mt-6 min-h-[4.5rem] text-center font-body font-bold text-jungle-900">
              {card.highlight}
            </p>
            <p className="mt-3 min-h-[3.5rem] text-center font-body text-sm text-jungle-900/70">
              {card.description}
            </p>
            {card.id === 'compartida' && (
              <div className="mt-6 flex gap-3">
                <img
                  src="/crac-web/images/hostel.jpeg"
                  alt="Habitación compartida"
                  className="h-28 flex-1 rounded-lg object-cover"
                />
                <img
                  src="/crac-web/images/host.jpeg"
                  alt="Habitación compartida"
                  className="h-28 flex-1 rounded-lg object-cover"
                />
              </div>
            )}
            {card.id === 'privada' && (
              <div className="mt-6 flex gap-3">
                <img
                  src="/crac-web/images/sola.jpeg"
                  alt="Habitación privada"
                  className="h-28 flex-1 rounded-lg object-cover"
                />
                <img
                  src="/crac-web/images/solab.jpeg"
                  alt="Habitación privada"
                  className="h-28 flex-1 rounded-lg object-cover"
                />
              </div>
            )}
            <div className="mt-auto pt-8 flex justify-center">
              <a
                href="#Visitanos"
                className="rounded-full bg-sloth-500 px-8 py-3 font-body text-sm font-medium text-mist-50 shadow-lg transition-transform hover:scale-105"
              >
                {t('habitacion.comenzar')}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
