import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/islands/NavBar.tsx";

export const config: RouteConfig = {
  routeOverride: "/(aula-madre-de-dia|daily-mother-schoolroom)",
};

export default function AulaMadreDeDia() {
  return (
    <>
      <NavBar />
    </>
  );
}
