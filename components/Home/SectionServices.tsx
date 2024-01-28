import { css, tw } from "twind/css";

type ServiceItemProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  button: string;
};

type ServiceProps = {
  list: ServiceItemProps[];
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
          className={tw(`w-full object-cover`)} // css`aspect-ratio:1/1`
        />
      </div>
    </div>
    <div className={tw`sm:w-[48%] sm:flex-grow flex flex-col`}>
      <p
        className={tw(`hegazti-h3 text-left!`)}
        dangerouslySetInnerHTML={{ __html: item.title }}
      >
      </p>
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

const SectionServices = (ctx: ServiceProps) => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
    )}
  >
    <ServiceItem
      title={ctx.list[0].title}
      description={ctx.list[0].description}
      img={ctx.list[0].img}
      link={ctx.list[0].link}
      button={ctx.list[0].button}
    />
    <ServiceItem
      title={ctx.list[1].title}
      description={ctx.list[1].description}
      img={ctx.list[1].img}
      link={ctx.list[1].link}
      button={ctx.list[1].button}
    />
    <ServiceItem
      title={ctx.list[2].title}
      description={ctx.list[2].description}
      img={ctx.list[2].img}
      link={ctx.list[2].link}
      button={ctx.list[2].button}
    />
    <ServiceItem
      title={ctx.list[3].title}
      description={ctx.list[3].description}
      img={ctx.list[3].img}
      link={ctx.list[3].link}
      button={ctx.list[3].button}
    />
    {
      /*  <ServiceItem
      title={t("home.services.extracurricularSaturdaysInFamilyTitle")}
      description={t("home.services.extracurricularSaturdaysInFamilyText")}
      img="imgs/home/servicios-extraescolares-sabados.jpg"
      link={t("menu.forestAsClassroom.extracurricularActivitiesSaturdays.url")}
      button={t("home.services.button")}
    /> */
    }
  </section>
);

export default SectionServices;
