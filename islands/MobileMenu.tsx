import { tw } from "twind";
import menu, { menuTypeProps } from "@/data/menu.ts";
import AnimatedMobileMenuItem from "./AnimatedMobileMenuItem.tsx";

type MobileMenuProps = {
  opened: boolean;
};

export default function ({ opened }: MobileMenuProps) {
  return (
    <div className={tw`space-y-1 px-2 pt-2 pb-3 sm:hidden`} id="mobile-menu">
      {opened && menu.map((menuOption: menuTypeProps) => (
        "subOptions" in menuOption
          ? <AnimatedMobileMenuItem menuOption={menuOption} />
          : (
            <a
              href={menuOption.url}
              className={tw`bg-[#415a30] text-white block px-3 py-2 rounded-md text-base font-medium ${
                menuOption["highlighted"] && "bg-indigo-500 hover:bg-indigo-600"
              }`}
              aria-current="page"
            >
              {menuOption.name}
            </a>
          )
      ))}
    </div>
  );
}

/*
*/
