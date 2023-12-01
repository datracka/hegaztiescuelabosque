import { tw } from "twind";
import menu, { menuTypeProps } from "@/data/menu.ts";
import AnimatedMobileMenuItem from "./AnimatedMobileMenuItem.tsx";
import LanguageSelector from "@/islands/Language.tsx";

type MobileMenuProps = {
  opened: boolean;
  language: string;
};

export default function ({ opened, language }: MobileMenuProps) {
  return (
    <div className={tw`space-y-1 px-2 pt-2 pb-3 sm:hidden`} id="mobile-menu">
      {opened && menu().map((menuOption: menuTypeProps) => {
        return (
          <ul>
            {"subOptions" in menuOption
              ? <AnimatedMobileMenuItem menuOption={menuOption} />
              : (
                <li>
                  <a
                    href={menuOption.url}
                    className={tw`bg-[#415a30] text-white block px-3 py-2 rounded-md text-base font-medium ${
                      menuOption["highlighted"] &&
                      "bg-indigo-500 hover:bg-indigo-600"
                    }`}
                    aria-current="page"
                  >
                    {menuOption.name}
                  </a>
                </li>
              )}
            {/* <LanguageSelector language={language} /> */}
          </ul>
        );
      })}
    </div>
  );
}

/*
*/
