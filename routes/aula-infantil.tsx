import NavBar from "@/islands/NavBar.tsx";
import { RouteConfig, HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import getFixedT from "@/components/i18n.ts";
// import SectionCallToAction from "@/components/Shared/SectionCallToAction.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-infantil|preschool-classroom)",
};

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const resp = await ctx.render({
      languageAccepted: req.headers.get("Accept-Language"),
    });
    return resp;
  },
};

export default function AulaInfantil({ data: { languageAccepted } }: PageProps) {
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/aula-infantil";
  return (
    <>
      <Head>
        <title>{t("preschoolClassroom.header.title")}</title>
        <meta
          name="description"
          content={t("preschoolClassroom.header.meta.description.content")}
        />
      </Head>
      <NavBar languageAccepted={languageAccepted} />
      <Hero
        title={t("preschoolClassroom.hero.claim")}
        description={t("preschoolClassroom.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-casita-del-bosque.jpg`}
      />
      <SectionContent staticPath={staticPath} languageAccepted={languageAccepted} />
      {
        /* <SectionCallToAction
        title="INSCRIPCIONES <br/>ABIERTAS"
        description="MARZO A JUNIO"
        image={`${staticPath}/cta-img-01.jpg`}
        buttonText="MÁS <br/>INFORMACIÓN"
        buttonLink="/mas-informacion"
      /> */
      }
      <SectionSaying
        text={t("preschoolClassroom.saying")}
        author="ALBERT EINSTEIN"
      />
      <SectionGrid
        list={[
          {
            alt: t("imageGrid.horses"),
            img: `${staticPath}/ninas-acariciando-caballos.jpg`,
          },
          {
            alt: t("imageGrid.kidHand"),
            img: `${staticPath}/mano-con-lagartija.jpg`,
          },
          { alt: t("imageGrid.yurta"), img: `${staticPath}/yurta.jpg` },
          {
            alt: t("imageGrid.cooking"),
            img: `${staticPath}/haciendo-pasteles-juntos.jpg`,
          },
          {
            alt: t("imageGrid.forest"),
            img: `${staticPath}/jugando-en-el-rio.jpg`,
          },
          {
            alt: t("imageGrid.walk"),
            img: `${staticPath}/paseando-por-el-campo.jpg`,
          },
          {
            alt: t("imageGrid.clay"),
            img: `${staticPath}/haciendo-figuras-de-barro.jpg`,
          },
          {
            alt: t("imageGrid.playingInYurta"),
            img: `${staticPath}/jugando-en-la-yurta.jpg`,
          },
        ]}
      />
      <SectionFooter languageAccepted={languageAccepted} />
    </>
  );
}
