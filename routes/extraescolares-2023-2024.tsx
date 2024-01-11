import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "@/components/Afterschool20232024/GetToKnow.tsx";
import HeadElement from "@/components/HeadElement.tsx";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import { useContext } from "preact/hooks";

export const config: RouteConfig = {
  routeOverride: "/(extracurriculars-2023-2024|extraescolares-2023-2024)",
};

export default function Extrascurriculars20232024(props: PageProps) {
  const staticPath = "/imgs/extraescolares-2023-2024";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
    <HeadElement description={t("extracurricular20232024.header.meta.description.content")} title={t("extracurricular20232024.header.title")} url={props.url} />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("extracurricular20232024.hero.claim")}
        description={t("extracurricular20232024.hero.subClaim")}
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow t={t} />
      <SectionFooter />
    </>
  );
}
