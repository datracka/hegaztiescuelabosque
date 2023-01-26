import { tw } from "twind";
import { JSX } from "preact/jsx-runtime";

type MenuItemProps = {
  name: string;
  url?: string;
  children?: JSX.Element;
};

export default function MenuItem({ url, name }: MenuItemProps) {
  return (
    <li
      role="menuitem"
      className={tw`bg-[#415a30] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#516a40] hover:text-white`}
    >
      <a
        href={url}
        aria-current="page"
      >
        {name}
      </a>
    </li>
  );
}
