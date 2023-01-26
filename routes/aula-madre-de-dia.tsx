import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/DailyMother/SectionContent.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-madre-de-dia|daily-mother-schoolroom)",
};

export default function AulaMadreDeDia() {
  const staticPath = "/imgs/daily-mother-schoolroom";
  return (
    <>
      <NavBar />
      <Hero
        title="MADRE DE DÍA"
        description="CASITA ABEJORRO"
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionSaying
        text="Está comprobado que los abejorros no deberían poder volar debido a su peso, tamaño y cuerpo, sólo que ellas no lo saben."
        author="EMMI PICKLER"
      />
      <SectionGrid
        list={[
          { alt: "Grid 1", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 2", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 3", img: `${staticPath}/grid-img-03.jpg` },
          { alt: "Grid 4", img: `${staticPath}/grid-img-04.jpg` },
          { alt: "Grid 5", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 6", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 7", img: `${staticPath}/grid-img-04.jpg` },
          { alt: "Grid 8", img: `${staticPath}/grid-img-03.jpg` },
          { alt: "Grid 1", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 2", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 3", img: `${staticPath}/grid-img-03.jpg` },
          { alt: "Grid 4", img: `${staticPath}/grid-img-04.jpg` },
          { alt: "Grid 5", img: `${staticPath}/grid-img-02.jpg` },
          { alt: "Grid 6", img: `${staticPath}/grid-img-01.jpg` },
          { alt: "Grid 7", img: `${staticPath}/grid-img-04.jpg` },
          { alt: "Grid 8", img: `${staticPath}/grid-img-03.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
