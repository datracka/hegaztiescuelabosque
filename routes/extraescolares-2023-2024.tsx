import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "@/components/Afterschool20232024/GetToKnow.tsx";

export default function JornadaPuertasAbiertas() {
  const staticPath = "/imgs/extraescolares-2023-2024";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Ven a Conocernos</title>
        <meta
          name="description"
          content="Juego en la naturaleza. Dinámicas de grupo. Actividades artísticas. ¡Ven a vivir la experiencia!"
        />
      </Head>
      <NavBar />
      <Hero
        title="Extraescolares 2023-2024"
        description="Miercoles o Jueves 16:30 a 17:30"
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
