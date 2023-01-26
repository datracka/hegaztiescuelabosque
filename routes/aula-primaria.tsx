import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";

export default function AulaPrimaria() {
  return (
    <>
      <NavBar />
      <Hero
        title="Creciendo en la naturaleza"
        description="Hegazti Escuela Bosque"
        backgroundImage="imgs/home/home-image-1.jpg"
      />
      <SectionFooter />
    </>
  );
}
