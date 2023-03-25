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
        <meta
          name="description"
          content="El próximo mes, los dias 17 y 21 de Abril, tendremos una jornada de puertas abiertas para que puedas conocer nuestra escuela y nuestro proyecto educativo."
        />
      </Head>
      <NavBar />
      <Hero
        title="Jornada de puertas abiertas 17 y 21 de Abril"
        description="Desarrollo, Ritmos, Vivencias, ¡Ven a vivir la experiencia!"
        backgroundImage={`${staticPath}/ninos-jugando.jpg`}
      />
      <GetToKnow />
      <SectionFooter />
    </>
  );
}
