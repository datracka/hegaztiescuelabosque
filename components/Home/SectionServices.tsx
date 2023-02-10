import { css, tw } from "twind/css";

type ServiceItemProps = {
  title: string;
  description: string;
  img: string;
  link: string;
};

const ServiceItem = (item: ServiceItemProps) => (
  <article
    className={tw(
      `flex flex-col gap-4`,
      `sm:flex-row sm:flex-wrap`,
    )}
  >
    <div
      className={tw`sm:w-[35%] lg:w-[20%]`}
    >
      <div className={tw(`relative`)}>
        <img
          src={item.img}
          alt={item.title}
          className={tw("w-full object-cover", css`aspect-ratio:1/1`)}
        />
      </div>
    </div>
    <div className={tw`sm:w-[48%] sm:flex-grow flex flex-col`}>
      <h3 className={tw(`text-2xl`)}>{item.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
      <a
        href={item.link}
        className={tw`mt-auto mr-auto border-2 border-black inline-block py-4 px-8 hover:text-white hover:bg-black`}
      >
        Saber más
      </a>
    </div>
    <div className={tw`border-b-1 mb-8 sm:w-[48%] sm:flex-grow`}>
    </div>
  </article>
);

const SectionServices = () => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
    )}
  >
    <h2 className={tw`text-3xl`}>SERVICIOS</h2>
    <ServiceItem
      title="Madre de día, casita abejorro"
      description="En la <strong>Casita Abejorro</strong>, las niñas y niños de 0 a 3 años, pueden vivenciar cada día un espacio de calma y respeto en contacto con la naturaleza. Creemos que las niñas y los niños son seres completos que necesitan un lugar seguro y amoroso en el que desarrollarse y crecer de manera sana, en contacto con la naturaleza y con sus propias necesidades."
      img="imgs/daily-mother-schoolroom/hero-image.jpg"
      link="aula-madre-de-dia"
    />
    <ServiceItem
      title="Infantil, casita del bosque"
      description="La <strong>Casita del Bosque</strong> es un espacio natural en el que niñas y niños de 3 a 6 años, conviven a diario con los árboles, el agua, la tierra, los insectos, los animales, el cielo, el aire, el sol… todo esto les permite crecer en armonía con lo que son, en un contexto inspirador, cambiante, orgánico e integrador."
      img="imgs/infant-classroom/hero-image.jpg"
      link="aula-infantil"
    />
    <ServiceItem
      title="Primaria, casita del árbol y nido de pájaro"
      description="Es un espacio natural en el que niñas y niños de 6 a 12 años aprenden a través de la exploración y la investigación en el contexto de la naturaleza.
        <br/><br/>
        El método de aprendizaje sigue siendo vivenciado y funcional para su día a día y para el desarrollo holístico a través del medio natural. 
        "
      img="imgs/primary-classroom/hero-image.jpg"
      link="aula-primaria"
    />
    <ServiceItem
      title="Extraescolares - Ludoteca"
      description="Ludotecas de invierno, primavera y verano
        <br/><br/>
        Nuestra Escuela Bosque se abre a otros niños/as de 3 a 12 años que quieran compartir nuestra preciosa escuela y tener esta experiencia en contacto con la naturaleza y los animales. 
        "
      img="imgs/extracurricular-toy-library/hero-image.jpg"
      link="aula-extraescolares-ludoteca"
    />
    <ServiceItem
      title="Extraescolares - Sábados en Familia"
      description="Nuestra Escuela Bosque abre espacio a experiencias en la naturaleza para familias. El segundo sábado de cada mes Hegazti abre las puertas y organiza una jornada para familias en la naturaleza."
      img="imgs/extracurricular-saturdays-with-the-family/hero-image.jpg"
      link="aula-extraescolares-sabado-en-familia"
    />
  </section>
);

export default SectionServices;
