import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-madre-de-dia|daily-mother-schoolroom)",
};

export default function AulaMadreDeDia() {
  return (
    <>
      <NavBar />
      <Hero
        title="MADRE DE DÍA"
        description="CASITA ABEJORRO"
        backgroundImage="imgs/elementary-classroom/hero-image.jpg"
      />
      <SectionFooter />
    </>
  );
}
