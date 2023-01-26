import { css, tw } from "twind/css";

const SectionExtracurricular = () => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col text-lg sm:flex-row gap-4`}>
      <div>
        <h3 class={tw`text-3xl`}>Extraescolares</h3>
      </div>
      <div>
        <a href="#" class={tw`block text-red-700 font-bold underline mb-4`}>
          Ludotecas de Invierno, Primavera y Verano.
        </a>
        <p className="mb-4">
          En las ludotecas de Hegazti, podrás Vivir……..el Contacto con la
          naturaleza, paseos de exploración, construir cabañas en el bosque,
          hacer vínculo la madada de Yeguas y caballo, cuidar de los animales de
          la Granja, Pastorear las cabras, Juegar al Aire Libre, hacer barro,
          pintar con pigmentos naturales, cocinar, investigar huellas o
          madrigueras, jugar en el río…y muchas cosas más!!!
        </p>
        <p className={tw`mb-4`}>
          Cuando se acerquen las fecha recuerda contactar para reservar tu
          plaza!!
        </p>
        <a href="#" class={tw`block text-red-700 font-bold underline my-4`}>
          Sábados en Familia.
        </a>
        <p className="mb-4">
          El segundo sábado de cada mes, en Hegazti abrimos las puertas a otras
          familias, y realizamos diversidzd de actividades, juego en familia en
          la naturaleza, cuentos creados, espacio de observación y vínculo con
          las yeguas, camino al bosque a hacer cabañas, danza en familia,
          chocolatada y bizcochada de Hegazti…y siempre alguna sorpresa más.
        </p>
        <p className={tw`mb-4`}>
          Si quieres venir a disfrutar a Hegazti recuerda hacer tu reserva!!!
        </p>
      </div>
    </div>
  </section>
);

export default SectionExtracurricular;
