import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testimonials from '../../data/testimonials.json';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={t.photoUrl}
            alt={t.name}
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <p className="mt-6 font-display text-xl italic text-jungle-900">"{t.quote}"</p>
          <p className="mt-4 font-utility text-sm text-jungle-900/60">
            {t.name} · {t.country}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-toucan-400' : 'bg-jungle-900/20'}`}
          />
        ))}
      </div>
    </section>
  );
}
