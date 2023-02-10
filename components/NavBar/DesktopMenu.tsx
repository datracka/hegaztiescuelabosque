import { tw } from "twind";
import MenuItem from "@/components/NavBar/MenuItem.tsx";
import AnimatedMenuItem from "@/islands/AnimatedMenuItem.tsx";
import menu from "@/data/menu.ts";

export default function () {
  return (
    <ul role="list" className={tw`hidden sm:ml-6 sm:flex list-none space-x-4`}>
      <AnimatedMenuItem name={menu[0].name} options={menu[0].subOptions} />
      <AnimatedMenuItem name={menu[1].name} options={menu[1].subOptions} />
      <MenuItem name={menu[2].name} url={menu[2].url} />
      <MenuItem name={menu[3].name} url={menu[3].url} />
    </ul>
  );
}
