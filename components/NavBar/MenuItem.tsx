import { tw } from "twind";
import { JSX } from "preact/jsx-runtime";
type MenuItemProps = {
  name: string;
  url: string;
  children?: JSX.Element;
};

export default function ({ url, name, children }: MenuItemProps) {
  return (
    // add children as option
    <li role="menuitem" className={tw`${!!children && "relative"}`}>
      {children
        ? (
          <span
            className={tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white`}
          >
            {name}
            {children}
          </span>
        )
        : (
          <a
            href={url}
            className={tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white`}
            aria-current="page"
          >
            {name}
          </a>
        )}
    </li>
  );
}
