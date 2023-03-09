import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import SectionMasInformacion from "@/islands/SectionMasInformacion.tsx";
import { Head } from "$fresh/runtime.ts";

export default function MasInformacion() {
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Mas Información</title>
        <meta
          name="description"
          content="Formulario para preguntar por más información."
        />
      </Head>
      <NavBar />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className={tw(`hegazti-h1 text-left! py-8`)}>
          VEN A CONOCERNOS
        </h1>
        <SectionMasInformacion />
      </section>
      <SectionFooter />
    </>
  );
}
