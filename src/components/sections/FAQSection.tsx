import { useTranslation } from 'react-i18next';
import Accordion from '../ui/Accordion';

export default function FAQSection() {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
    },
  ];

  return (
    <section id="FAQ" className="bg-mist-50 px-6 py-24">
      <h2 className="text-center font-display text-3xl text-jungle-900 md:text-4xl">
        {t('faq.title')}
      </h2>
      <div className="mt-12">
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
