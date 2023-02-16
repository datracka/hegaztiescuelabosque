import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";

export default function AulaPrimaria() {
  const staticPath = "/imgs/primary-classroom";
  return (
    <>
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
