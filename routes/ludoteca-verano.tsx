import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "../components/SummerPlayroom/GetToKnow.tsx";
import { useContext } from "preact/hooks";
import HeadElement from "@/components/HeadElement.tsx";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(summer-playroom|ludoteca-verano)",
};

// pending to translate!!
export default function LudotecaVerano(props: PageProps) {
  const staticPath = "/imgs/ludoteca-verano";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <HeadElement
        description={t("summerPlayroom.header.meta.description.content")}
        title={t("summerPlayroom.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("summerPlayroom.hero.claim")}
        description={t("summerPlayroom.hero.subClaim")}
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow
        title={t("summerPlayroom.getToKnow.title")}
        text={t("summerPlayroom.getToKnow.text")}
      />
      <SectionFooter />
    </>
  );
}
