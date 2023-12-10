import SectionContact from "@/islands/SectionContact.tsx";
import CookieBanner from "@/islands/CookieBanner.tsx";
import { css, tw } from "twind/css";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

const staticPath = "/imgs/shared";

const SectionFooter = () => {

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  
  return (
    <div className={tw(`w-full p-4 sm:p-6 lg:p-8 bg-[#415a30] text-white`)}>
      <SectionContact languageAccepted={languageAccepted} />
      <div className={tw`my-4 mx-auto max-w-3xl text-center`}>
        <p class={tw`text-lg font-normal my-10 leading-none	`}>
          {t("footer.address")}
        </p>

        <p class={tw`my-10`}>
          <a
            rel="noopener"
            class={tw`inline-block`}
            href="https://www.facebook.com/www.hegaztiescuelabosque.org/"
            target="_blank"
          >
            <img
              title="facebook"
              src={`${staticPath}/facebook.svg`}
              className={tw`${css`filter: invert(100%) sepia(0%) saturate(7498%) hue-rotate(296deg) brightness(103%) contrast(101%);`}`}
            />
          </a>
          <a
            rel="noopener"
            class={tw`inline-block`}
            href="https://www.instagram.com/hegazti_escuela_bosque/"
            target="_blank"
          >
            <img
              title="instagram"
              src={`${staticPath}/instagram.svg`}
              className={tw`${css`filter: invert(100%) sepia(0%) saturate(7498%) hue-rotate(296deg) brightness(103%) contrast(101%);`}`}
            />
          </a>
        </p>
        <p class={tw`text-xs my-10`}>
          <a
            href="/legal-politica-de-cookies"
            class={tw`block sm:inline-block px-2 mx-2`}
          >
            {t("footer.cookiePolicyText")}
          </a>
          <a
            href="/legal-politica-de-privacidad"
            class={tw`block sm:inline-block px-2 mx-2`}
          >
            {t("footer.privacyPolicyText")}
          </a>
          <a
            href="/legal-aviso-legal"
            class={tw`block sm:inline-block px-2 mx-2`}
          >
            {t("footer.legalText")}
          </a>
          <a
            href="/mas-informacion"
            class={tw`block sm:inline-block px-2 mx-2`}
          >
           {t("footer.contact")}
          </a>
        </p>
      </div>
      {/*<CookieBanner />*/}
    </div>
  );
};
export default SectionFooter;
