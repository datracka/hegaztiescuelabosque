import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import HeadElement from "@/components/HeadElement.tsx";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import { useContext } from "preact/hooks";

export const config: RouteConfig = {
  routeOverride: "/(legal-cookie-policy|legal-politica-de-cookies)",
};

export default function politicaDeCookies(props: PageProps) {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
    <HeadElement description={""} title={t("cookiePolicy.header.title")} url={props.url} />
      <NavBar menuTexts={menuTexts} />
      <section className="mx-auto max-w-7xl my-8 px-2 sm:px-6 lg:px-8">
        <div dangerouslySetInnerHTML={{ __html: t("cookiePolicy.content") }} />
      </section>
      <SectionFooter />
    </>
  );
}
