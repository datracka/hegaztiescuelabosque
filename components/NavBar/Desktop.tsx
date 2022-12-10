import Hamburger from "@/components/NavBar/Hamburger.tsx";
import Logo from "@/components/NavBar/Logo.tsx";
import DesktopMenu from "@/components/NavBar/DesktopMenu.tsx";

export default function () {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-32 items-center justify-between">
        <Hamburger />
        <div className="flex flex-1 items-center justify-center sm:justify-start">
          <Logo />
          <DesktopMenu />
        </div>
      </div>
    </div>
  );
}
