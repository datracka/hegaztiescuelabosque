import { PageProps } from "$fresh/server.ts";
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

export default function Home(props: PageProps) {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });
  return (
    <>
      <HeadElement
        description={t("home.header.meta.description.content")}
        title={t("home.header.title")}
        url={props.url}
      />
      <NavBar menuTexts={menuTexts} />
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
        buttonLink={t("menu.contact.url")}
      />
      <SectionServices 
        list={[
          {
            title: t("home.services.bumbleBeeHouseTitle"),
            description: t("home.services.bumbleBeeHouseText"),
            img: "imgs/home/servicios-madre-de-dia.jpg",
            link: t("menu.forestAsClassroom.daytimeMother.url"),
            button: t("home.services.button"),
          },
          {
            title: t("home.services.forestHouseTitle"),
            description: t("home.services.forestHouseText"),
            img: "imgs/home/servicios-infantil.jpg",
            link: t("menu.forestAsClassroom.childhoodClass.url"),
            button: t("home.services.button"),
          },
          {
            title: t("home.services.birdNestTitle"),
            description: t("home.services.birdNestText"),
            img: "imgs/home/servicios-primaria.jpg",
            link: t("menu.forestAsClassroom.primarySchool.url"),
            button: t("home.services.button"),
          },
          {
            title: t("home.services.extracurricularPlayRoomTitle"),
            description: t("home.services.extracurricularPlayRoomText"),
            img: "imgs/home/servicios-extraescolares-ludoteca.jpg",
            link: t("menu.forestAsClassroom.extracurricularActivitiesPlayRoom.url"),
            button: t("home.services.button"),
          },
          {
            title: t("home.services.extracurricularSaturdaysInFamilyTitle"),
            description: t("home.services.extracurricularSaturdaysInFamilyText"),
            img: "imgs/home/servicios-extraescolares-sabados.jpg",
            link: t("menu.forestAsClassroom.extracurricularActivitiesSaturdays.url"),
            button: t("home.services.button"),
          },
        ]}
      />
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
      <Prices t={t} />
      <SectionSaying
        text={t("home.quote.text")}
        author={t("home.quote.author")}
      />
      <Opinions
        title={t("home.opinions.title")}
        list={[
          {
            testimonial: t("home.opinions.testimonial1"),
            name: t("home.opinions.name1"),
          },
          {
            testimonial: t("home.opinions.testimonial2"),
            name: t("home.opinions.name2"),
          },
          {
            testimonial: t("home.opinions.testimonial3"),
            name: t("home.opinions.name3"),
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
