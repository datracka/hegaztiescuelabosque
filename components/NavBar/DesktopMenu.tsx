import MenuItem from "@/components/NavBar/MenuItem.tsx";

export default function () {
  return (
    <ul className="hidden sm:ml-6 sm:flex list-none space-x-4">
      <MenuItem name="Inicio" url="#" />
      <MenuItem name="El bosque como aula" url="#">
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <a
            href="/aula-madre-de-dia"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Made de día
          </a>
          <a
            href="/aula-infantil"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Infantil
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            Primaria
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-3"
          >
            Extraescolares - Ludoteca
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-4"
          >
            Extraescolares - Sábados en familia
          </a>
        </div>
      </MenuItem>
      <MenuItem name="Quienes somos" url="#" />
      <MenuItem name="Mas información" url="#" />
      <MenuItem name="Blog" url="#" />
    </ul>
  );
}
