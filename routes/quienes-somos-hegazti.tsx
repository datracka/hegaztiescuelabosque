import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import { Head } from "$fresh/runtime.ts";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/WhoWeAreDayInHegazti/SectionContent.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export default function QuienesSomosHegazti() {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/quienes-somos-hegazti";
  return (
    <>
      <Head>
        <title>
          {t("whoWeAreADayInHegazti.header.title")}
        </title>
        <meta
          name="description"
          content={t("whoWeAreADayInHegazti.header.meta.description.content")}
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <Hero
        title={t("whoWeAreADayInHegazti.hero.claim")}
        description={t("whoWeAreADayInHegazti.hero.subClaim")}
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />

      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <p
          className={tw(`mx-auto max-w-[75%] border-b-1 px-16 py-8 mb-8`)}
          dangerouslySetInnerHTML={{
            __html: t("whoWeAreADayInHegazti.introduction"),
          }}
        >
        </p>
      </section>
      <SectionContent
        title={t("whoWeAreADayInHegazti.section1.title")}
        imgCaption={t("whoWeAreADayInHegazti.section1.imgCaption")}
        img={`${staticPath}/img-1.jpg`}
        text={t("whoWeAreADayInHegazti.section1.text")}
        t={t}
      />
      <SectionContent
        title={t("whoWeAreADayInHegazti.section2.title")}
        imgCaption={t("whoWeAreADayInHegazti.section2.imgCaption")}
        text={t("whoWeAreADayInHegazti.section2.text")}
        img={`${staticPath}/img-2.jpg`}
        t={t}
      />

      <SectionContent
        title={t("whoWeAreADayInHegazti.section3.title")}
        imgCaption={t("whoWeAreADayInHegazti.section3.imgCaption")}
        text={t("whoWeAreADayInHegazti.section3.text")}
        img={`${staticPath}/img-3.jpg`}
        t={t}
      />

      <SectionContent
        title={t("whoWeAreADayInHegazti.section4.title")}
        imgCaption={t("whoWeAreADayInHegazti.section4.imgCaption")}
        text={t("whoWeAreADayInHegazti.section4.text")}
        img={`${staticPath}/img-4.jpg`}
        t={t}
      />
      <SectionFooter />
    </>
  );
}
