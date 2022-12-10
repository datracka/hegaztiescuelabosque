import { JSX } from "preact/jsx-runtime";

type MenuItemProps = {
  name: string;
  url: string;
  children?: JSX.Element;
};

export default function ({ url, name, children }: MenuItemProps) {
  return (
    // add children as option
    <li>
      {children
        ? (
          <span className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
            {name}
            {children}
          </span>
        )
        : (
          <a
            href={url}
            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            {name}
          </a>
        )}
    </li>
  );
}
