import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import SectionMasInformacion from "@/islands/SectionMasInformacion.tsx";
import GetToKnow from "@/components/OpenDoors2023/GetToKnow.tsx";

export default function JornadaPuertasAbiertas() {
  const staticPath = "/imgs/jornada-puertas-abiertas-2023";
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Jornada de pueetas abiertas</title>
        // los dias 21 y 22 de Abril,
        <meta
          name="description"
          content="El próximo mes, tendremos una jornada de puertas abiertas para que puedas conocer nuestra escuela y nuestro proyecto educativo."
        />
      </Head>
      <NavBar />
      // 21 y 22 de Abril en Viana Navarra...
      <Hero
        title="Jornada de puertas abiertas"
        description="Desarrollo, Ritmos, Vivencias, ¡Ven a vivir la experiencia!"
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
