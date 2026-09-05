import { useTranslation } from 'react-i18next';

export default function VisitFormSection() {
  const { t } = useTranslation();
  return (
    <section id="VisitForm" className="bg-mist-50 px-6 pb-24">
      <div className="mx-auto max-w-2xl rounded-2xl bg-river-200 p-8 md:p-10">
        <h2 className="font-display text-2xl text-jungle-900">{t('visitForm.title')}</h2>
        <form
          action="https://formsubmit.co/volunteering@costaricaanimalrescuecenter.com"
          method="POST"
          className="mt-6 flex flex-col gap-4"
        >
          <input type="hidden" name="_subject" value={t('form.subject')} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="nombre"
            required
            placeholder={t('visitForm.nombre')}
            className="rounded-lg border border-jungle-900/20 bg-mist-50 px-4 py-3 font-body text-sm"
          />
          <input
            type="email"
            name="correo"
            required
            placeholder={t('visitForm.correo')}
            className="rounded-lg border border-jungle-900/20 bg-mist-50 px-4 py-3 font-body text-sm"
          />
          <input
            type="number"
            name="personas"
            min="1"
            required
            placeholder={t('visitForm.personas')}
            className="rounded-lg border border-jungle-900/20 bg-mist-50 px-4 py-3 font-body text-sm"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-sloth-500 px-6 py-3 font-body font-medium text-mist-50 transition-transform hover:scale-105"
          >
            {t('visitForm.enviar')}
          </button>
        </form>
      </div>
    </section>
  );
}