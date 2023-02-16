import { tw } from "twind";
import Hamburger from "@/islands/Hamburger.tsx";
import Logo from "@/components/NavBar/Logo.tsx";
import DesktopMenu from "@/components/NavBar/DesktopMenu.tsx";
import MobileMenu from "@/islands/MobileMenu.tsx";
import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export default function (): JSX.Element {
  const [opened, setOpen] = useState(false);
  const onClickHandler: () => void = (): void => setOpen(!opened);

  return (
    <nav className={tw`bg-[#415a30]`}>
      <div className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
        <div className={tw`relative flex h-32 items-center justify-between`}>
          <Hamburger onClick={onClickHandler} />
          <div
            className={tw`flex flex-1 items-center justify-center sm:justify-start`}
          >
            <Logo />
            <DesktopMenu />
          </div>
        </div>
      </div>
      <MobileMenu opened={opened} />
    </nav>
  );
}
