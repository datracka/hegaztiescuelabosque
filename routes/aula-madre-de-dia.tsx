import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(aula-madre-de-dia|daily-mother-schoolroom)",
};

export default function AulaMadreDeDia() {
  return <div>Madre De Dia</div>;
}
