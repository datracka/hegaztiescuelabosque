import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import SectionMasInformacion from "@/islands/SectionMasInformacion.tsx";

export default function MasInformacion() {
  return (
    <>
      <NavBar />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className={tw(`text-3xl py-8`)}>
          VEN A CONOCERNOS
        </h1>
        <SectionMasInformacion />
      </section>
      <SectionFooter />
    </>
  );
}
