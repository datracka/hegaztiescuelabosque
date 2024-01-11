import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/PrimaryClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import HeadElement from "@/components/HeadElement.tsx";

export const config: RouteConfig = {
  routeOverride: "/(primary-school|aula-primaria)",
};


export default function AulaPrimaria(props: PageProps) {
  const staticPath = "/imgs/aula-primaria";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
    <HeadElement description={t("primarySchool.header.meta.description.content")} title={t("primarySchool.header.title")} url={props.url} />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("primarySchool.hero.claim")}
        description={t("primarySchool.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-primaria-pies-nino.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionSaying
        text={t("primarySchool.saying")}
        author="JESS LAIR"
      />
      <SectionGrid
        list={[
          {
            alt: t("primarySchool.grid.yurta"),
            img: `${staticPath}/yurta.jpg`,
          },
          {
            alt: t("primarySchool.grid.kidReading"),
            img: `${staticPath}/nina-leyendo.jpg`,
          },
          {
            alt: t("primarySchool.grid.shells"),
            img: `${staticPath}/corazon-de-piedras.jpg`,
          },
          {
            alt: t("primarySchool.grid.horses"),
            img: `${staticPath}/caballos-pastando.jpg`,
          },
          {
            alt: t("primarySchool.grid.hands"),
            img: `${staticPath}/manos-llenas-de-barro.jpg`,
          },
          {
            alt: t("primarySchool.grid.goats"),
            img: `${staticPath}/cabritas.jpg`,
          },
          {
            alt: t("primarySchool.grid.kids"),
            img: `${staticPath}/espacio-para-jugar.jpg`,
          },
          {
            alt: t("primarySchool.grid.vocals"),
            img: `${staticPath}/vocales.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
