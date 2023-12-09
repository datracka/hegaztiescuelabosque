import { PageProps } from "$fresh/server.ts";

export default function App(pageProps: PageProps) {
  console.log("pageProps", pageProps);
  return <pageProps.Component />;
}
