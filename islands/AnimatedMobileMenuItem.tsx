import { tw } from "twind";
import { useState } from "preact/hooks";
import { menuType } from "@/data/menu.ts";

type AnimatedMobileMenuItemProps = {
  menuOption: menuType;
};

export default function AnimatedMobileMenuItem(
  { menuOption }: AnimatedMobileMenuItemProps,
) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={tw`bg-[#415a30] text-white block px-3 py-2 rounded-md text-base font-medium`}
      onClick={() => setOpen(!open)}
    >
      {menuOption.name}
      <ul
        role="list"
        aria-labelledby="user-menu-button"
        className={tw`${!open && "hidden"}`}
        tabIndex={-1}
      >
        {menuOption.subOptions?.map(({ url, name }) => (
          <li role="listitem">
            <a
              href={url}
              className={tw`block px-4 py-2 text-sm text-white`}
              tabIndex={-1}
              id="user-menu-item-0"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
