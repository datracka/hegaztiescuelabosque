import { PageProps, RouteConfig } from "$fresh/server.ts";
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
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";
import HeadElement from "@/components/HeadElement.tsx";
import Prices from "@/components/Prices/Prices.tsx";
import Opinions from "@/components/Opinions/Opinions.tsx";

export const config: RouteConfig = {
  routeOverride: "/(spain|espana)",
};

export default function HomeSpain(props: PageProps) {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });
  return (
    <>
      <HeadElement
        description={t("homeSpain.header.meta.description.content")}
        title={t("homeSpain.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("homeSpain.hero.claim")}
        description={t("homeSpain.hero.subClaim")}
        backgroundImage="imgs/home/home-nino-riendo.jpg"
      />
      <SectionLearnInNature t={t} />
      <CallToAction
        title={t("homeSpain.callToAction.title")}
        backgroundImage="imgs/home/home-pina.jpg"
        buttonText={t("homeSpain.callToAction.button")}
        buttonLink={t("menu.contact.url")}
      />
      <SectionServices
        list={[
          {
            title: t("homeSpain.services.bumbleBeeHouseTitle"),
            description: t("homeSpain.services.bumbleBeeHouseText"),
            img: "imgs/home/servicios-madre-de-dia.jpg",
            link: t("menu.forestAsClassroom.daytimeMother.url"),
            button: t("homeSpain.services.button"),
          },
          {
            title: t("homeSpain.services.forestHouseTitle"),
            description: t("homeSpain.services.forestHouseText"),
            img: "imgs/home/servicios-infantil.jpg",
            link: t("menu.forestAsClassroom.childhoodClass.url"),
            button: t("homeSpain.services.button"),
          },
          {
            title: t("homeSpain.services.birdNestTitle"),
            description: t("homeSpain.services.birdNestText"),
            img: "imgs/home/servicios-primaria.jpg",
            link: t("menu.forestAsClassroom.primarySchool.url"),
            button: t("homeSpain.services.button"),
          },
          {
            title: t("homeSpain.services.extracurricularPlayRoomTitle"),
            description: t("homeSpain.services.extracurricularPlayRoomText"),
            img: "imgs/home/servicios-extraescolares-ludoteca.jpg",
            link: t(
              "menu.forestAsClassroom.extracurricularActivitiesPlayRoom.url",
            ),
            button: t("homeSpain.services.button"),
          },
          {
            title: t(
              "homeSpain.services.extracurricularSaturdaysInFamilyTitle",
            ),
            description: t(
              "homeSpain.services.extracurricularSaturdaysInFamilyText",
            ),
            img: "imgs/home/servicios-extraescolares-sabados.jpg",
            link: t(
              "menu.forestAsClassroom.extracurricularActivitiesSaturdays.url",
            ),
            button: t("homeSpain.services.button"),
          },
        ]}
      />
      <SectionForestAsClassroom
        title={t("homeSpain.forestAsClassroom.title")}
        keys={t("homeSpain.forestAsClassroom.keys")}
        text={t("homeSpain.forestAsClassroom.text")}
      />
      <SectionGallery
        list={[{
          title: t("homeSpain.gallery.imageWalkingInTheForestTitle"),
          description: t(
            "homeSpain.gallery.imageWalkingInTheForestDescription",
          ),
          image: "imgs/home/home-nino-riendo.jpg",
        }, {
          title: t("homeSpain.gallery.imageNaturalElementsTitle"),
          description: t("homeSpain.gallery.imageNaturalElementsDescription"),
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: t("homeSpain.gallery.imagesBuildingTogetherTitle"),
          description: t("homeSpain.gallery.imagesBuildingTogetherDescription"),
          image: "imgs/home/home-ninos-arboles.jpg",
        }, {
          title: t("homeSpain.gallery.imageObservingTitle"),
          description: t("homeSpain.gallery.imageObservingDescription"),
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: t("homeSpain.gallery.imageTakingCareHorsesTitle"),
          description: t("homeSpain.gallery.imageTakingCareHorsesDescription"),
          image: "imgs/home/home-pintar.jpg",
        }, {
          title: t("homeSpain.gallery.imageFreeGameTitle"),
          description: t("homeSpain.gallery.imageFreeGameDescription"),
          image: "imgs/home/home-caballos.jpg",
        }]}
      />
      <Prices t={t} />
      <SectionSaying
        text={t("homeSpain.quote.text")}
        author={t("homeSpain.quote.author")}
      />
      <Opinions
        title={t("homeSpain.opinions.title")}
        list={[
          {
            testimonial: t("homeSpain.opinions.testimonial1"),
            name: t("homeSpain.opinions.name1"),
          },
          {
            testimonial: t("homeSpain.opinions.testimonial2"),
            name: t("homeSpain.opinions.name2"),
          },
          {
            testimonial: t("homeSpain.opinions.testimonial3"),
            name: t("homeSpain.opinions.name3"),
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
