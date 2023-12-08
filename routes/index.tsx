import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Hero from "@/components/Shared/Hero.tsx";
import CallToAction from "@/components/Home/CallToAction.tsx";
import SectionLearnInNature from "@/components/Home/SectionLearnInNature.tsx";
import SectionForestAsClassroom from "@/components/Home/SectionForestAsClassroom.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionServices from "@/components/Home/SectionServices.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import NavBar from "@/islands/NavBar.tsx";
import SectionGallery from "@/components/Home/SectionGallery.tsx";
import getFixedT from "@/components/i18n.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const resp = await ctx.render({
      languageAccepted: req.headers.get("Accept-Language"),
    });
    return resp;
  },
};

export default function Home({ data: { languageAccepted } }: PageProps) {
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });
  return (
    <>
      <Head>
        <title>{t("home.header.title")}</title>
        <meta
          name="description"
          content={t("home.header.meta.description.content")}
        />
      </Head>
      <NavBar languageAccepted={languageAccepted} />
      <Hero
        title={t("home.hero.claim")}
        description={t("home.hero.subClaim")}
        backgroundImage="imgs/home/home-nino-riendo.jpg"
      />
      <SectionLearnInNature t={t} />
      <CallToAction
        title={t("home.callToAction.title")}
        backgroundImage="imgs/home/home-pina.jpg"
        buttonText={t("home.callToAction.button")}
        buttonLink="/mas-informacion"
      />
      <SectionServices t={t} />
      <SectionForestAsClassroom t={t} />
      <SectionGallery
        list={[{
          title: t("home.gallery.imageWalkingInTheForestTitle"),
          description: t("home.gallery.imageWalkingInTheForestDescription"),
          image: "imgs/home/home-nino-riendo.jpg",
        }, {
          title: t("home.gallery.imageNaturalElementsTitle"),
          description: t("home.gallery.imageNaturalElementsDescription"),
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: t("home.gallery.imagesBuildingTogetherTitle"),
          description: t("home.gallery.imagesBuildingTogetherDescription"),
          image: "imgs/home/home-ninos-arboles.jpg",
        }, {
          title: t("home.gallery.imageObservingTitle"),
          description: t("home.gallery.imageObservingDescription"),
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: t("home.gallery.imageTakingCareHorsesTitle"),
          description: t("home.gallery.imageTakingCareHorsesDescription"),
          image: "imgs/home/home-pintar.jpg",
        }, {
          title: t("home.gallery.imageFreeGameTitle"),
          description: t("home.gallery.imageFreeGameDescription"),
          image: "imgs/home/home-caballos.jpg",
        }]}
      />
      <SectionSaying
        text={t("home.quote.text")}
        author={t("home.quote.author")}
      />
      {/* we pass languageAccepted to get the proper form. It should be handlded as context */}
      <SectionFooter languageAccepted={languageAccepted} />
    </>
  );
}
