import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/InfantClassroom/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import SectionCallToAction from "@/components/Shared/SectionCallToAction.tsx";

export default function AulaInfantil() {
  const staticPath = "/imgs/infant-classroom";
  return (
    <>
      <NavBar />
      <Hero
        title="INFANTIL"
        description="CASITA DEL BOSQUE"
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionCallToAction
        title="INSCRIPCIONES <br/>ABIERTAS"
        description="MARZO A JUNIO"
        image={`${staticPath}/cta-img-01.jpg`}
        buttonText="MÁS <br/>INFORMACIÓN"
        buttonLink="/mas-informacion"
      />
      <SectionSaying
        text="Mira profundamente en la naturaleza y entonces comprenderás todo mejor."
        author="ALBERT EINSTEIN"
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
