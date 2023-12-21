import { tw } from "twind";
import { JSX } from "preact/jsx-runtime";

type MenuItemProps = {
  name: string;
  url?: string;
  target?: string;
  children?: JSX.Element;
  highlighted?: boolean;
};

export default function MenuItem(
  { url, name, highlighted, target }: MenuItemProps,
) {
  const handleClick = (e: Event) => {
    e.preventDefault();
    const currentURL: URL = new URL(location.href);
    const finalUrl = currentURL.searchParams.get("language") != null
      ? `${currentURL.origin}/${url}?language=${
        currentURL.searchParams.get("language")
      }`
      : `${currentURL.origin}/${url}`;
    location.assign(finalUrl);
  };

  return (
    <li
      role="menuitem"
      className={tw`bg-[#415a30] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#516a40] hover:text-white ${
        highlighted && "bg-indigo-500 hover:bg-indigo-600"
      }`}
    >
      <a
        href="#"
        target={target}
        aria-current="page"
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
}
