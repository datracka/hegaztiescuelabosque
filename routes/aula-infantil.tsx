import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
// import SectionCallToAction from "@/components/Shared/SectionCallToAction.tsx";

export default function AulaInfantil() {
  const staticPath = "/imgs/aula-infantil";
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
        backgroundImage={`${staticPath}/hero-casita-del-bosque.jpg`}
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
          {
            alt: "Niñas acariciando caballos",
            img: `${staticPath}/ninas-acariciando-caballos.jpg`,
          },
          {
            alt: "Mano con lagartija",
            img: `${staticPath}/mano-con-lagartija.jpg`,
          },
          { alt: "Yurta", img: `${staticPath}/yurta.jpg` },
          {
            alt: "Haciendo pasteles juntos",
            img: `${staticPath}/haciendo-pasteles-juntos.jpg`,
          },
          {
            alt: "Jugando en el rio",
            img: `${staticPath}/jugando-en-el-rio.jpg`,
          },
          {
            alt: "Paseando por el campo",
            img: `${staticPath}/paseando-por-el-campo.jpg`,
          },
          {
            alt: "Haciendo figuras de barro",
            img: `${staticPath}/haciendo-figuras-de-barro.jpg`,
          },
          {
            alt: "Jugando en la yurta",
            img: `${staticPath}/jugando-en-la-yurta.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
