import i18next from "https://deno.land/x/i18next@v23.7.7/index.js";
// import Backend from "https://deno.land/x/i18next_fs_backend@v2.3.0/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.5.0/index.js";
// import translationEs from "@/locales/es/translation.json" assert { type: "json" };
// import translationEn from "@/locales/en/translation.json" assert { type: "json" };
// console.log(translationEs);

const english = {
  translation: {
    hero: {
      claim: "House of the nature",
      subClaim: "",
    },
    home: {
      presentation: {
        learnInNatureHeader: "",
        learnInNatureBody: "",
      },
      callToAction: {
        text: "",
        button: "",
      },
      services: {
        header: "",
        casitaAbejorroTitle: "Madre de día, casita abejorro",
        casitaAbejorroText: "",
        casitaDelBosqueTitle: "",
        casitaDelBosqueText: "",
        nidoDePajaroTitle: "",
        nidoDePajaroText: "",
        extraescolaresLudoTecaTitle: "",
        extraescolaresLudoTecaText: "",
        extraescolaresSábadoEnFamiliaTitle: "",
        extraescolaresSábadoEnFamiliaText: "",
        button: "",
      },
      bosquecomoaula: {
        title: "",
        keys: "",
        Text: "",
      },
    },
  },
};

const spanish = {
  translation: {
    hero: {
      claim: "Creciendo en la naturaleza",
      subClaim: "HEGAZTI ESCUELA BOSQUE",
    },
    home: {
      presentation: {
        learnInNatureHeader: "Aprender en la Naturaleza",
        learnInNatureBody: `
      <p className="mb-4">
        Nuestra esencia la libertad, nuestro medio la naturaleza, el don de la
        infancia la inquietud motora y cognitiva.
      </p>
      <p className="mb-4">
        Aprender en armonía con lo que somos, seres libres y diversos, seres
        vivos, que sienten, y piensan.
      </p>
      <p className="mb-12">
          En el aula viva la Naturaleza. Donde puedes ver el cielo, tocar la
          tierra, oler las flores, sentir, moverte libremente, investigar el
          medio, observar el contexto real.
      </p>
      <p className="mb-12">
          Este aula nutre las necesidades de un ser humano, alimenta la
          curiosidad, estimula los sentidos, y permite los sentires, la conexión
          con la diversidad de cada persona.
      </p> 
      <p className="mb-12">
          Es un aula integradora, donde cada ser tiene su lugar.
      </p> 
        `,
      },
      callToAction: {
        title: "MATRÍCULAS ABIERTAS",
        button: "MÁS INFO",
      },
      services: {
        title: "SERVICIOS",
        bumbleBeeHouseTitle: "Madre de día, casita abejorro",
        bumbleBeeHouseText:
          "En la <strong>Casita Abejorro</strong>, las niñas y niños de 0 a 3 años, pueden vivenciar cada día un espacio de calma y respeto en contacto con la naturaleza. Creemos que las niñas y los niños son seres completos que necesitan un lugar seguro y amoroso en el que desarrollarse y crecer de manera sana, en contacto con la naturaleza y con sus propias necesidades.",
        forestHouseTitle: "Infantil, casita del bosque",
        forestHouseText:
          "La <strong>Casita del Bosque</strong> es un espacio natural en el que niñas y niños de 3 a 6 años, conviven a diario con los árboles, el agua, la tierra, los insectos, los animales, el cielo, el aire, el sol… todo esto les permite crecer en armonía con lo que son, en un contexto inspirador, cambiante, orgánico e integrador.",
        birdNestTitle: "Primaria, casita del árbol y nido de pájaro",
        birdNestText:
          "Es un espacio natural en el que niñas y niños de 6 a 12 años aprenden a través de la exploración y la investigación en el contexto de la naturaleza.<br/><br/>El método de aprendizaje sigue siendo vivenciado y funcional para su día a día y para el desarrollo holístico a través del medio natural.",
        extracurricularPlayRoomTitle: "Extraescolares - Ludoteca",
        extracurricularPlayRoomText:
          "Ludotecas de invierno, primavera y verano<br/><br/>Nuestra Escuela Bosque se abre a otros niños/as de 3 a 12 años que quieran compartir nuestra preciosa escuela y tener esta experiencia en contacto con la naturaleza y los animales.",
        extracurricularSaturdaysInFamilyTitle:
          "Extraescolares - Sábados en Familia",
        extracurricularSaturdaysInFamilyText:
          "Nuestra Escuela Bosque abre espacio a experiencias en la naturaleza para familias. El segundo sábado de cada mes Hegazti abre las puertas y organiza una jornada para familias en la naturaleza.",
        button: "Saber más",
      },
      forestAsClassroom: {
        title: "El bosque como aula",
        keys: "Creatividad / Descubrimiento / Experienias Vividas / Inteligencia Emocional / Juego Libre / Conciencia Ecológica / Valores Solidarios / Habilidades Cognitivas, emocionales y sociales/ Desarrollo Integral",
        text: `
        <p className="mb-4">
          Aprendizajes vivenciales en el medio natural. El bosque, por su
          naturaleza multisensorial, se convierte en la mejor aula que podemos
          ofrecer a la infancia. La variedad de recursos que ofrece es
          prácticamente ilimitada y dichos recursos son de gran valor educativo
          son funcionales, reales y vividos.
        </p>
        <p className={tw\`mb-4\`}>
          Nuestros objetivos, promover el desarrollo integral de todas las
          personas involucradas. Abrir espacio a personas resilientes, seguras
          de sí mismas, autónomas y creativas. En
          <strong>Hegazti Escuela Bosque</strong>, desarrollar la inteligencia
          emocional es igual de importante que trabajar en la resolución de
          problemas.
        </p>
        <p className={tw\`mb-12\`}>
          Las personas dirigen su aprendizaje la mayor parte del tiempo.
        </p>
        <p className={tw\`mb-12\`}>
          El rol del guía es enriquecer la experiencia, ofrecer apoyo,
          herramientas y conocimiento.
        </p>
        `,
      },
      gallery: {
        imageWalkingInTheForestTitle: "PASEOS POR EL MONTE",
        imageWalkingInTheForestDescription: "TODOS LOS DIAS",
        imageNaturalElementsTitle: "ELEMENTOS NATURALES",
        imageNaturalElementsDescription: "DESPERTANDO LA CURIOSIDAD",
        imagesBuildingTogetherTitle: "CONSTRUYENDO JUNTOS",
        imagesBuildingTogetherDescription: "TRABAJO EN EQUIPO",
        imageObservingTitle: "OBSERVACIÓN",
        imageObservingDescription: "SEGUIENDO LOS CICLOS",
        imageTakingCareHorsesTitle: "CUIDANDO DE LOS CABALLOS",
        imageTakingCareHorsesDescription: "RESPONSABILIDAD Y EMPATÍA",
        imageFreeGameTitle: "JUEGO LIBRE",
        imageFreeGameDescription: "SIGUIENDO EL IMPULSO",
      },
      quote: {
        text: "”Dímelo y lo olvido. Enseñame y lo recuerdo. Involúcrame y lo aprendo.”",
        author: "— Benjamin Franklin",
      },
    },
  },
};

i18next
  // .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    debug: false,
    initImmediate: false, // setting initImediate to false, will load the resources synchronously
    backend: {
      loadPath: "locales/{{lng}}/{{ns}}.json",
    },
    resources: {
      en: english,
      es: spanish,
    },
    fallbackLng: "en",
    preload: ["en", "es"],
  });

export default (lng: string | undefined | null) => i18next.getFixedT(lng);

export const i18n = i18next;
export const middleware = i18nextMiddleware;
export const handle = i18nextMiddleware.handle(i18next);