import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionContent from "@/components/WhoWeAreSpaces/SectionContent.tsx";
import SectionGrid from "@/components/Shared/SectionGrid.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export default function QuienesSomosEspacios() {
  const { languageAccepted, enableForm } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/quienes-somos-espacios";
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
      <NavBar menuTexts={menuTexts} />
      <Hero
        title="NATURALEZA Y ESPACIOS"
        description="Aprender jugando en contacto con la naturaleza"
        backgroundImage={`${staticPath}/hero-quienes-somos-naturaleza-y-espacios.jpg`}
      />
      <SectionContent
        staticPath={staticPath}
        languageAccepted={languageAccepted}
      />
      <SectionGrid
        list={[
          {
            alt: "Juegos Conjuntos",
            img: `${staticPath}/juegos-conjuntos.jpg`,
          },
          { alt: "Grupos de Niños", img: `${staticPath}/grupo-de-ninos.jpg` },
          {
            alt: "Niños y Caballos",
            img: `${staticPath}/ninos-y-caballos.jpg`,
          },
          {
            alt: "Escalando la montaña",
            img: `${staticPath}/escalando-la-montana.jpg`,
          },
          {
            alt: "Explorando el riachuelo",
            img: `${staticPath}/explorando el riachuelo.jpg`,
          },
          { alt: "Pastoreando", img: `${staticPath}/pastoreando.jpg` },
          { alt: "Juegos de hojas", img: `${staticPath}/juegos-de-hojas.jpg` },
          { alt: "Yurta", img: `${staticPath}/yurta.jpg` },
        ]}
      />
      <SectionFooter />
    </>
  );
}
