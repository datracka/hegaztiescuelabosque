import { tw } from "twind";
import MenuItem from "@/components/NavBar/MenuItem.tsx";
import AnimatedMenuItem from "@/islands/AnimatedMenuItem.tsx";
import menu from "@/data/menu.ts";
import { type menuTypeProps } from "@/data/menu.ts";

// import LanguageSelector from "@/islands/Language.tsx";

type desktopMenuProps = {
  menuTexts: any; // there is not a proper type from i18next?
};

export default function ({ menuTexts }: desktopMenuProps) {
  return (
    <>
      <ul
        role="list"
        className={tw`hidden sm:ml-6 sm:flex list-none space-x-4`}
      >
        {menu(menuTexts).map((menuOption: menuTypeProps) => (
          "subOptions" in menuOption
            ? (
              <AnimatedMenuItem
                name={menuOption.name}
                options={menuOption.subOptions}
              />
            )
            : (
              <MenuItem
                name={menuOption.name}
                url={menuOption.url}
                highlighted={menuOption.highlighted}
                target={menuOption.target}
                noFollow={menuOption.noFollow}
              />
            )
        ))}
        {/* <LanguageSelector language={language} /> */}
      </ul>
    </>
  );
}
