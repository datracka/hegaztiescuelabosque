import { i18n } from "@/components/i18n.ts";
import { tw } from "twind";

const LanguageSelector = function ({ language }: { language: string }) {
  return (
    <li
      role="menuitem"
      className={tw`cursor-pointer bg-[#415a30] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#516a40] hover:text-white ${"bg-indigo-500 hover:bg-indigo-600"}`}
    >
      {language === "es"
        ? (
          <button
            type="button"
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </button>
        )
        : (
          <button
            type="button"
            onClick={() => {
              i18n.changeLanguage("es");
            }}
          >
            Spanish
          </button>
        )}
    </li>
  );
};

export default LanguageSelector;
