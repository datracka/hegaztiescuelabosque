import i18next from "https://deno.land/x/i18next@v23.4.6/index.js";
import Backend from "https://deno.land/x/i18next_fs_backend@v2.1.5/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.3.2/index.js";

const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    preload: ["en", "es"],
  });

export default (lng: string | undefined | null) =>
  i18next.getFixedT(lng || systemLocale);

export const i18n = i18next;
export const middleware = i18nextMiddleware;
