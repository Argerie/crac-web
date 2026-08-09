import { useState } from 'react';

const amounts = [10, 25, 50, 100];

export default function DonationWidget() {
  const [selected, setSelected] = useState(25);
  const [recurring, setRecurring] = useState(false);

  return (
    <div className="rounded-2xl bg-jungle-900 p-8 text-mist-50 md:p-10">
      <h2 className="font-display text-2xl">Dona ahora</h2>
      <p className="mt-2 font-body text-sm text-mist-50/70">
        Tu donación ayuda directamente en el cuidado de los animales rescatados.
      </p>

      <div className="mt-6 grid grid-cols-4 gap-2">
        {amounts.map((a) => (
          <button
            key={a}
            onClick={() => setSelected(a)}
            className={`rounded-lg py-3 font-utility text-sm ${
              selected === a ? 'bg-toucan-400 text-mist-50' : 'bg-mist-50/10 text-mist-50'
            }`}
          >
            ${a}
          </button>
        ))}
      </div>

      <label className="mt-4 flex items-center gap-2 font-body text-sm text-mist-50/80">
        <input
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
        />
        Hacer esta donación mensual
      </label>

      <button className="mt-6 w-full rounded-full bg-toucan-400 py-3 font-body font-medium text-mist-50 transition-transform hover:scale-105">
        Donar ${selected}
        {recurring ? '/mes' : ''}
      </button>
    </div>
  );
}
