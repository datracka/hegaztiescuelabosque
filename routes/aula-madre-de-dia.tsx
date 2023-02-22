import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";
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
      <Head>
        <title>Hegazti Escuela Bosque | Aula - Madre de dia</title>
        <meta
          name="description"
          content="La Casita Abejorro es un centro de cuidado de niños y niñas de 0 a 3 años que ofrece un ambiente de calma y respeto en contacto con la naturaleza. Se enfoca en el movimiento libre y el acompañamiento respetuoso para generar un vínculo seguro entre las criaturas y la persona que acompaña. La yurta es el ambiente cálido y familiar en el que se generan experiencias de amor, confianza y sencillez para favorecer que los niños puedan ser. El centro está dirigido por Esther, una madre de dos niñas, que se une al proyecto con la ilusión de aportar su experiencia vital en el acompañamiento respetuoso a las criaturas."
        />
      </Head>
      <NavBar />
      <Hero
        title="MADRE DE DÍA"
        description="CASITA ABEJORRO"
        backgroundImage={`${staticPath}/hero-image-aula-madre-de-dia.jpg`}
      />
      <SectionContent staticPath={staticPath} />
      <SectionSaying
        text="Está comprobado que los abejorros no deberían poder volar debido a su peso, tamaño y cuerpo, sólo que ellas no lo saben."
        author="EMMI PICKLER"
      />
      <SectionGrid
        list={[
          { alt: "Niña Pintando", img: `${staticPath}/nina-pintando.jpg` },
          {
            alt: "Frase Movimiento Libre",
            img: `${staticPath}/frase-movimiento-libre.jpg`,
          },
          {
            alt: "Jugando con animales",
            img: `${staticPath}/jugando-con-animales.jpg`,
          },
          { alt: "Frase Confianza", img: `${staticPath}/frase-confianza.jpg` },
          { alt: "Frase Cuidado", img: `${staticPath}/frase-cuidado.jpg` },
          { alt: "Bosque", img: `${staticPath}/bosque.jpg` },
          { alt: "Frase Calidez", img: `${staticPath}/frase-calidez.jpg` },
          { alt: "Niños Jugando", img: `${staticPath}/ninos-jugando.jpg` },
          {
            alt: "Caballos y niños",
            img: `${staticPath}/caballos-y-ninos.jpg`,
          },
          {
            alt: "Frase Ritmo Calmado",
            img: `${staticPath}/frase-ritmo-calmado.jpg`,
          },
          {
            alt: "Frase Naturaleza",
            img: `${staticPath}/nino-y-caracola.jpg`,
          },
          { alt: "Niño y caracola", img: `${staticPath}/frase-cuidado-2.jpg` },
          {
            alt: "Frase Cuidado",
            img: `${staticPath}/frase-acompanamiento.jpg`,
          },
          {
            alt: "Madre y niño abrazado",
            img: `${staticPath}/madre-y-nino-abrazado.jpg`,
          },
          {
            alt: "Frase Naturaleza",
            img: `${staticPath}/frase-naturaleza.jpg`,
          },
          {
            alt: "Niños y animales",
            img: `${staticPath}/ninos-y-animales.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
