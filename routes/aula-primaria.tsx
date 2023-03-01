import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/PrimaryClassroom/SectionContent.tsx";
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
        backgroundImage={`${staticPath}/hero-primaria-pies-nino.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionSaying
        text="Los niños no son cosas para ser moldeados, pero son personas para ser desplegadas."
        author="JESS LAIR"
      />
      <SectionGrid
        list={[
          { alt: "Yurta", img: `${staticPath}/yurta.jpg` },
          { alt: "Niña leyendo", img: `${staticPath}/nina-leyendo.jpg` },
          {
            alt: "Corazón de piedras",
            img: `${staticPath}/corazon-de-piedras.jpg`,
          },
          {
            alt: "Caballos pastando",
            img: `${staticPath}/caballos-pastando.jpg`,
          },
          {
            alt: "Manos llenas de barro",
            img: `${staticPath}/manos-llenas-de-barro.jpg`,
          },
          { alt: "Cabritas", img: `${staticPath}/cabritas.jpg` },
          {
            alt: "Espacio para jugar",
            img: `${staticPath}/espacio-para-jugar.jpg`,
          },
          { alt: "Vocales", img: `${staticPath}/vocales.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
