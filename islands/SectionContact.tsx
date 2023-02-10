import { css, tw } from "twind/css";
import FromEmbedder from "@/components/Shared/FormEmbedder.tsx";

const WhereAreWe = () => (
  <div className={tw`text-white`}>
    <h2 class={tw(`text-4xl pb-4 mb-8 border-b-2`)}>DONDE ESTAMOS UBICADOS</h2>
    <p class={tw(`mb-4`)}>
      Estamos ubicados en el Paraje de Valdearas a 1 kilómetro de Viana y a 9 km
      de Logroño.
    </p>
    <img src="imgs/google-maps-location.jpg" class={tw`w-full mb-4`} />
    <p class={tw(`mb-4`)}>
      Horario de Escuela Bosque:<br />
      De Lunes a Vierns de 9:00 a 14:00 hrs.
    </p>
    <p class={tw(`mb-4`)}>
      Horario Ludotecas de Invierno, Primavera o Verano:<br />
      De 9:00 a 14:00 hrs.
    </p>
    <p class={tw(`mb-4`)}>
      Horario Sábados en Familia: <br />
      De 10:00 a 14:00 hrs.
    </p>
  </div>
);

const ContactUs = () => (
  <div className={tw`text-white`}>
    <h2 class={tw(`text-4xl pb-4 mb-8 border-b-2`)}>CONTACTA CON NOSOTROS</h2>
    <p>
    </p>
  </div>
);

/* const SectionContact = () => (
  <div className={tw`flex flex-col sm:flex-row mx-auto max-w-7xl gap-8 `}>
    <WhereAreWe />
    <ContactUs />
  </div>
); */

const SectionContact = () => {
  return (
    <div
      className={tw`flex flex-col justify-between sm:flex-row mx-auto max-w-7xl gap-8 `}
    >
      <div
        className={tw`flex relative overflow-hidden bg-pink-200 ${css`flex-basis: 50%`}`}
      >
        <h2 class={tw(`text-4xl pb-4 mb-8 border-b-2`)}>
          DONDE ESTAMOS UBICADOS
        </h2>
      </div>
      <div
        className={tw`flex flex-col relative overflow-hidden bg-blue-100 ${css`flex-basis: 50%`}`}
      >
        <h2 class={tw(`text-4xl pb-4 mb-8 border-b-2`)}>
          CONTACTA CON NOSOTROS
        </h2>
        <FromEmbedder src="https://my.forms.app/form/63d29af9597af40147d33f6f" />
      </div>
    </div>
  );
};

export default SectionContact;

/*


<p class={tw(`mb-4`)}>
      Escríbenos al : hegaztiescuelabosque@gmail.com
    </p>
    <p class={tw(`mb-4`)}>
      o llámanos al 603 314 550
    </p>
    <p class={tw(`mb-4`)}>
      <a
        href="https://www.instagram.com/hegazti_escuela_bosque/"
        target="_blank"
      >
        Síguenos en Instagram Hegazti Escuela Bosque
      </a>
    </p>

    <iframe
        tittle="Formulario de contacto"
        id="Form1"
        allowtransparency="true"
        allowfullscreen="true"
        allow="geolocation; microphone; camera"
        src="https://my.forms.app/form/63d29af9597af40147d33f6f"
        frameborder="0"
      >
      </iframe>

*/
