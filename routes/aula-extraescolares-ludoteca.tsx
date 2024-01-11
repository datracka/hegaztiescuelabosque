import NavBar from "@/islands/NavBar.tsx";
import { css, tw } from "twind/css";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import { Head } from "$fresh/runtime.ts";
import Hero from "@/components/Shared/Hero.tsx";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import HeadElement from "@/components/HeadElement.tsx";

export const config: RouteConfig = {
  routeOverride: "/(extracurricular-playroom|aula-extraescolares-ludoteca)",
};

export default function AulaExtraescolaresLudoteca(props: PageProps) {
  const aspectRatio = css({
    aspect_ratio: 1 / 1,
  });

  const staticPath = "/imgs/aula-extraescolares-ludoteca";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <HeadElement
        description={t("extracurricularPlayroom.meta.description.content")}
        title={t("extracurricularPlayroom.header")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("extracurricularPlayroom.hero.claim")}
        description={t("extracurricularPlayroom.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-extraescolares-ludoteca.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
        )}
      >
        <h2 className={tw(`hegazti-h2 py-14 px-4 text-center border-b-1 mb-8`)}>
          {t("extracurricularPlayroom.title")}
        </h2>
      </section>
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
            title={t("extracurricularPlayroom.imageTitle")}
            src={`${staticPath}/adulto-acompanando-nino-en-naturaleza.jpg`}
            className={tw("w-full mb-4 object-cover", aspectRatio)}
          />
        </div>
        <div className={tw`order-1 sm:order-2 sm:w-[48%] sm:flex-grow`}>
          <h3 className={tw("hegazti-h3  mb-4 ")}>
            {t("extracurricularPlayroom.subTitle")}
          </h3>
          <p className={tw("mb-4")}>
            {t("extracurricularPlayroom.text1")}
          </p>
          <p className={tw("mb-4")}>
            {t("extracurricularPlayroom.text2")}
          </p>
          <p className={tw("mb-4")}>
            {t("extracurricularPlayroom.text3")}
          </p>
          <p className={tw("mb-4")}>
            {t("extracurricularPlayroom.text4")}
          </p>
          <p className={tw("mb-12 mt-12")}>
            <a
              href={t(
                "menu.contact.url",
              )}
              className={tw(
                "text-xs inline-block border-2 border-black p-4 hover:bg-black hover:text-white",
              )}
            >
              {t("extracurricularPlayroom.button")}
            </a>
          </p>
        </div>
      </section>
      <SectionFooter />
    </>
  );
}
