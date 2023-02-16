import { css, tw } from "twind/css";

const SectionLearnInNature = () => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>Aprender en la Naturaleza</h2>
      </div>
      <div>
        <p className="mb-4">
          Nuestra esencia la libertad, nuestro medio la naturaleza, el don de la
          infancia la inquietud motora y cognitiva.
        </p>
        <p className={tw`mb-4`}>
          Aprender en armonía con lo que somos, seres libres y diversos, seres
          vivos, que sienten, y piensan.
        </p>
        <p className={tw`mb-12`}>
          En el aula viva la Naturaleza. Donde puedes ver el cielo, tocar la
          tierra, oler las flores, sentir, moverte libremente, investigar el
          medio, observar el contexto real.
        </p>
        <p className={tw`mb-12`}>
          Este aula nutre las necesidades de un ser humano, alimenta la
          curiosidad, estimula los sentidos, y permite los sentires, la conexión
          con la diversidad de cada persona.
        </p>
        <p className={tw`mb-12`}>
          Es un aula integradora, donde cada ser tiene su lugar.
        </p>
      </div>
    </div>
  </section>
);

export default SectionLearnInNature;
