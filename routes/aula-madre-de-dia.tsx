import { RouteConfig, HandlerContext, Handlers, PageProps  } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/DailyMother/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-madre-de-dia|daily-mother-schoolroom)",
};

export default function AulaMadreDeDia() {

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/aula-madre-de-dia";
  return (
    <>
      <Head>
        <title>{t("daytimeMother.header.title")}</title>
        <meta
          name="description"
          content={t("daytimeMother.header.meta.description.content")}
        />
      </Head>
      <NavBar />
      <Hero
        title={t("daytimeMother.hero.claim")}
        description={t("daytimeMother.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-image-aula-madre-de-dia.jpg`}
      />
      <SectionContent staticPath={staticPath} t={t} />
      <SectionSaying
        text={t("daytimeMother.saying")}
        author="EMMI PICKLER"
      />
      <SectionGrid
        list={[
          { alt: t("daytimeMother.imageGridGirlDrawingAlt"), img: `${staticPath}/nina-pintando.jpg` },
          {
            alt: t("daytimeMother.imageGridFreeMovementAlt"),
            img: `${staticPath}/frase-movimiento-libre.jpg`,
          },
          {
            alt: t("daytimeMother.imageGridPlayingWithAnimalsAlt"),
            img: `${staticPath}/jugando-con-animales.jpg`,
          },
          { alt: t("daytimeMother.imageGridTrustAlt"), img: `${staticPath}/frase-confianza.jpg` },
          { alt: t("daytimeMother.imageGridCareAlt"), img: `${staticPath}/frase-cuidado.jpg` },
          { alt: t("daytimeMother.imgGridForestAlt"), img: `${staticPath}/bosque.jpg` },
          { alt: t("daytimeMother.imgGridCousinessAlt"), img: `${staticPath}/frase-calidez.jpg` },
          { alt: t("daytimeMother.imgGridPlaying"), img: `${staticPath}/ninos-jugando.jpg` },
          {
            alt: t("daytimeMother.imgGridHorsesAlt"),
            img: `${staticPath}/caballos-y-ninos.jpg`,
          },
          {
            alt: t("daytimeMother.imgGridSlowTempoAlt"),
            img: `${staticPath}/frase-ritmo-calmado.jpg`,
          },
          {
            alt: t("daytimeMother.imgGridSnakeAlt"),
            img: `${staticPath}/nino-y-caracola.jpg`,
          },
          { alt: t("daytimeMother.imgGridCareAlt"), img: `${staticPath}/frase-cuidado-2.jpg` },
          {
            alt: t("daytimeMother.imgGridCompanionAlt"),
            img: `${staticPath}/frase-acompanamiento.jpg`,
          },
          {
            alt: t("daytimeMother.imgGridMotherAlt"),
            img: `${staticPath}/madre-y-nino-abrazado.jpg`,
          },
          {
            alt: t("daytimeMother.imgGridNatureAlt"),
            img: `${staticPath}/frase-naturaleza.jpg`,
          },
          {
            alt: t("daytimeMother.imgGridAnimalsAlt"),
            img: `${staticPath}/ninos-y-animales.jpg`,
          },
        ]}
      />
      {/* we pass languageAccepted to get the proper form. It should be handlded as context */}
      <SectionFooter />
    </>
  );
}
