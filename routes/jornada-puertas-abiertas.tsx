import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "@/components/OpenDoors2023/GetToKnow.tsx";

// pending to translate!!
export default function JornadaPuertasAbiertas() {
  const staticPath = "/imgs/jornada-puertas-abiertas";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Ven a Conocernos</title>
        <meta
          name="description"
          content="Cada Miércoles, tenemos una jornada de puertas abiertas para que puedas conocer nuestra escuela y nuestro proyecto educativo."
        />
      </Head>
      <NavBar />
      <Hero
        title="Jornada de puertas abiertas"
        description="Cada Miércoles de Febrero a Marzo."
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
