import { tw } from "twind";
import MenuItem from "@/components/NavBar/MenuItem.tsx";

export default function () {
  return (
    <ul role="menu" className={tw`hidden sm:ml-6 sm:flex list-none space-x-4`}>
      <MenuItem name="El bosque como aula" url="#">
        <ul
          className={tw`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <li role="menuitem">
            <a
              href="/aula-madre-de-dia"
              className={tw`block px-4 py-2 text-sm text-gray-700`}
              tabIndex={-1}
              id="user-menu-item-0"
            >
              Made de día
            </a>
          </li>
          <li role="menuitem">
            <a
              href="/aula-infantil"
              className={tw`block px-4 py-2 text-sm text-gray-700`}
              tabIndex={-1}
              id="user-menu-item-1"
            >
              Infantil
            </a>
          </li>
          <li role="menuitem">
            <a
              href="#"
              className={tw`block px-4 py-2 text-sm text-gray-700`}
              tabIndex={-1}
              id="user-menu-item-2"
            >
              Primaria
            </a>
          </li>
          <li role="menuitem">
            <a
              href="#"
              className={tw`block px-4 py-2 text-sm text-gray-700`}
              tabIndex={-1}
              id="user-menu-item-3"
            >
              Extraescolares - Ludoteca
            </a>
          </li>
          <li role="menuitem">
            <a
              href="#"
              className={tw`block px-4 py-2 text-sm text-gray-700`}
              tabIndex={-1}
              id="user-menu-item-4"
            >
              Extraescolares - Sábados en familia
            </a>
          </li>
        </ul>
      </MenuItem>
      <MenuItem name="Quienes somos" url="#" />
      <MenuItem name="Mas información" url="#" />
      <MenuItem name="Blog" url="#" />
    </ul>
  );
}
