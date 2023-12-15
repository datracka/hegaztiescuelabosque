import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import Faq from "@/components/WhoWeAreFaqs/Faq.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export default function QuienesSomosFaqs() {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/quienes-somos-faqs";
  return (
    <>
      <Head>
        <title>
          {t("whoWeAreFaqs.header.title")}
        </title>
        <meta
          name="description"
          content={t("whoWeAreFaqs.header.meta.description")}
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("whoWeAreFaqs.hero.claim")}
        description={t("whoWeAreFaqs.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-faq.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <Faq
          question={t("whoWeAreFaqs.faq1.question")}
          img={`${staticPath}/reloj.jpeg`}
          answer={t("whoWeAreFaqs.faq1.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.fa2.question")}
          img={`${staticPath}/horario-de-cada-grupo.jpg`}
          answer={t("whoWeAreFaqs.faq2.answer")}
        />

        <Faq
          question={t("whoWeAreFaqs.fa3.question")}
          img={`${staticPath}/ropa-especial.jpg`}
          answer={t("whoWeAreFaqs.faq3.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.fa4.question")}
          img={`${staticPath}/seguros.jpg`}
          answer={t("whoWeAreFaqs.faq4.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.faq5.question")}
          img={`${staticPath}/comida.jpg`}
          answer={t("whoWeAreFaqs.faq5.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.faq6.question")}
          img={`${staticPath}/tiempo-afuera.jpg`}
          answer={t("whoWeAreFaqs.faq6.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.faq7.question")}
          img={`${staticPath}/visita-a-la-escuela.jpg`}
          answer={t("whoWeAreFaqs.faq7.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.faq8.question")}
          img={`${staticPath}/normas-y-limites.jpg`}
          answer={t("whoWeAreFaqs.faq8.answer")}
        />
        <Faq
          question={t("whoWeAreFaqs.faq9.question")}
          img={`${staticPath}/peligroso.jpg`}
          answer={t("whoWeAreFaqs.faq8.answer")}
        />
      </section>
      <section
        className={tw(
          `mx-auto max-w-xl text-center px-2 sm:px-6 lg:px-8 pt-8 pb-16`,
        )}
      >
        <h3 className={tw("text-2xl mb-4")}>
          {t("whoWeAreFaqs.moreQuestionsHeadline")}
        </h3>
        <p className={tw("mb-4")}>
          {t("whoWeAreFaqs.moreQuestionsText")}
        </p>
        <a
          href="mas-informacion"
          className={tw(
            "inline-block my-6 py-4 px-8 bg-[#415a30] text-white hover:bg-[#416a40]",
          )}
        >
          {t("whoWeAreFaqs.moreQuestionsButton")}
        </a>
      </section>
      <SectionFooter />
    </>
  );
}
