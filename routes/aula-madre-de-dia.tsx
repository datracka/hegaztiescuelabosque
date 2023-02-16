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
          { alt: "Aula Madre De Dia 1", img: `${staticPath}/madre-01.jpg` },
          { alt: "Aula Madre De Dia 2", img: `${staticPath}/madre-02.jpg` },
          { alt: "Aula Madre De Dia 3", img: `${staticPath}/madre-03.jpg` },
          { alt: "Aula Madre De Dia 4", img: `${staticPath}/madre-04.jpg` },
          { alt: "Aula Madre De Dia 5", img: `${staticPath}/madre-05.jpg` },
          { alt: "Aula Madre De Dia 6", img: `${staticPath}/madre-06.jpg` },
          { alt: "Aula Madre De Dia 7", img: `${staticPath}/madre-07.jpg` },
          { alt: "Aula Madre De Dia 8", img: `${staticPath}/madre-08.jpg` },
          { alt: "Aula Madre De Dia 1", img: `${staticPath}/madre-09.jpg` },
          { alt: "Aula Madre De Dia 2", img: `${staticPath}/madre-10.jpg` },
          { alt: "Aula Madre De Dia 3", img: `${staticPath}/madre-11.jpg` },
          { alt: "Aula Madre De Dia 4", img: `${staticPath}/madre-12.jpg` },
          { alt: "Aula Madre De Dia 5", img: `${staticPath}/madre-13.jpg` },
          { alt: "Aula Madre De Dia 6", img: `${staticPath}/madre-14.jpg` },
          { alt: "Aula Madre De Dia 7", img: `${staticPath}/madre-15.jpg` },
          { alt: "Aula Madre De Dia 8", img: `${staticPath}/madre-16.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
