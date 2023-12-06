import FormEmbedder from "@/components/Shared/FormEmbedder.tsx";

type sectionMasInformationProps = {
  languageAccepted: string;
};

const forms: sectionMasInformationProps = {
  es: "https://my.forms.app/form/641b350c6c84801d4baf1d07",
  en: "https://my.forms.app/form/6570486a4b48a69b46aa7078"
}; 

const getFormFromLanguage = (languageAccepted: string): string => forms[languageAccepted];

const SectionMasInformacion = ({ languageAccepted}: sectionMasInformationProps) => {
  const form: string = getFormFromLanguage(languageAccepted);
  return <FormEmbedder src={form} />
};

export default SectionMasInformacion;
