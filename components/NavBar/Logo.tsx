import { tw } from "twind";

export default function () {
  return (
    <div className={tw`flex flex-shrink-0 items-center`}>
      <img
        className={tw`block h-24 w-auto lg:hidden`}
        src="logo.png"
        alt="Hegazti Escuela Bosque"
      />
      <img
        className={tw`hidden h-24 w-auto lg:block`}
        src="logo.png"
        alt="Hegazti Escuela Bosque"
      />
    </div>
  );
}
