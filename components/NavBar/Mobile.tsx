import { tw } from "twind";

export default function () {
  return (
    <div className={tw`sm:hidden`} id="mobile-menu">
      <div className={tw`space-y-1 px-2 pt-2 pb-3`}>
        <a
          href="#"
          className={tw`bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}
          aria-current="page"
        >
          Dashboard2
        </a>
        <a
          href="#"
          className={tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
        >
          Team
        </a>
        <a
          href="#"
          className={tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
        >
          Projects
        </a>
        <a
          href="#"
          className={tw`text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
        >
          Calendar
        </a>
      </div>
    </div>
  );
}
