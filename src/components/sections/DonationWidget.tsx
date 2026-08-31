export default function DonationWidget() {
  return (
    <div id="Dona" className="flex h-full flex-col items-center justify-center rounded-2xl bg-jungle-900 p-8 text-center text-mist-50 md:p-10">
      <h2 className="font-display text-2xl">Dona ahora</h2>
      <p className="mt-2 mb-8 font-body text-sm text-mist-50/70 max-w-sm">
        Tu donación ayuda directamente en el cuidado de los animales rescatados.
      </p>

      <a
        href="https://www.paypal.com/myaccount/transfer/homepage/preview"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-xs rounded-full bg-sloth-500 py-3 text-center font-body font-medium text-mist-50 transition-transform hover:scale-105"
      >
        Donar
      </a>
    </div>
  );
}
