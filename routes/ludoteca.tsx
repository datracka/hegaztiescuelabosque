import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "../components/PlayGroup/GetToKnow.tsx";
import { useContext } from "preact/hooks";
import HeadElement from "@/components/HeadElement.tsx";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(playgroup|ludoteca)",
};

// pending to translate!!
export default function JornadaPuertasAbiertas(props: PageProps) {
  const staticPath = "/imgs/ludoteca";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <HeadElement
        description={t("playGroup.header.meta.description.content")}
        title={t("playGroup.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("playGroup.hero.claim")}
        description={t("playGroup.hero.subClaim")}
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow
        title={t("playGroup.getToKnow.title")}
        text={t("playGroup.getToKnow.text")}
      />
      <SectionFooter />
    </>
  );
}
