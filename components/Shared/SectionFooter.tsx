import SectionContact from "@/islands/SectionContact.tsx";
import CookieBanner from "@/islands/CookieBanner.tsx";
import { css, tw } from "twind/css";

const SectionFooter = () => (
  <div className={tw(`w-full p-4 sm:p-6 lg:p-8 bg-[#415a30] text-white`)}>
    <SectionContact />
    <div className={tw`m-8 mx-auto max-w-3xl text-center`}>
      <p class={tw`my-10`}>
        Carretera de Aras nº 6, 31230, Navarra, España +34 669 575 406
        hegaztiescuelabosque@gmail.com
      </p>

      <p class={tw`my-10`}>
        <a
          class={tw`inline-block`}
          href="https://www.facebook.com/Hegazti-Escuela-Bosque-110555641506877"
          target="_blank"
        >
          Facebook
        </a>
        <a
          class={tw`inline-block`}
          href="https://www.instagram.com/hegazti_escuela_bosque/"
          target="_blank"
        >
          Intagram
        </a>
      </p>
      <p class={tw`my-10`}>
        <a
          href="/legal-politica-de-cookies"
          class={tw`block sm:inline-block px-2 mx-2`}
        >
          POLÍTICA DE COOKIES
        </a>
        <a
          href="/legal-politica-de-privacidad"
          class={tw`block sm:inline-block px-2 mx-2`}
        >
          POLÍTICA DE PRIVACIDAD
        </a>
        <a
          href="/legal-aviso-legal"
          class={tw`block sm:inline-block px-2 mx-2`}
        >
          AVISO LEGAL
        </a>
        <a href="/mas-informacion" class={tw`block sm:inline-block px-2 mx-2`}>
          CONTACTO
        </a>
      </p>
    </div>
    {/*<CookieBanner />*/}
  </div>
);
export default SectionFooter;
