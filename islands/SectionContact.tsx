import { css, tw } from "twind/css";
import FormEmbedder from "@/components/Shared/FormEmbedder.tsx";

const WhereAreWe = () => (
  <div className={tw`text-white sm:w-2/4`}>
    <h2 class={tw(`hegazti-h2-footer pb-4 mb-8 border-b-2`)}>
      DONDE ESTAMOS UBICADOS
    </h2>
    <p class={tw(`mb-4`)}>
      Estamos ubicados en el Paraje de Valdearas a 1 kilómetro de Viana y a 9 km
      de Logroño.
    </p>
    <img
      title="¿Donde estamos?"
      src="imgs/google-maps-location.jpg"
      class={tw`w-full mb-4`}
    />
    <p class={tw(`mb-4`)}>
      <strong className={tw`font-bold`}>Horario de Escuela Bosque:</strong>
      <br />
      De Lunes a Vierns de 9:00 a 14:00 hrs.
    </p>
    <p class={tw(`mb-4`)}>
      <strong className={tw`font-bold`}>
        Horario Ludotecas de Invierno, Primavera o Verano:
      </strong>
      <br />
      De 9:00 a 14:00 hrs.
    </p>
    <p class={tw(`mb-4`)}>
      <strong className={tw`font-bold`}>Horario Sábados en Familia:</strong>
      {" "}
      <br />
      De 10:00 a 14:00 hrs.
    </p>
  </div>
);

const ContactUs = () => (
  <div
    className={tw`flex flex-col relative overflow-hidden  sm:w-2/4 ${css`flex-basis: 50%`}`}
  >
    <h2 class={tw(`hegazti-h2-footer pb-4 mb-8 border-b-2`)}>
      CONTACTA CON NOSOTROS
    </h2>
    // test id 63d29af9597af40147d33f6f
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
