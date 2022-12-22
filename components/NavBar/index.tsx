import { tw } from "twind";
import Hamburger from "@/components/NavBar/Hamburger.tsx";
import Logo from "@/components/NavBar/Logo.tsx";
import DesktopMenu from "@/components/NavBar/DesktopMenu.tsx";
import MobileMenu from "@/components/NavBar/MobileMenu.tsx";

export default function () {
  return (
    <nav className={tw`bg-gray-800`}>
      <div className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
        <div className={tw`relative flex h-32 items-center justify-between`}>
          <Hamburger />
          <div
            className={tw`flex flex-1 items-center justify-center sm:justify-start`}
          >
            <Logo />
            <DesktopMenu />
          </div>
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}
