import Accordion from '../ui/Accordion';

const faqs = [
  {
    question: '¿Cuáles son los horarios de visita?',
    answer: 'Abrimos todos los días de 8:00 a 16:00, incluyendo feriados.',
  },
  {
    question: '¿Cómo llegamos al centro?',
    answer: 'Podés encontrarnos como Costa Rica Animal Rescue Center, en Cebadilla de Turrúcares.',
  },
  {
    question: '¿Cuánto cuesta la entrada?',
    answer:
      'Nacionales: adultos ₡6000, niñeces ₡4000. Extranjeros: adultos $20, niñeces $10.',
  },
  {
    question: '¿Es apto para infancias?',
    answer: 'Sí, tenemos recorridos guiados pensados para familias y grupos escolares.',
  },
];

export default function FAQSection() {
  return (
    <section id="FAQ" className="bg-mist-50 px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        Preguntas frecuentes
      </h2>
      <div className="mt-12">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
