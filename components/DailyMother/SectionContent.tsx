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
        title="Casita Abejorro, jugando juntos"
        src={`${staticPath}/casita-abejorro-jugando-juntos.jpg`}
        className={tw("w-full mb-4 object-cover", css`aspect-ratio:1/1`)}
      />
      <img
        title="Casita Abejorro, niña curiosa"
        src={`${staticPath}/casita-abejorro-nina-curiosa.jpg`}
        className={tw("w-full object-cover", css`aspect-ratio:1/1`)}
      />
    </div>
    <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
      <h2 title="Casita Abejorro">
        <img
          src={`${staticPath}/logo-abejorros.jpg`}
          className={tw("w-full mb-4")}
          alt="Casita Abejorro"
        />
      </h2>
      <p>
        En la Casita Abejorro, las niñas y niños de 0 a 3 años, pueden vivenciar
        cada día un espacio de calma y respeto en contacto con la naturaleza.
        Creemos que las niñas y los niños son seres completos que necesitan un
        lugar seguro y amoroso en el que desarrollarse y crecer de manera sana,
        en contacto con la naturaleza y con sus propias necesidades.
      </p>
      <h3 className={tw("hegazti-h3 my-8 p-8 border-l-1")}>
        GENERAMOS EXPERIENCIAS PARA QUE DESCUBRAN EL MUNDO DE MANERA INTEGRADA,
        DESDE SUS NECESIDADES Y AL RITMO QUE NECESITAN
      </h3>
      <p>
        Nos apoyamos en los principios del movimiento libre y el acompañamiento
        respetuoso para generar un vínculo seguro entre las criaturas y la
        persona que acompaña. A través del contacto con materiales naturales,
        cantos y cuentos, generamos experiencias de vida en las que las niñas y
        los niños descubren el mundo de manera integrada, desde sus necesidades
        y al ritmo que necesitan.
      </p>
    </div>
    <div className={tw`order-3 sm:w-[48%] sm:flex-grow  flex flex-col`}>
      <h3 className={tw("hegazti-h3 my-4")}>LA YURTA</h3>
      <p className={tw("mb-4")}>
        La yurta de La Casita Abejorro es un ambiente cálido y familiar en el
        que se generan experiencias de amor, confianza y sencillez que favorecen
        que las niñas y niños puedan “ser”. Poniendo la mirada en las criaturas,
        favorecemos espacio y tiempo para que puedan desplegar “su vuelo” en la
        vida, de manera orgánica y natural.
      </p>
      <img
        title="La Yurta"
        src={`${staticPath}/casita-abejorro-la-yurta.jpg`}
        className={tw("mt-auto obejct-cover", css`aspect-ratio:1/1`)}
      />
    </div>
    <div className={tw`order-3 sm:w-[48%] sm:flex-grow flex flex-col`}>
      <h3 className={tw("hegazti-h3 my-4")}>
        ACOMPAÑANTE
      </h3>
      <p className={tw("mb-4")}>
        Me llamo Esther, soy mamá de dos niñas y la magia de la vida me ha
        traido a Caminando con caballos. Comparto con la Bosqueescuela Hegazti
        la visión de una infancia respetada desarrollándose a su ritmo tranquilo
        en la naturaleza. Me sumo al proyecto con la ilusión de aportar mi
        experiencia vital en el acompañamiento respetuoso a las criaturas que
        nos rodean.
      </p>
      <img
        title="Casita Abejorro, madre y niños"
        src={`${staticPath}/casita-abejorro-madre-y-ninos.jpg`}
        className={tw("mt-auto object-cover", css`aspect-ratio:1/1`)}
      />
    </div>
  </section>
);

export default SectionContent;
