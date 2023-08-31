import i18next from "https://deno.land/x/i18next@v23.4.6/index.js";
import Backend from "https://deno.land/x/i18next_fs_backend@v2.1.5/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.3.2/index.js";

i18next
  // .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    resources: {
      en: {
        translation: {
          home: {
            claim: "House of the nature",
          },
        },
      },
      es: {
        translation: {
          home: {
            claim: "Aula de Naturaleza",
          },
        },
      },
    },
    fallbackLng: "en",
    preload: ["en", "es"],
  });

export default (lng: string | undefined | null) => i18next.getFixedT(lng);

export const i18n = i18next;
export const middleware = i18nextMiddleware;
export const handle = i18nextMiddleware.handle(i18next);

i18next.on("languageChanged", (currentLanguage: string) => {
  if (location !== undefined) {
    const currentURL = new URL(location.href);
    currentURL.searchParams.set("language", currentLanguage);
    console.log("languageChanged", currentLanguage);
    window.location.href = currentURL.toString();
  }
});
