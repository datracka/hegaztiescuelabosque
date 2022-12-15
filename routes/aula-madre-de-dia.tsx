import { RouteConfig } from "$fresh/server.ts";
import NavBar from "@/components/NavBar/index.tsx";

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
