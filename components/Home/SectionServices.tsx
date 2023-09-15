import { css, tw } from "twind/css";

type ServiceItemProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  button: string;
};
// css`aspect-ratio:1/1`
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
          className={tw(`w-full object-cover`)}
        />
      </div>
    </div>
    <div className={tw`sm:w-[48%] sm:flex-grow flex flex-col`}>
      <h3 className={tw(`hegazti-h3 text-left!`)}>{item.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
      <div className={tw`mt-auto mr-auto`}>
        <a
          href={item.link}
          className={tw`mt-4 border-2 border-black inline-block py-4 px-8 hover:text-white hover:bg-black`}
        >
          {item.button}
        </a>
      </div>
    </div>
    <div className={tw`border-b-1 mb-8 sm:w-[48%] sm:flex-grow`}>
    </div>
  </article>
);

// deno-lint-ignore no-explicit-any
const SectionServices = ({ t }: { t: any }) => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
    )}
  >
    <h2 className={tw`hegazti-h2 mb-6`}></h2>
    <ServiceItem
      title={t("home.services.bumbleBeeHouseTitle")}
      description={t("home.services.bumbleBeeHouseText")}
      img="imgs/home/servicios-madre-de-dia.jpg"
      link="aula-madre-de-dia"
      button={t("home.services.button")}
    />
    <ServiceItem
      title={t("home.services.forestHouseTitle")}
      description={t("home.services.forestHouseText")}
      img="imgs/home/servicios-infantil.jpg"
      link="aula-infantil"
      button={t("home.services.button")}
    />
    <ServiceItem
      title={t("home.services.forestHouseTitle")}
      description={t("home.services.birdNestText")}
      img="imgs/home/servicios-primaria.jpg"
      link="aula-primaria"
      button={t("home.services.button")}
    />
    <ServiceItem
      title={t("home.services.extracurricularPlayRoomTitle")}
      description={t("home.services.extracurricularPlayRoomText")}
      img="imgs/home/servicios-extraescolares-ludoteca.jpg"
      link="aula-extraescolares-ludoteca"
      button={t("home.services.button")}
    />
    <ServiceItem
      title={t("home.services.extracurricularSaturdaysInFamilyTitle")}
      description={t("home.services.extracurricularSaturdaysInFamilyText")}
      img="imgs/home/servicios-extraescolares-sabados.jpg"
      link="aula-extraescolares-sabado-en-familia"
      button={t("home.services.button")}
    />
  </section>
);

export default SectionServices;
