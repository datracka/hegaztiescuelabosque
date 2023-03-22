import { css, tw } from "twind/css";

const GetToKnow = () => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>Jornada de Puertas Abiertas</h2>
      </div>
      <div>
        <p className="mb-4">
          ¡Bienvenidos a la Jornada de Puertas Abiertas de la Escuela Bosque
          Hegazti! Te invitamos a unirte a nosotros para descubrir nuestra
          manera única de enseñar.
        </p>
        <p className={tw`mb-4`}>
          En la Escuela Bosque Hegazti, creemos en la libertad y la naturaleza
          como medios para el aprendizaje. La infancia es un tiempo de inquietud
          motora y cognitiva, y nuestra escuela está diseñada para nutrir y
          estimular esta curiosidad natural.
        </p>
        <p className={tw`mb-4`}>
          Nuestro aula es la naturaleza, donde los niños pueden experimentar la
          vida real y sentirse libres para moverse e investigar el mundo que les
          rodea. El cielo, la tierra y las flores son herramientas de
          aprendizaje que les permiten conectarse con su entorno y experimentar
          la diversidad.
        </p>
        <p className={tw`mb-4`}>
          Nuestro enfoque integrador garantiza que cada niño tenga su lugar en
          la escuela. Estamos comprometidos con el desarrollo de seres humanos
          libres y diversos, que sienten y piensan por sí mismos.
        </p>
        <p className={tw`mb-4`}>
          Te invitamos a unirte a nosotros en la Jornada de Puertas Abiertas
          para experimentar la escuela en persona. Descubrirás cómo nuestra aula
          viva es el ambiente perfecto para nutrir la curiosidad y la conexión
          con el mundo. ¡Esperamos verte pronto en la Escuela Bosque Hegazti!
        </p>
      </div>
    </div>
  </section>
);

export default GetToKnow;
