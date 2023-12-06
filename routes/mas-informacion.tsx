import { tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import SectionMasInformacion from "@/islands/SectionMasInformacion.tsx";
import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import getFixedT from "@/components/i18n.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const resp = await ctx.render({
      languageAccepted: req.headers.get("Accept-Language"),
    });
    return resp;
  },
};

export default function MasInformacion({ data: { languageAccepted } }: PageProps) {
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true })
  return (
    <>
      <Head>
        <title>Hegazti Escuela Bosque | Mas Información</title>
        <meta
          name="description"
          content="Formulario para preguntar por más información."
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className={tw(`hegazti-h1 text-left! py-8`)}>
          VEN A CONOCERNOS
        </h1>
        <SectionMasInformacion languageAccepted={languageAccepted} />
      </section>
      <SectionFooter languageAccepted={languageAccepted}/>
    </>
  );
}
