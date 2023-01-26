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
          { alt: "Grid 1", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 2", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 3", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 4", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 5", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 6", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 7", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 8", img: `${staticPath}/grid-img-02.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
