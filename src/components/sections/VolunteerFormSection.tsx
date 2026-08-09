export default function VolunteerFormSection() {
  return (
    <div className="bg-mist-50 p-8 md:p-10">
      <h2 className="font-display text-2xl text-jungle-900">Visítanos o sé voluntario</h2>
      <p className="mt-2 font-body text-sm text-jungle-900/60">
        Cuéntanos qué te interesa y te contactamos.
      </p>
      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <select className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm">
          <option>Quiero visitar</option>
          <option>Quiero ser voluntario</option>
          <option>Quiero donar</option>
        </select>
        <button
          type="submit"
          className="mt-2 rounded-full bg-leaf-500 px-6 py-3 font-body font-medium text-mist-50 transition-transform hover:scale-105"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
