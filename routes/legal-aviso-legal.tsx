import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";

import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { RouteConfig } from "$fresh/server.ts";
import { useContext } from "preact/hooks";

export const config: RouteConfig = {
  routeOverride: "/(legal-notice|aviso-legal)",
};

export default function avisoLegal() {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Aviso Legal
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

      </section>
      <SectionFooter />
    </>
  );
}
