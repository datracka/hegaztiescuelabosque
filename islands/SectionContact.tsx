import { css, tw } from "twind/css";
import FormEmbedder from "@/components/Shared/FormEmbedder.tsx";

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
  <div
    className={tw`flex flex-col relative overflow-hidden ${css`flex-basis: 50%`}`}
  >
    <h2 class={tw(`text-4xl pb-4 mb-8 border-b-2`)}>
      CONTACTA CON NOSOTROS
    </h2>
    <FormEmbedder src="https://my.forms.app/form/63e634616c5c2579e224d0e7" />
  </div>
);

const SectionContact = () => {
  return (
    <div
      className={tw`flex flex-col justify-between sm:flex-row mx-auto max-w-7xl gap-8 `}
    >
      <WhereAreWe />
      <ContactUs />
    </div>
  );
};

export default SectionContact;
