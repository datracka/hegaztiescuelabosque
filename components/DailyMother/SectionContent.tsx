import { css, tw } from "twind/css";

type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  staticPath: string;
  t: (key: string) => string;
};

const SectionContent = ({ staticPath, t }: ContentProps) => {
  const aspectRatio = css({
    aspect_ratio: 1 / 1,
  });
  return (
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
          title={t("daytimeMother.imgPlayinTogetherTitle")}
          src={`${staticPath}/casita-abejorro-jugando-juntos.jpg`}
          className={tw("w-full mb-4 object-cover", aspectRatio)}
        />
        <img
          title={t("daytimeMother.imgCouriosGirl")}
          src={`${staticPath}/casita-abejorro-nina-curiosa.jpg`}
          className={tw("w-full object-cover", aspectRatio)}
        />
      </div>
      <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
        <img
          src={`${staticPath}/logo-abejorros.jpg`}
          className={tw("w-full mb-4")}
          alt={t("daytimeMother.imgLogo")}
        />
        <p>
          {t("daytimeMother.descriptionText1")}
        </p>
        <h2 className={tw("hegazti-h3 my-8 p-8 border-l-1")}>
          {t("daytimeMother.descriptionText2")}
        </h2>
        <p>
          {t("daytimeMother.descriptionText3")}
        </p>
      </div>
      <div className={tw`order-3 sm:w-[48%] sm:flex-grow  flex flex-col`}>
        <p className={tw("hegazti-h3 my-4")}>
          {t("daytimeMother.yurta.title")}
        </p>
        <p className={tw("mb-4")}>
          {t("daytimeMother.yurta.text")}
        </p>
        <img
          title={t("daytimeMother.yurta.imgTitle")}
          src={`${staticPath}/casita-abejorro-la-yurta.jpg`}
          className={tw("mt-auto obejct-cover", aspectRatio)}
        />
      </div>
      <div className={tw`order-3 sm:w-[48%] sm:flex-grow flex flex-col`}>
        <p className={tw("hegazti-h3 my-4")}>
          {t("daytimeMother.companion.title")}
        </p>
        <p className={tw("mb-4")}>
          {t("daytimeMother.companion.text")}
        </p>
        <img
          title={t("daytimeMother.companion.imgTitle")}
          src={`${staticPath}/casita-abejorro-madre-y-ninos.jpg`}
          className={tw("mt-auto object-cover", css`aspect-ratio:1/1`)}
        />
      </div>
    </section>
  );
};

export default SectionContent;
