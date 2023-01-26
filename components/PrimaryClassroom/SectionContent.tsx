import { css, tw } from "twind/css";

type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  staticPath: string;
};

const SectionContent = ({ staticPath }: ContentProps) => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-4`,
      `sm:flex-row sm:flex-wrap`,
    )}
  >
    <div
      className={tw`bg-slate-500 order-2 sm:order-1 sm:w-[48%] sm:flex-grow`}
    >
      <img
        src={`${staticPath}/img-1.jpg`}
        className={tw("w-full mb-4 object-cover", css`aspect-ratio:1/1`)}
      />
      <img
        src={`${staticPath}/img-2.jpg`}
        className={tw("w-full object-cover", css`aspect-ratio:1/1`)}
      />
    </div>
    <div className={tw`bg-slate-500 order-1 sm:w-[48%] sm:flex-grow`}>
      <p className={tw("mb-4")}>
        Escuela Bosque Hegazti Primaria es un espacio natural en el que niñas y
        niños de 6 a 12 años aprenden a través de la exploración y la
        investigación en el contexto de la naturaleza.
      </p>
      <p className={tw("mb-4")}>
        Hay dos grupos de edades de 6 a 9 años en Casita del Árbol y de 9 a 12
        años en Nido de Pajaro.
      </p>
      <p className={tw("mb-4")}>
        El método de aprendizaje sigue siendo vivenciado y funcional para su día
        a día y para el desarrollo holístico a través del medio natural.
      </p>
      <p className={tw("mb-4")}>
        Los aprendizajes no están separados por áreas de conocimiento, sino
        integrados de forma orgánica.
      </p>
      <p className={tw("mb-4")}>
        El conocimiento parte de su propio proceso por aprender aquello que les
        interesa.
      </p>
      <h3 className={tw("text-3xl my-8 p-8 border-l-1")}>
        EL FIN DE LA EDUCACIÓN NO ES ENSEÑAR, SINO DEJAR QUE APRENDAN DE SU
        PROPIA EXPERIENCIA, AQUELLO QUE LES INTERESA
      </h3>
      <p className={tw("mb-4")}>
        La educación es algo admirable, pero es bueno recordar de vez en cuando
        que nada de lo que vale la pena saber se puede enseñar. Oscar Wilde
      </p>
      <p className={tw("mb-4")}>
        El proceso de aprendizaje se desarrolla a través de la investigación y
        de la experiencia vivida.
      </p>
      <p className={tw("mb-4")}>
        Los niveles de concrección de lo aprendido se materializan en
        estructuras, libros creados, cuadernos de campo o proyectos funcionales
        para ellas/os mismos/as y para el medio.
      </p>
      <p className={tw("mb-4")}>
        El aprendizaje se integra en tareas de la escuela de forma progresiva.
      </p>
      <p className={tw("mb-4")}>
        Además en Hegazti a esta edad se integran de forma diaria tareas en el
        contexto. Como el cuidado de los animales, el trabajo en el huerto, la
        elaboración de productos de cuidado de la salud, y el mantenimiento de
        su medio natural y el de la escuela.
      </p>
    </div>
  </section>
);

export default SectionContent;
