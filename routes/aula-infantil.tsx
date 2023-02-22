import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
// import SectionCallToAction from "@/components/Shared/SectionCallToAction.tsx";

export default function AulaInfantil() {
  const staticPath = "/imgs/infant-classroom";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Aula - Infantil</title>
        <meta
          name="description"
          content="La Casita del Bosque es un espacio natural diseñado para niñas y niños de 3 a 6 años, donde pueden aprender viviendo, tocando y explorando su entorno natural. El objetivo es crecer en armonía con la naturaleza y desarrollar habilidades motoras y emocionales. Se da prioridad a la persona, a sus preferencias, intereses, estados y sentimientos."
        />
      </Head>
      <NavBar />
      <Hero
        title="INFANTIL"
        description="CASITA DEL BOSQUE"
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <SectionContent staticPath={staticPath} />
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
        text="Mira profundamente en la naturaleza y entonces comprenderás todo mejor."
        author="ALBERT EINSTEIN"
      />
      <SectionGrid
        list={[
          { alt: "Infantial 1", img: `${staticPath}/infantil-01.jpg` },
          { alt: "Infantial 2", img: `${staticPath}/infantil-02.jpg` },
          { alt: "Infantial 3", img: `${staticPath}/infantil-03.jpg` },
          { alt: "Infantial 4", img: `${staticPath}/infantil-04.jpg` },
          { alt: "Infantial 5", img: `${staticPath}/infantil-05.jpg` },
          { alt: "Infantial 6", img: `${staticPath}/infantil-06.jpg` },
          { alt: "Infantial 7", img: `${staticPath}/infantil-07.jpg` },
          { alt: "Infantial 8", img: `${staticPath}/infantil-08.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
