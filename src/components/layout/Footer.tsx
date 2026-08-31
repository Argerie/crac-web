export default function Footer() {
  return (
    <footer className="bg-jungle-900 px-6 py-16 text-mist-50">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">CRARC</h3>
          <p className="mt-2 font-body text-sm text-mist-50/70">
            Costa Rica Animal Rescue Center · Cebadilla, Turrúcares
          </p>
        </div>
        <div className="font-utility text-sm text-mist-50/70">
          <p>Lun–Dom · 8:00 - 16:00</p>
          <p className="mt-2">volunteering@costaricaanimalrescuecenter.org</p>
          <p>+506 85228125</p>
        </div>
        <div>
          <p className="font-body text-sm text-mist-50/70">Síguenos</p>
          <div className="mt-2 flex gap-4 font-utility text-sm">
            <a
              href="https://www.instagram.com/costaricaanimalrescuecenter_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-macaw-300"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1DSoSKTYJ7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-macaw-300"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl font-utility text-xs text-mist-50/40">
        © 2026 Costa Rica Animal Rescue Center
      </p>
    </footer>
  );
}
