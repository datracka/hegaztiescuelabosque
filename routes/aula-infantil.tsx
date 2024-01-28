import NavBar from "@/islands/NavBar.tsx";
import {
  PageProps,
  RouteConfig,
} from "$fresh/server.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import HeadElement from "@/components/HeadElement.tsx";
import Prices from "@/components/Prices/Prices.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-infantil|preschool-classroom)",
};

export default function AulaInfantil(props: PageProps) {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });
  const staticPath = "/imgs/aula-infantil";
  return (
    <>
     <HeadElement
        description={t("preschoolClassroom.header.meta.description.content")}
        title={t("preschoolClassroom.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("preschoolClassroom.hero.claim")}
        description={t("preschoolClassroom.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-casita-del-bosque.jpg`}
      />
      <SectionContent
        staticPath={staticPath}
        languageAccepted={languageAccepted}
      />
      {
        /* <SectionCallToAction
        title="INSCRIPCIONES <br/>ABIERTAS"
        description="MARZO A JUNIO"
        image={`${staticPath}/cta-img-01.jpg`}
        buttonText="MÁS <br/>INFORMACIÓN"
        buttonLink="/mas-informacion"
      /> */
      }
      <SectionSaying
        text={t("preschoolClassroom.saying")}
        author="ALBERT EINSTEIN"
      />
      <SectionGrid
        list={[
          {
            alt: t("imageGrid.horses"),
            img: `${staticPath}/ninas-acariciando-caballos.jpg`,
          },
          {
            alt: t("imageGrid.kidHand"),
            img: `${staticPath}/mano-con-lagartija.jpg`,
          },
          { alt: t("imageGrid.yurta"), img: `${staticPath}/yurta.jpg` },
          {
            alt: t("imageGrid.cooking"),
            img: `${staticPath}/haciendo-pasteles-juntos.jpg`,
          },
          {
            alt: t("imageGrid.forest"),
            img: `${staticPath}/jugando-en-el-rio.jpg`,
          },
          {
            alt: t("imageGrid.walk"),
            img: `${staticPath}/paseando-por-el-campo.jpg`,
          },
          {
            alt: t("imageGrid.clay"),
            img: `${staticPath}/haciendo-figuras-de-barro.jpg`,
          },
          {
            alt: t("imageGrid.playingInYurta"),
            img: `${staticPath}/jugando-en-la-yurta.jpg`,
          },
        ]}
      />
      <Prices t={t} />
      <SectionFooter />
    </>
  );
}
