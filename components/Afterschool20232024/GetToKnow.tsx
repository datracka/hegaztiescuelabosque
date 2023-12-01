import { css, tw } from "twind/css";

const GetToKnow = () => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>
          Exploración y Desarrollo Continuo: Extraescolares en Bosque Hegazti
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Sumérgete en aulas donde la naturaleza es la maestra, un espacio donde
          el cielo es visible, la tierra es tangible, las flores emanan
          fragancias, y los sentidos son estimulados. Aquí, los niños pueden
          moverse con libertad, explorar su entorno, y observar el mundo real
          que les rodea.
        </p>
        <p className={tw`mb-4`}>
          Nuestras aulas viven y respiran naturaleza para satisfacer las
          necesidades fundamentales de cada ser humano. Fomentamos la
          curiosidad, estimulamos los sentidos y promovemos la conexión con la
          diversidad de cada persona. En nuestro entorno, cada individuo
          encuentra su lugar único y valioso.
        </p>
        <p className={tw`mb-4`}>
          Estamos emocionados de anunciar nuestras actividades extraescolares,
          que tendrán lugar cada miércoles o jueves de 16:30 a 17:30. Diseñadas
          para potenciar dinámicas de grupo, aprendizaje vivencial y desarrollo
          motor, estas actividades también abordarán aspectos emocionales y
          sociales de manera integral.
        </p>
        <p className={tw`mb-4`}>
          Únete a nosotros en la Escuela Bosque Hegazti y experimenta una
          educación que va más allá de las paredes tradicionales del aula.
          Estamos comprometidos con el crecimiento holístico de cada niño,
          cultivando su amor por el aprendizaje y promoviendo un sentido de
          pertenencia en nuestro entorno natural.
        </p>
        <p className={tw`mb-4`}>
          Te invitamos a unirte a nosotros en la Jornada de Puertas Abiertas
          para experimentar la escuela en persona. Descubrirás cómo nuestra aula
          viva es el ambiente perfecto para nutrir la curiosidad y la conexión
          con el mundo. ¡Esperamos verte pronto en la Escuela Bosque Hegazti!
        </p>
        <p className={tw`mb-4`}>
          Llámanos al 697 24 57 75 o envíanos un email a
          hegaztiescuelabosque@gmail.com si quieres saber más. ¡Te esperamos!
        </p>
        <img
          className={tw`mb-12`}
          src="/imgs/extraescolares-2023-2024/cartel.png"
          alt="hero"
        />
      </div>
    </div>
  </section>
);

export default GetToKnow;
