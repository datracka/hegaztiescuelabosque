import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import GetToKnow from "@/components/OpenDoors2023/GetToKnow.tsx";

// pending to translate!!
export default function JornadaPuertasAbiertas() {
  const staticPath = "/imgs/jornada-puertas-abiertas-2023";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Ven a Conocernos</title>
        <meta
          name="description"
          content="El próximo mes, el dia 14 de Mayo, tendremos una jornada de puertas abiertas para que puedas conocer nuestra escuela y nuestro proyecto educativo."
        />
      </Head>
      <NavBar />
      <Hero
        title="Jornada de puertas abiertas 14 de Mayo"
        description="Desarrollo, Ritmos, Vivencias, ¡Ven a vivir la experiencia!"
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
