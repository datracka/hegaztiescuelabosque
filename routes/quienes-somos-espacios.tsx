import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/WhoWeAreSpaces/SectionContent.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(whoweare-spaces|quienes-somos-espacios)",
};

export default function QuienesSomosEspacios() {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/quienes-somos-espacios";
  return (
    <>
      <Head>
        <title>
          {t("whoWeAreSpaces.header.title")}
        </title>
        <meta
          name="description"
          content={t("whoWeAreSpaces.header.meta.description.content")}
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("whoWeAreSpaces.hero.claim")}
        description={t("whoWeAreSpaces.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-quienes-somos-naturaleza-y-espacios.jpg`}
      />
      <SectionContent
        staticPath={staticPath}
        languageAccepted={languageAccepted}
      />
      <SectionGrid
        list={[
          {
            alt: t("whoWeAreSpaces.cardList.alt1"),
            img: `${staticPath}/juegos-conjuntos.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.carList.alt2"),
            img: `${staticPath}/grupo-de-ninos.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt3"),
            img: `${staticPath}/ninos-y-caballos.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt4"),
            img: `${staticPath}/escalando-la-montana.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt5"),
            img: `${staticPath}/explorando el riachuelo.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt6"),
            img: `${staticPath}/pastoreando.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt7"),
            img: `${staticPath}/juegos-de-hojas.jpg`,
          },
          {
            alt: t("whoWeAreSpaces.cardList.alt8"),
            img: `${staticPath}/yurta.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
