import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import { Head } from "$fresh/runtime.ts";
import Faq from "@/components/WhoWeAreFaqs/Faq.tsx";
import getFixedT from "@/components/i18n.ts";
import { useContext } from "preact/hooks";
import { ContextState } from "@/routes/_app.tsx";

export default function QuienesSomosFaqs() {
  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });

  const staticPath = "/imgs/quienes-somos-faqs";
  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Quienes Somos - Preguntas frecuentes
        </title>
        <meta
          name="description"
          content="Somos una escuela bosque que ofrece un enfoque educativo basado en el contacto con la naturaleza y el aprendizaje a través de la experiencia. Nuestro horario es de lunes a viernes de 9.00 a 14.00, y los grupos tienen diferentes ratios de acompañantes por persona. Para asistir a la escuela, se recomienda usar ropa cómoda y tener botas de agua y chubasquero en caso de lluvia. Contamos con un seguro de responsabilidad civil y un seguro laboral para los acompañantes. Los alumnos/as traen su propia comida. Pasamos la mayoría del tiempo afuera, aunque se valoran las condiciones climáticas y físicas del grupo. Las visitas a la escuela se hacen con cita previa. Las normas y límites son construidos por el grupo y se enfatiza la importancia de cuidarse y cuidar a los demás. Aunque existen riesgos al jugar en el bosque, se minimizan al máximo mediante el acompañamiento y el desarrollo de habilidades en el medio."
        />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <Hero
        title="PREGUNTAS FRECUENTES"
        description="Todo lo que necesitas saber"
        backgroundImage={`${staticPath}/hero-faq.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <Faq
          question="¿Cuál es el horario?"
          img={`${staticPath}/reloj.jpeg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            El horario de la escuela es de 9.00 a 14.00 de lunes a viernes.
          </p>
        </Faq>
        <Faq
          question="¿Cuál es el ratio en cada grupo?"
          img={`${staticPath}/horario-de-cada-grupo.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            En Casita Abejorro es de 4 personas por acompañante.
          </p>
          <p className={tw("mb-4")}>
            En Casa del Bosque es de 8 personas por acompañante.
          </p>
          <p className={tw("mb-4")}>
            En Casa del Árbol y Nido de Pájaro es de 12 personas por
            acompañante.
          </p>
        </Faq>
        <Faq
          question="¿Se necesita ropa especial para ir a una escuela bosque?¿Y si llueve?"
          img={`${staticPath}/ropa-especial.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            Necesitamos ropa cómoda, zapatillas y botas de agua, chubasquero y
            tener ropa de recambio siempre para cada persona en la escuela.
          </p>
        </Faq>
        <Faq
          question="¿Hay algún seguro?"
          img={`${staticPath}/seguros.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            Hay un seguro de responsabilidad civíl que cubre a los niños/as de
            la escuela y otro recurso específico para las acompañantes que es un
            seguro laboral.
          </p>
        </Faq>
        <Faq
          question="¿Y la comida?"
          img={`${staticPath}/comida.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            El almuerzo en el caso de los/as más mayores los lleva la familia y
            la comida en el caso de los más pequeños/as igualmente lo aporta la
            familia, no hacemos servicio de comida.
          </p>
        </Faq>
        <Faq
          question="¿Cuánto tiempo están afuera? ¿y en invierno?"
          img={`${staticPath}/tiempo-afuera.jpg`}
        >
          <p className={tw("mb-4")}>
            El tiempo de estar afuera depende de la edad, los más pequeños
            Casita Abejorro salen al exterior cuando el tiempo lo permite.
          </p>
          <p className={tw("mb-4")}>
            En Casa del Bosque salen al exterior a pesar del clima, aunque
            siempre se valoran las condiciones, pueden llegar a pasar en el
            exterior entre un 60% y un 75 % de la jornada.
          </p>
          <p className={tw("mb-4")}>
            En Casa del Árbol salen al exterior a pesar del clima, igualmente se
            valoran las condiciones en este caso pasan en el exterior un 60% de
            la jornada.
          </p>
          <p className={tw("mb-4")}>
            En Nido de Pájaro, salen al exterior a pesar del clima, igualmente
            se valoran las condiciones y simpre hay propuestas en el interior, y
            el tiempo de estar fuera es variable, depende del proyecto pero
            están aproximadamente un 50% de la jornada en el exterio.
          </p>
          <p className={tw("mb-4")}>
            Salimos fuera en todas las estaciones, siempre con la ropa adecuada,
            y con las condiciones de grupo óptimas, se tiene en cuenta
            circunstancias como una lluvia copiosa, o como el estado físico del
            grupo. El medio es un recurso, no un castigo, si se valora que no es
            oportuno hay opciones de trabajar en la Yurta.
          </p>
        </Faq>
        <Faq
          question="¿Se puede hacer una visita a la escuela para conocerla?"
          img={`${staticPath}/visita-a-la-escuela.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            Se puede visitar la escuela siempre con cita y contacto previo.
          </p>
        </Faq>
        <Faq
          question="¿Qué normas y límites hay en la escuela bosque?"
          img={`${staticPath}/normas-y-limites.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            Las normas las construye el grupo, una norma clara de la escuela es
            cuidarse y cuidar. Hay otras normas del espacio que se delimitan
            claramente para conservar la seguridad de las personas. Hay límites
            naturales y consecuencias naturales.
          </p>
        </Faq>

        <Faq
          question="¿No es peligroso que los niños jueguen en el bosque?"
          img={`${staticPath}/peligroso.jpg`}
          answer=""
        >
          <p className={tw("mb-4")}>
            En el bosque puede haber riesgos sin embargo a medida que tiene
            contacto con él, experiencias y comprenden los límites y desarrollan
            las habilidades en el medio, los riesgos descienden y el
            acompañamiento en este caso es esencial. Todos los riesgos no
            desaparecen, pero se minimizan al máximo.
          </p>
        </Faq>
      </section>
      <section
        className={tw(
          `mx-auto max-w-xl text-center px-2 sm:px-6 lg:px-8 pt-8 pb-16`,
        )}
      >
        <h3 className={tw("text-2xl mb-4")}>
          ¿Tienes alguna otra pregunta o consulta?
        </h3>
        <p className={tw("mb-4")}>
          No dudes en ponerte en contacto con nosotros que estaremos encantados
          de ayudarte.
        </p>
        <a
          href="mas-informacion"
          className={tw(
            "inline-block my-6 py-4 px-8 bg-[#415a30] text-white hover:bg-[#416a40]",
          )}
        >
          TENGO UNA PREGUNTA
        </a>
      </section>
      <SectionFooter />
    </>
  );
}
