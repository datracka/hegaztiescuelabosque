import { tw } from "twind";
import MenuItem from "@/components/NavBar/MenuItem.tsx";
import AnimatedMenuItem from "@/islands/AnimatedMenuItem.tsx";

const menuOptions = [
  { url: "aula-madre-de-dia", name: "Made de día" },
  {
    url: "aula-infantil",
    name: "Aula Infantil",
  },
  {
    url: "primaria",
    name: "Primaria",
  },
  {
    url: "extraescolares-ludoteca",
    name: "Extraescolares - Ludoteca",
  },
  {
    url: "extraescolares-sabados-en-familia",
    name: "Extraescolares - Sábados en familia",
  },
];

export default function () {
  return (
    <ul role="menu" className={tw`hidden sm:ml-6 sm:flex list-none space-x-4`}>
      <AnimatedMenuItem name="El bosque como aula" options={menuOptions} />
      <MenuItem name="Quienes somos" url="quienes-somos" />
      <MenuItem name="Mas información" url="mas-informacion" />
      <MenuItem name="Blog" url="//blog.hegaztiescuelabosque.com" />
    </ul>
  );
}
