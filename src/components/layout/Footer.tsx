import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-jungle-900 px-6 py-16 text-mist-50">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">{t('footer.name')}</h3>
          <p className="mt-2 font-body text-sm text-mist-50/70">
            {t('footer.org')}
          </p>
        </div>
        <div className="font-utility text-sm text-mist-50/70">
          <p>{t('footer.horario')}</p>
          <p className="mt-2">{t('footer.email')}</p>
          <p>{t('footer.phone')}</p>
        </div>
        <div>
          <p className="font-body text-sm text-mist-50/70">{t('footer.siguenos')}</p>
          <div className="mt-2 flex gap-4 font-utility text-sm">
            <a
              href="https://www.instagram.com/costaricaanimalrescuecenter_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-macaw-300"
            >
              {t('footer.instagram')}
            </a>
            <a
              href="https://www.facebook.com/share/1DSoSKTYJ7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-macaw-300"
            >
              {t('footer.facebook')}
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl font-utility text-xs text-mist-50/40">
        {t('footer.copyright')}
      </p>
    </footer>
  );
}
