// import Transition from "@/components/NavBar/Transtition.tsx";
import { tw } from "twind";
import { useState } from "preact/hooks";

type AnimatedMenuItemProps = {
  name: string;
  options?: {
    url: string;
    name: string;
  }[];
};

export default function AnimatedMenuItem(
  { name, options }: AnimatedMenuItemProps,
) {
  const [open, setOpen] = useState(false);
  return (
    (
      <li
        role="listitem"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={tw`bg-[#415a30] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#516a40] hover:text-white`}
      >
        {name}
        <div className={tw`relative ${!open && "hidden"}`}>
          <ul
            className={tw`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="list"
            aria-labelledby="user-menu-button"
            tabIndex={-1}
          >
            {options?.map(({ url, name }) => (
              <li role="listitem">
                <a
                  href={url}
                  className={tw`block px-4 py-2 text-sm text-gray-700`}
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    )
  );
}
