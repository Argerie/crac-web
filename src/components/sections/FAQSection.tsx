import Accordion from '../ui/Accordion';

const faqs = [
  {
    question: '¿Cuáles son los horarios de visita?',
    answer: 'Abrimos todos los días de 9:00 a 16:00, incluyendo feriados.',
  },
  {
    question: '¿Cómo llegamos al centro?',
    answer: 'Estamos a 10 minutos de Puerto Viejo de Talamanca, sobre la ruta costera. Hay parqueo disponible.',
  },
  {
    question: '¿Cuánto cuesta la entrada?',
    answer: 'La entrada general tiene un costo simbólico que se destina 100% al cuidado de los animales.',
  },
  {
    question: '¿Es apto para niños?',
    answer: 'Sí, tenemos recorridos guiados pensados para familias y grupos escolares.',
  },
];

export default function FAQSection() {
  return (
    <section id="FAQ" className="px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        Preguntas frecuentes
      </h2>
      <div className="mt-12">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
