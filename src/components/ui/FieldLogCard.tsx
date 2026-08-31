import type { Animal } from '../../types';

const statusLabels: Record<Animal['status'], string> = {
  rehabilitating: 'En rehabilitación',
  'ready-to-release': 'Lista para liberar',
  'permanent-resident': 'Residente permanente',
};

export default function FieldLogCard({ animal }: { animal: Animal }) {
  return (
    <div className="group relative h-96 [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className="absolute inset-0 rounded-xl bg-white shadow-md overflow-hidden [backface-visibility:hidden]"
        >
          <img src={animal.imageUrl} alt={animal.name} className="h-2/3 w-full object-cover" />
          <div className="p-4">
            <span className="rounded-full bg-toucan-400 px-2 py-1 font-utility text-xs text-mist-50">
              {statusLabels[animal.status]}
            </span>
            <h3 className="mt-2 font-display text-2xl text-jungle-900">{animal.name}</h3>
            <p className="font-utility text-xs text-jungle-900/60">
              {animal.species}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl bg-jungle-900 p-6 text-mist-50 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
          <h3 className="font-display text-2xl mb-2">{animal.name}</h3>
          <p className="font-body text-sm leading-relaxed">{animal.story}</p>
        </div>
      </div>
    </div>
  );
}
