import { tw } from "twind/css";
import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import SectionMasInformacion from "@/islands/SectionMasInformacion.tsx";
import { Head } from "$fresh/runtime.ts";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export const config: RouteConfig = {
  routeOverride: "/(mas-informacion|more-information)",
};

export default function MasInformacion() {
  const { languageAccepted, enableForm } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });
  return (
    <>
      <Head>
        <title>{t("moreInformation.header.title")}</title>
        <meta
          name="description"
          content={t("moreInformation.header.meta.description.content")}
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className={tw(`hegazti-h1 text-left! py-8`)}>
          {t("moreInformation.title")}
        </h1>
        {enableForm === "true"
          ? <SectionMasInformacion languageAccepted={languageAccepted} />
          : (
            <section
              className={tw(
                `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center mb-12`,
              )}
            >
              Please send a message to info@hegaztiescuelabosque.org
            </section>
          )}
      </section>
      <SectionFooter />
    </>
  );
}
