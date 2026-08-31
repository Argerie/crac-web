import { useTranslation } from 'react-i18next';

export default function VolunteerFormSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-mist-50 p-8 md:p-10">
      <h2 className="font-display text-2xl text-jungle-900">{t('form.title')}</h2>
      <p className="mt-2 font-body text-sm text-jungle-900/60">
        {t('form.subtitle')}
      </p>
      <form
        action="https://formsubmit.co/volunteering@costaricaanimalrescuecenter.org"
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
          placeholder={t('form.nombre')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t('form.email')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <select
          name="interes"
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        >
          <option>{t('form.visitar')}</option>
          <option>{t('form.voluntario')}</option>
          <option>{t('form.donar')}</option>
        </select>
        <button
          type="submit"
          className="mt-2 rounded-full bg-leaf-500 px-6 py-3 font-body font-medium text-mist-50 transition-transform hover:scale-105"
        >
          {t('form.enviar')}
        </button>
      </form>
    </div>
  );
}
