import { motion } from 'framer-motion';

export default function QuienesSomosSection() {
  return (
    <section id="QuienesSomos" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">
            Quiénes somos
          </h2>

          <p className="mt-4 font-body text-jungle-900/70">
            Somos un centro de rescate de vida silvestre y un santuario de animales rescatados
            del tráfico ilegal de especies, de accidentes causados por el ser humano y de
            quienes han sido víctimas de abuso.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Contamos con una clínica veterinaria equipada para recibir a los animales en
            peligro, con heridas graves o con riesgo de muerte.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Además, un santuario donde viven los animales que no pudieron ser reintegrados a
            la naturaleza, dado a que fueron sacados de su hábitat natural con apenas semanas
            de vida, porque requieren de un chequeo veterinario continuo, o sus heridas ya no
            permiten que sobreviva en la naturaleza.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            En el rescate viven especies como el perezoso de dos dedos{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Choloepus hoffmanni)
            </span>{' '}
            siendo una de las especies más rescatadas dado al tráfico ilegal y los accidentes
            en tendidos eléctricos.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Conocerás también al mono cariblanco{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Cebus capucinus)
            </span>
            , mono araña centroamericano{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Ateles geoffroyi)
            </span>
            , mono congo{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Alouatta palliata)
            </span>
            , guatusas, marmosetas, mapaches{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Procyon lotor)
            </span>
            , kinkajú{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Potos flavus)
            </span>
            , saínos{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Pecari tajacu)
            </span>
            , venados coliblanco{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Odocoileus virginianus)
            </span>
            .
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Diversidad de aves como la lapa roja{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Ara macao)
            </span>
            , lapa azul{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Ara ararauna)
            </span>
            , perico verde{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Aratinga holochlora)
            </span>
            , periquitos{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Melopsittacus undulatus)
            </span>
            , búho oropopo{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Pulsatrix perspicillata)
            </span>
            , entre muchas otras especies.
          </p>

          <h3 className="mt-8 font-display text-2xl text-jungle-900">Nuestra historia</h3>

          <p className="mt-3 font-body text-jungle-900/70">
            En 2009, el centro de rescate fue fundado en la costa caribeña de Costa Rica, en
            Moín. Su primer rescate fue Buda, un animal salvado del tráfico ilegal de fauna
            silvestre justo antes de ser vendido como mascota.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            El centro, ubicado en Moín, también se dedicaba a patrullar las playas para
            proteger los nidos de una especie en peligro de extinción: la tortuga baula{' '}
            <span className="font-utility text-xs italic text-jungle-900/50">
              (Dermochelys coriacea)
            </span>
            .
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Sin embargo, los recolectores ilegales de huevos no eran el único desafío. La
            construcción de un importante puerto en Moín amenazaba las actividades de rescate
            y conservación. Como acto de intimidación, el activista ambiental Jairo Mora
            Sandoval fue asesinado mientras defendía los nidos de las tortugas marinas.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            Debido a la creciente presión y a la pérdida de acceso a la propiedad original, el
            centro se vio obligado a trasladarse a San Miguel de Turrúcares. Allí, se les
            prestó generosamente una propiedad temporal para que los animales pudieran ser
            alojados mientras se buscaba una solución permanente.
          </p>

          <p className="mt-3 font-body text-jungle-900/70">
            La propiedad original en Moín fue ocupada y, en 2016, después de vender dos
            propiedades personales, el propietario del centro de rescate pudo adquirir el
            terreno donde actualmente funciona el centro, una propiedad que todavía se está
            pagando por lo que buscamos personas voluntarias como vos, para que formés parte
            del cuidado y protección de nuestra vida silvestre.
          </p>
        </motion.div>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <video
          src="/crac-web/videos/needus.mp4"
          controls
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}
