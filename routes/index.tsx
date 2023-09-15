import { Head } from "$fresh/runtime.ts";
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

export default function Home({ state }: PageProps) {
  const { t, language } = state;
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Home</title>
        <meta
          name="description"
          content="Hegazti Escuela Bosque es una escuela que ofrece un enfoque educativo basado en el aprendizaje en la naturaleza y la conexión con el medio ambiente. Ofrecemos una variedad de servicios que incluyen Casitas Abejorro, del Bosque, del Árbol y Nido de Pájaro para niños y niñas de 0 a 12 años. También ofrecemos actividades extracurriculares como ludotecas de invierno, primavera y verano, y sábados en familia. En nuestra escuela, el aprendizaje es un proceso holístico que se vive de manera funcional y se integra en la vida cotidiana. Nuestros objetivos son promover el desarrollo integral de todas las personas involucradas y desarrollar la inteligencia emocional junto con la resolución de problemas. En nuestro aula viva, los niños pueden explorar, investigar y aprender en contacto directo con la naturaleza, mientras nuestros guías les brindan apoyo y herramientas para enriquecer su experiencia.
"
        />
      </Head>
      <NavBar language={language} />
      <Hero
        title={t("hero.claim")}
        description={t("hero.subClaim")}
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
      <SectionFooter />
    </>
  );
}
