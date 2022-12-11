import { tw } from "twind";
import Desktop from "@/components/NavBar/Desktop.tsx";
import Mobile from "@/components/NavBar/Mobile.tsx";

export default function () {
  return (
    <nav className={tw`bg-gray-800`}>
      <Desktop />
      <Mobile />
    </nav>
  );
}
