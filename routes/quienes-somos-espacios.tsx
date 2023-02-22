import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/WhoWeAreSpaces/SectionContent.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";

export default function QuienesSomosEspacios() {
  const staticPath = "/imgs/who-we-are-spaces";
  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Quienes Somos - Naturaleza y espacios
        </title>
        <meta
          name="description"
          content="Este texto explica la importancia del contacto con la naturaleza en la infancia temprana y cómo esto puede influir en el desarrollo físico, emocional y espiritual de los niños. Se enfatiza en cómo la naturaleza ofrece espacios de calidad para el movimiento y la percepción sensorial que son difíciles de reproducir en otros entornos, y cómo el contacto frecuente con la naturaleza genera un sentido de identidad y pertenencia que fomenta actitudes y comportamientos de respeto al entorno. También se destaca cómo el juego en la naturaleza estimula la curiosidad, la imaginación, la creatividad, el lenguaje y la motricidad de los niños. Además, se mencionan los múltiples beneficios para la salud que se derivan del contacto con la naturaleza. Se proporciona una referencia bibliográfica para ampliar la información."
        />
      </Head>
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
