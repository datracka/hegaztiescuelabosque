import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  routeOverride: "/(abcd|efgh|ijkl|mnop|qrst|uvwx|yz)",
};

export default function MadreDeDia() {
  return <div>Madre De Dia</div>;
}
