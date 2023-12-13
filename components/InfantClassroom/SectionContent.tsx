import { css, tw } from "twind/css";
import getFixedT from "@/components/i18n.ts";

type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  staticPath: string;
  languageAccepted: string;
};

const SectionContent = ({ staticPath, languageAccepted }: ContentProps) => {
  const t = getFixedT(languageAccepted);
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
          title={t("preschoolClassroom.introImage1")}
          src={`${staticPath}/ninos-jugando-en-la-casita.jpg`}
          className={tw("w-full mb-4 object-cover", aspectRatio)}
        />
        <img
          title={t("preschoolClassroom.introImage2")}
          src={`${staticPath}/nina-jugando-con-el-agua.jpg`}
          className={tw("w-full object-cover", aspectRatio)}
        />
      </div>
      <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
        <p className={tw("mb-4")}>
        {t("preschoolClassroom.introText1")}
        </p>
        <p className={tw("mb-4")}>
        {t("preschoolClassroom.introText2")}
        </p>
        <p className={tw("mb-4")}>
        {t("preschoolClassroom.introText3")}
        </p>
        <h3 className={tw("hegazti-h3 my-8 p-8 border-l-1")}>
        {t("preschoolClassroom.introBullet")}
        </h3>
        <p className={tw("mb-4")}>
        {t("preschoolClassroom.introText4")}
        </p>
        <p className={tw("mb-4")}>
        {t("preschoolClassroom.introText5")}
        </p>
      </div>
    </section>
  );
};

export default SectionContent;
