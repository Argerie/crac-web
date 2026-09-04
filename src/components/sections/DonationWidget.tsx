import { useTranslation } from 'react-i18next';

export default function DonationWidget() {
  const { t } = useTranslation();
  return (
    <a
      id="Dona"
      href="https://www.amazon.com/hz/wishlist/ls/22MUJKW4EQUV8?ref_=wl_share"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-sloth-500 px-8 py-3 font-body text-sm font-medium text-mist-50 shadow-lg transition-transform hover:scale-105"
    >
      {t('donation.donar')}
    </a>
  );
}