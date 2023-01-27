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
      className={tw`order-2 sm:order-1 sm:w-[48%] sm:flex-grow`}
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
    <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
      <p className={tw("mb-4")}>
        La Casita del Bosque es un espacio natural en el que niñas y niños de 3
        a 6 años, conviven a diario con los árboles, el agua, la tierra, los
        insectos, los animales, el cielo, el aire, el sol… todo esto les permite
        crecer en armonía con lo que son, en un contexto inspirador, cambiante,
        orgánico e integrador.
      </p>
      <p className={tw("mb-4")}>
        Aprender viviendo, tocando, explorando, permite integrar cualquier tipo
        de aprendizaje. Interactuar con un medio vivo genera inquietudes,
        interés sobre el contexto. Esto da lugar a preguntas que conducen a
        investigar en todos los planos del conocimiento.
      </p>
      <p className={tw("mb-4")}>
        Damos un espacio principal a la persona, a sus preferencias, intereses,
        estados, y sentires. Igualmente se respetan los tiempos, las
        circunstancias, necesidades y elecciones de cada uno/a.
      </p>
      <h3 className={tw("text-3xl my-8 p-8 border-l-1")}>
        DAR ESPACIO A LA NECESIDAD MOTORA EN LA INFANCIA ES ABRIR LA PUERTA AL
        BIENESTAR PSICOLÓGICO Y AL EQUILIBRIO EMOCIONAL.
      </h3>
      <p className={tw("mb-4")}>
        En esta etapa, el desarrollo motor es esencial; abrimos la posibilidad a
        las personas de asumir retos motores, experimentar desafíos y lograr
        conquistas.
      </p>
      <p className={tw("mb-4")}>
        La gestión emocional es otro de los focos del acompañamiento. por eso en
        Hegazti se da especial importancia a respetar el espacio de la persona
        para elaborar lo que siente o le acontece.
      </p>
    </div>
  </section>
);

export default SectionContent;
