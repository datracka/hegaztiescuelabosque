import { HeadElement } from "@/components/HeadElement.tsx";
import { PageProps } from "$fresh/server.ts";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import CallToAction from "@/components/CallToAction.tsx";
import Services from "@/components/Services.tsx";

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <HeadElement
        description="Meerkat Interactive Cool Descriptipon"
        image={url.href + "og-image.png"}
        title="Meerkat Interactive | IT for Marketers"
        url={url}
      />
      <Header />
      <Hero />
      <CallToAction />
      <Services />
    </>
  );
}
