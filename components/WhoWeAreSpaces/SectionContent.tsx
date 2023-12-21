import { css, tw } from "twind/css";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
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
          title={t("whoWeAreSpaces.section.imageTitle1")}
          src={`${staticPath}/nino-con-caracola.jpg`}
          className={tw("w-full mb-4 object-cover", aspectRatio)}
        />
        <SectionSaying
          text={t("whoWeAreSpaces.section.saying")}
          author="JEAN-JACQUES"
        />
        <img
          title={t("whoWeAreSpaces.section.imageTitle2")}
          src={`${staticPath}/manos-conjuntas.jpg`}
          className={tw("w-full object-cover", aspectRatio)}
        />
      </div>
      <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
        <h2 className={tw(`hegazti-h2 `)}>
          {t("whoWeAreSpaces.section.title")}
        </h2>
        <p className={tw("mb-4 mt-4")}>
          {t("whoWeAreSpaces.section.textPart1")}
        </p>
        <p className={tw("mb-4")}>
          {t("whoWeAreSpaces.section.textPart2")}
        </p>
        <p className={tw("mb-4")}>
          {t("whoWeAreSpaces.section.textPart3")}
        </p>
        <p className={tw("mb-4")}>
          {t("whoWeAreSpaces.section.textPart4")}
        </p>
        <p className={tw("mb-4")}>
          {t("whoWeAreSpaces.section.textPart5")}
        </p>
        <p className={tw("mb-4")}>
          <a
            rel="noopener"
            className={tw("text-red-800 hover:text-red-400 underline")}
            href="https://www.plataformaeditorial.com/libro/5777-somos-naturaleza"
            target="_blank"
          >
            https://www.plataformaeditorial.com/libro/5777-somos-naturaleza
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionContent;
