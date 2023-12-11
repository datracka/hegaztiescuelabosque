import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/PrimaryClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";

export default function AulaPrimaria() {
  const staticPath = "/imgs/aula-primaria";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Aula - Primaria</title>
        <meta
          name={t("primarySchool.header.title")}
          content={t("primarySchool.header.meta.description.content")}
        />
      </Head>
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
