import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/WhoWeAreSpaces/SectionContent.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";

export default function QuienesSomosEspacios() {
  const staticPath = "/imgs/who-we-are-spaces";
  return (
    <>
      <NavBar />
      <Hero
        title="Naturaleza y espacios"
        description=""
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionGrid
        list={[
          { alt: "slide 1", img: `${staticPath}/slide-img-01.jpg` },
          { alt: "slide 2", img: `${staticPath}/slide-img-02.jpg` },
          { alt: "slide 3", img: `${staticPath}/slide-img-03.jpg` },
          { alt: "slide 4", img: `${staticPath}/slide-img-04.jpg` },
          { alt: "slide 5", img: `${staticPath}/slide-img-05.jpg` },
          { alt: "slide 6", img: `${staticPath}/slide-img-06.jpg` },
          { alt: "slide 7", img: `${staticPath}/slide-img-07.jpg` },
          { alt: "slide 8", img: `${staticPath}/slide-img-08.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
