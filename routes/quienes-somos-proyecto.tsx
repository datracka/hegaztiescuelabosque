import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionCardList from "@/components/Shared/SectionCardList.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { PageProps, RouteConfig } from "$fresh/server.ts";
import HeadElement from "@/components/HeadElement.tsx";

export const config: RouteConfig = {
  routeOverride: "/(quienes-somos-proyecto|whoweare-project)",
};

export default function QuienesSomosProyecto(props: PageProps) {
  const staticPath = "/imgs/quienes-somos-proyecto";
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  return (
    <>
      <HeadElement
        description={t("whoWeAreProject.header.meta.description.content")}
        title={t("whoWeAreProject.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("whoWeAreProject.hero.claim")}
        description={t("whoWeAreProject.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-quienes-somos-proyecto.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
        )}
      >
        <h2 className={tw(`hegazti-h2  py-14 px-4 text-center mb-8`)}>
          {t("whoWeAreProject.title")}
        </h2>
      </section>
      <SectionCardList
        list={[
          {
            title: t("whoWeAreProject.cardList.title1"),
            description: t("whoWeAreProject.cardList.text1"),
            img: `${staticPath}/convivencia-diaria-con-la-naturaleza.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title2"),
            description: t("whoWeAreProject.cardList.text2"),
            img: `${staticPath}/vicenvialismo.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title3"),
            description: t("whoWeAreProject.cardList.text3"),
            img: `${staticPath}/juego-libre.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title4"),
            description: t("whoWeAreProject.cardList.text4"),
            img: `${staticPath}/vinculo.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title5"),
            description: t("whoWeAreProject.cardList.text5"),
            img: `${staticPath}/acompanamiento-emocional-y-respetuoso.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title6"),
            description: t("whoWeAreProject.cardList.text6"),
            img: `${staticPath}/comunicacion-no-violenta.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title7"),
            description: t("whoWeAreProject.cardList.text7"),
            img: `${staticPath}/interedad.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title8"),
            description: t("whoWeAreProject.cardList.text8"),
            img: `${staticPath}/movimiento-libre.jpg`,
          },
          {
            title: t("whoWeAreProject.cardList.title9"),
            description: t("whoWeAreProject.cardList.text9"),
            img: `${staticPath}/valores-solidarios.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
