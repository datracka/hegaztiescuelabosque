import { css, tw } from "twind/css";
import FormEmbedder from "@/components/Shared/FormEmbedder.tsx";
import getFixedT from "@/components/i18n.ts";

type whereWeAreProps = {
  languageAccepted: string;
};

const WhereAreWe = ({ languageAccepted }: whereWeAreProps) => {
  const t = getFixedT(languageAccepted);
  return (
    <div className={tw`text-white sm:w-2/4`}>
      <h2 class={tw(`hegazti-h2-footer pb-4 mb-8 border-b-2`)}>
        {t("footer.whereAreWe")}
      </h2>
      <p class={tw(`mb-4`)}>
        {t("footer.whereAreWeExtended")}
      </p>
      <img
        title="¿Donde estamos?"
        src="imgs/google-maps-location.jpg"
        class={tw`w-full mb-4`}
      />
      <p class={tw(`mb-4`)}>
        <strong className={tw`font-bold`}>{t("footer.timeTableTitle")}</strong>
        <br />
        {t("footer.timeTableText")}
      </p>
      <p class={tw(`mb-4`)}>
        <strong className={tw`font-bold`}>
          {t("footer.timeTableTextSummerTitle")}
        </strong>
        <br />
        {t("footer.timeTableTextSummerText")}
      </p>
      {
        /* <p class={tw(`mb-4`)}>
        <strong className={tw`font-bold`}>{t("footer.timeTableTextSaturdayTitle")}</strong>
        {" "}
        <br />
        {t("footer.timeTableTextSaturdayText")}
      </p> */
      }
    </div>
  );
};

type contactUsProps = {
  languageAccepted: string;
};

type formsProps = { [key: string]: string };
const forms: formsProps = {
  es: "https://my.forms.app/form/63e634616c5c2579e224d0e7",
  en: "https://my.forms.app/form/656f2f0de39d84a848f95b70",
};

const getFormFromLanguage = (languageAccepted: string): string =>
  forms[languageAccepted];

const ContactUs = ({ languageAccepted }: contactUsProps) => {
  const form: string = getFormFromLanguage(languageAccepted);
  const t = getFixedT(languageAccepted);
  return (
    <div
      className={tw`flex flex-col relative overflow-hidden  sm:w-2/4 ${css`flex-basis: 50%`}`}
    >
      <h2 class={tw(`hegazti-h2-footer pb-4 mb-8 border-b-2`)}>
        {t("footer.contactWithUs")}
      </h2>
      <FormEmbedder src={form} />
    </div>
  );
};

type sectionContactProps = {
  languageAccepted: string;
};

const SectionContact = ({ languageAccepted }: sectionContactProps) => {
  return (
    <div
      className={tw`flex flex-col justify-between sm:flex-row mx-auto max-w-7xl gap-8 `}
    >
      <WhereAreWe languageAccepted={languageAccepted} />
      <ContactUs languageAccepted={languageAccepted} />
    </div>
  );
};

export default SectionContact;
