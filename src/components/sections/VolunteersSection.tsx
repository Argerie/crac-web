import { motion } from 'framer-motion';

export default function VolunteersSection() {
  return (
    <section id="Voluntarios" className="bg-mist-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src="/crac-web/images/voluntariados.jpeg"
          alt="Voluntarios del Costa Rica Animal Rescue Center"
          className="h-96 w-full rounded-2xl object-cover shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl text-jungle-900 md:text-4xl">
            Voluntariados
          </h2>
          <p className="mt-4 font-body text-jungle-900/70">
            Nuestras personas voluntarias son personas que han decidido donar parte
            importante de su tiempo y dedicación a nuestra causa, por lo que hemos creado un
            espacio seguro, divertido y que asegura la convivencia e intercambio de cultura.
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            Todos nuestros programas incluyen alimentación y hospedaje. Contamos con la
            infraestructura necesaria para que elijas lo mejor para tu bienestar y comodidad,
            la cual también garantiza que podás tener espacio para practicar las actividades
            que más te gustan, como yoga, lectura, explorar la naturaleza. ¿Qué más te
            imaginás haciendo?
          </p>
          <p className="mt-3 font-body text-jungle-900/70">
            La experiencia incluye conocer el pueblo y la posibilidad de participar en las
            actividades que tenemos planeadas para vos mientras te esperamos: fogatas,
            karaoke, paseos y mucho más.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

