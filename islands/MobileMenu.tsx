import { tw } from "twind";
import menu from "@/data/menu.ts";

type MobileMenuProps = {
  opened: boolean;
};

export default function ({ opened }: MobileMenuProps) {
  return (
    <div className={tw`space-y-1 px-2 pt-2 pb-3 sm:hidden`} id="mobile-menu">
      {opened && menu.map((menuOption) => (
        <a
          href={menuOption.url}
          className={tw`bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}
          aria-current="page"
        >
          {menuOption.name}
        </a>
      ))}
    </div>
  );
}

/*
*/