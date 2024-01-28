import { t } from "https://deno.land/x/i18next@v23.7.7/index.js";
import { css, tw } from "twind/css";

type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  staticPath: string;
};

const SectionContent = ({ staticPath }: ContentProps) => {
  const aspectRatio = css`aspect-ratio:1/1`;

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
          title={t("primarySchool.introImage1")}
          src={`${staticPath}/nina-recogiendo-flores.jpg`}
          className={tw("w-full mb-4 object-cover", aspectRatio)}
        />
        <img
          title={t("primarySchool.introImage2")}
          src={`${staticPath}/ninos-aprendiendo-y-leyendo.jpg`}
          className={tw("w-full object-cover", aspectRatio)}
        />
      </div>
      <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText1")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText2")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText3")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText4")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText5")}
        </p>
        <h2 className={tw("text-3xl my-8 p-8 border-l-1")}>
          {t("primarySchool.introBullet")}
        </h2>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText6")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText7")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText8")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText9")}
        </p>
        <p className={tw("mb-4")}>
          {t("primarySchool.introText10")}
        </p>
      </div>
    </section>
  );
};

export default SectionContent;
