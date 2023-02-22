import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";

export default function AulaPrimaria() {
  const staticPath = "/imgs/primary-classroom";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Aula - Primaria</title>
        <meta
          name="description"
          content="La Casita del Árbol y el Nido de Pájaro es un espacio natural en el que niños y niñas de primaria pueden experimentar y aprender a través del contacto con la naturaleza. El enfoque es en el aprendizaje vivencial y en el desarrollo motor, que se considera esencial en esta etapa de la vida. También se presta atención a la gestión emocional y se respeta el espacio personal de cada niño o niña para que puedan elaborar sus propios sentimientos."
        />
      </Head>
      <NavBar />
      <Hero
        title="PRIMARIA"
        description="CASITA DEL ÁRBOL & NIDO DE PÁJARO"
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionSaying
        text="Los niños no son cosas para ser moldeados, pero son personas para ser desplegadas."
        author="JESS LAIR"
      />
      <SectionGrid
        list={[
          { alt: "Primaria 1", img: `${staticPath}/primaria-01.jpg` },
          { alt: "Primaria 2", img: `${staticPath}/primaria-02.jpg` },
          { alt: "Primaria 3", img: `${staticPath}/primaria-03.jpg` },
          { alt: "Primaria 4", img: `${staticPath}/primaria-04.jpg` },
          { alt: "Primaria 5", img: `${staticPath}/primaria-05.jpg` },
          { alt: "Primaria 6", img: `${staticPath}/primaria-06.jpg` },
          { alt: "Primaria 7", img: `${staticPath}/primaria-07.jpg` },
          { alt: "Primaria 8", img: `${staticPath}/primaria-08.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
