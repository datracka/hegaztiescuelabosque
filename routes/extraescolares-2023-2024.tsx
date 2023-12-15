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
        <title>Hegazti Escuela Bosque | Ven a Conocernos</title>
        <meta
          name="description"
          content="Juego en la naturaleza. Dinámicas de grupo. Actividades artísticas. ¡Ven a vivir la experiencia!"
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <Hero
        title="Extraescolares 2023-2024"
        description="Miercoles o Jueves 16:30 a 17:30"
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
