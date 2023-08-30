import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Hero from "@/components/Shared/Hero.tsx";
import CallToAction from "@/components/Home/CallToAction.tsx";
import SectionLearnInNature from "@/components/Home/SectionLearnInNature.tsx";
import SectionForestAsClassroom from "@/components/Home/SectionForestAsClassroom.tsx";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
import SectionServices from "@/components/Home/SectionServices.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import NavBar from "@/islands/NavBar.tsx";
import SectionGallery from "@/components/Home/SectionGallery.tsx";
import getFixedT, { i18n } from "@/components/i18n.ts";

export default function Home({ url }: PageProps) {
  const u = new URL(url);
  const language = u.searchParams.get("language");
  const t = getFixedT(language);

  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Home</title>
        <meta
          name="description"
          content="Hegazti Escuela Bosque es una escuela que ofrece un enfoque educativo basado en el aprendizaje en la naturaleza y la conexión con el medio ambiente. Ofrecemos una variedad de servicios que incluyen Casitas Abejorro, del Bosque, del Árbol y Nido de Pájaro para niños y niñas de 0 a 12 años. También ofrecemos actividades extracurriculares como ludotecas de invierno, primavera y verano, y sábados en familia. En nuestra escuela, el aprendizaje es un proceso holístico que se vive de manera funcional y se integra en la vida cotidiana. Nuestros objetivos son promover el desarrollo integral de todas las personas involucradas y desarrollar la inteligencia emocional junto con la resolución de problemas. En nuestro aula viva, los niños pueden explorar, investigar y aprender en contacto directo con la naturaleza, mientras nuestros guías les brindan apoyo y herramientas para enriquecer su experiencia.
"
        />
      </Head>
      <NavBar language={language} />
      <Hero
        title={t("home.title")}
        description={t("home.subtitle")}
        backgroundImage="imgs/home/home-nino-riendo.jpg"
      />
      <SectionLearnInNature />
      <CallToAction
        title="MATRÍCULAS ABIERTAS"
        backgroundImage="imgs/home/home-pina.jpg"
        buttonText="MÁS INFO"
        buttonLink="#"
      />
      <SectionServices />
      <SectionForestAsClassroom />
      <SectionGallery
        list={[{
          title: "PASEOS POR EL MONTE",
          description: "TODOS LOS DIAS",
          image: "imgs/home/home-nino-riendo.jpg",
        }, {
          title: "ELEMENTOS NATURALES",
          description: "DESPERTANDO LA CURIOSIDAD",
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: "CONSTRUYENDO JUNTOS",
          description: "TRABAJO EN EQUIPO",
          image: "imgs/home/home-ninos-arboles.jpg",
        }, {
          title: "OBSERVACIÓN",
          description: "SEGUIENDO LOS CICLOS",
          image: "imgs/home/home-lagartija.jpg",
        }, {
          title: "JUEGO LIBRE",
          description: "SIGUIENDO EL IMPULSO",
          image: "imgs/home/home-pintar.jpg",
        }, {
          title: "CUIDANDO DE LOS CABALLOS",
          description: "RESPONSABILIDAD Y EMPATÍA",
          image: "imgs/home/home-caballos.jpg",
        }]}
      />
      <SectionSaying
        text="Dímelo y lo olvido. Enseñame y lo recuerdo. Involúcrame y lo aprendo."
        author="Benjamin Franklin"
      />
      <SectionFooter />
    </>
  );
}
