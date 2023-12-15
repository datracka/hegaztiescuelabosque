import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "@/components/Afterschool20232024/GetToKnow.tsx";

import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { RouteConfig } from "$fresh/server.ts";
import { useContext } from "preact/hooks";

export const config: RouteConfig = {
  routeOverride: "/(extracurriculars-2023-2024|extraescolares-2023-2024)",
};

export default function Extrascurriculars20232024() {
  const staticPath = "/imgs/extraescolares-2023-2024";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>{t("extracurricular20232024.header.title")}</title>
        <meta
          name="description"
          content={t("extracurricular20232024.header.meta.description.content")}
        />
      </Head>
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
