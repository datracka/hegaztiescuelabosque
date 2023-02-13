import { css, tw } from "twind/css";

const SectionForestAsClassroom = () => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>El bosque como aula</h2>
        <p>
          Creatividad / Descubrimiento / Experienias Vividas / Inteligencia
          Emocional / Juego Libre / Conciencia Ecológica / Valores Solidarios /
          Habilidades Cognitivas, emocionales y sociales/ Desarrollo Integral
        </p>
      </div>
      <div>
        <p className="mb-4">
          Aprendizajes vivenciales en el medio natural. El bosque, por su
          naturaleza multisensorial, se convierte en la mejor aula que podemos
          ofrecer a la infancia. La variedad de recursos que ofrece es
          prácticamente ilimitada y dichos recursos son de gran valor educativo
          son funcionales, reales y vividos.
        </p>
        <p className={tw`mb-4`}>
          Nuestros objetivos, promover el desarrollo integral de todas las
          personas involucradas. Abrir espacio a personas resilientes, seguras
          de sí mismas, autónomas y creativas. En{" "}
          <strong>Hegazti Escuela Bosque</strong>, desarrollar la inteligencia
          emocional es igual de importante que trabajar en la resolución de
          problemas.
        </p>
        <p className={tw`mb-12`}>
          Las personas dirigen su aprendizaje la mayor parte del tiempo.
        </p>
        <p className={tw`mb-12`}>
          El rol del guía es enriquecer la experiencia, ofrecer apoyo,
          herramientas y conocimiento.
        </p>
      </div>
    </div>
  </section>
);

export default SectionForestAsClassroom;
