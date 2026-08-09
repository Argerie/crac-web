export default function Footer() {
  return (
    <footer className="bg-jungle-900 px-6 py-16 text-mist-50">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">CRARC</h3>
          <p className="mt-2 font-body text-sm text-mist-50/70">
            Costa Rica Animal Rescue Center · Puerto Viejo, Limón
          </p>
        </div>
        <div className="font-utility text-sm text-mist-50/70">
          <p>Lun–Dom · 9:00–16:00</p>
          <p className="mt-2">info@crarc.org</p>
          <p>+506 0000 0000</p>
        </div>
        <div>
          <p className="font-body text-sm text-mist-50/70">Síguenos</p>
          <div className="mt-2 flex gap-4 font-utility text-sm">
            <a href="#" className="hover:text-macaw-300">Instagram</a>
            <a href="#" className="hover:text-macaw-300">Facebook</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl font-utility text-xs text-mist-50/40">
        © 2026 Costa Rica Animal Rescue Center
      </p>
    </footer>
  );
}
