import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "../components/OpenDoors/GetToKnow.tsx";
import { useContext } from "preact/hooks";
import HeadElement from "@/components/HeadElement.tsx";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(open-house-days|jornada-puertas-abiertas)",
};

// pending to translate!!
export default function JornadaPuertasAbiertas(props: PageProps) {
  const staticPath = "/imgs/jornada-puertas-abiertas";

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <HeadElement
        description={t("opendoors.header.meta.description.content")}
        title={t("openDoors.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("openDoors.hero.claim")}
        description={t("openDoors.hero.subClaim")}
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow
        title={t("openDoors.getToKnow.title")}
        text={t("openDoors.getToKnow.text")}
      />
      <SectionFooter />
    </>
  );
}
