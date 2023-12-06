import i18next from "https://deno.land/x/i18next@v23.7.7/index.js";
// import Backend from "https://deno.land/x/i18next_fs_backend@v2.3.0/index.js";
import i18nextMiddleware from "https://deno.land/x/i18next_http_middleware@v3.5.0/index.js";
// import translationEs from "@/locales/es/translation.json" assert { type: "json" };
// import translationEn from "@/locales/en/translation.json" assert { type: "json" };
// console.log(translationEs);

export type language = {
  language: string;
};

const english = {
  translation: {
    hero: {
      claim: "Growing up in nature.",
      subClaim: "HEGAZTI FOREST SCHOOL",
    },
    home: {
      header: {
        title: "Hegazti Forest School",
        meta: {
          description: {
            content:
              "Hegazti Forest School is a school that offers an educational approach based on nature-based learning and environmental connection. We provide a variety of services, including Bumblebee, Forest, Treehouse, and Bird's Nest cottages for children aged 0 to 12. We also offer extracurricular activities such as winter, spring, and summer playrooms, as well as Family Saturdays. In our school, learning is a holistic process that is functionally experienced and integrated into everyday life. Our goals are to promote the comprehensive development of all individuals involved and to cultivate emotional intelligence alongside problem-solving skills. In our living classroom, children can explore, investigate, and learn in direct contact with nature, while our guides provide support and tools to enrich their experience.",
          },
        },
      },
      presentation: {
        learnInNatureHeader: "Learning in Nature.",
        learnInNatureBody: `
      <p className="mb-4">
        Our essence is freedom, our environment is nature, and the gift of childhood is motor and cognitive curiosity.
      </p>
      <p className="mb-4">
        Learning in harmony with what we are—free and diverse beings, living beings who feel and think.
      </p>
      <p className="mb-12">
        In the classroom, nature lives. Where you can see the sky, touch the earth, smell the flowers, feel, move freely, investigate the environment, and observe the real context.
      </p>
      <p className="mb-12">
        This classroom nurtures the needs of a human being, feeds curiosity, stimulates the senses, and allows feelings, connection with the diversity of each person.
      </p>
      <p className="mb-12">
        It is an inclusive classroom, where each being has its place.
      </p>
        `,
      },
      callToAction: {
        title: "ENROLLMENT OPEN",
        button: "MORE INFO",
      },
      services: {
        title: "SERVICES",
        bumbleBeeHouseTitle: "Daytime mother, little bumblebee house",
        bumbleBeeHouseText:
          "<p><strong>In the <span>Casita Abejorro</span>,</strong> girls and boys from 0 to 3 years old can experience a daily space of calm and respect in contact with nature. We believe that girls and boys are complete beings who need a safe and loving place to develop and grow in a healthy way, in connection with nature and their own needs.</p>",
        forestHouseTitle: "Childhood, little forest house",
        forestHouseText:
          "<p><strong>In the <span>Casita del Bosque</span>,</strong> girls and boys from 3 to 6 years old coexist daily with trees, water, earth, insects, animals, sky, air, sun... all of this allows them to grow in harmony with who they are, in an inspiring, changing, organic, and inclusive context.</p>",
        birdNestTitle: "Primary, treehouse, and bird's nest",
        birdNestText: `
        It is a natural space where girls and boys from 6 to 12 years old learn through exploration and investigation in the context of nature.
        <br/>
        <br/>
        The learning method continues to be experienced and functional for their daily lives and for holistic development through the natural environment.
        `,
        extracurricularPlayRoomTitle: "Extra-curricular Activities - Playroom",
        extracurricularPlayRoomText:
          "Ludotecas de invierno, primavera y verano<br/><br/>Nuestra Escuela Bosque se abre a otros niños/as de 3 a 12 años que quieran compartir nuestra preciosa escuela y tener esta experiencia en contacto con la naturaleza y los animales.",
        extracurricularSaturdaysInFamilyTitle:
          "EXTRA-CURRICULAR - SATURDAYS WITH FAMILY",
        extracurricularSaturdaysInFamilyText:
          "Our Forest School opens space for experiences in nature for families. On the second Saturday of each month, Hegazti opens its doors and organizes a day for families in nature.",
        button: "To know more",
      },
      forestAsClassroom: {
        title: "The forest as a classroom",
        keys: `
        Creativity / Discovery / Lived Experiences / Emotional Intelligence / Free Play / Ecological Awareness / Solidarity Values / Cognitive, Emotional, and Social Skills / Comprehensive Development
        `,
        text: `
        <p className="mb-4">
          Experiential learning in the natural environment. The forest, due to its multisensory nature, becomes the best classroom we can offer to childhood. The variety of resources it provides is practically unlimited, and these resources are of great educational value as they are functional, real, and lived.
        </p>
        <p className="mb-4">
          Our goals are to promote the comprehensive development of all individuals involved. We aim to create space for resilient, self-assured, autonomous, and creative individuals. At <strong>Hegazti Forest School</strong>, developing emotional intelligence is just as important as working on problem-solving.
        </p>
        <p className="mb-12">
          Individuals direct their learning most of the time.
        </p>
        <p className="mb-12">
          The guide's role is to enrich the experience, provide support, tools, and knowledge.
        </p>
        `,
      },
      gallery: {
        imageWalkingInTheForestTitle: "HIKES IN THE MOUNTAINS",
        imageWalkingInTheForestDescription: "EVERY DAY",
        imageNaturalElementsTitle: "NATURAL ELEMENTS",
        imageNaturalElementsDescription: "AWAKENING CURIOSITY",
        imagesBuildingTogetherTitle: "BUILDING TOGETHER",
        imagesBuildingTogetherDescription: "TEAMWORK",
        imageObservingTitle: "OBSERVATION",
        imageObservingDescription: "FOLLOWING CYCLES",
        imageTakingCareHorsesTitle: "TAKING CARE OF HORSES",
        imageTakingCareHorsesDescription: "RESPONSIBILITY AND EMPATHY",
        imageFreeGameTitle: "FREE PLAY",
        imageFreeGameDescription: "FOLLOWING IMPULSE",
      },
      quote: {
        text: "”Tell me, and I forget. Teach me, and I remember. Involve me, and I learn.”",
        author: "— Benjamin Franklin",
      },
    },
    menu: {
      forestAsClassroom: {
        main: "The forest as a classroom",
        daytimeMother: "Madre de Daytime mother",
        childhoodClass: "Preschool Classroom",
        primarySchool: "Primary School",
        extracurricularActivitiesPlayRoom: "Extracurriculars - Playroom",
        extracurricularActivitiesSaturdays:
          "Extracurriculars - Family Saturday",
      },
      whoWeAre: {
        main: "Who we are",
        project: "Project",
        natureSpaces: "Nature and Spaces",
        aDayInHegazti: "A day at Hegazti",
        faqs: "Frequently Asked Questions",
      },
      contact: "Contact",
      blog: "Blog",
      scholarCalendar: "School Calendar 23/24",
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
      header: {
        title: "Hegazti Escuela Bosque",
        meta: {
          description: {
            content:
              "Hegazti Escuela Bosque es una escuela que ofrece un enfoque educativo basado en el aprendizaje en la naturaleza y la conexión con el medio ambiente. Ofrecemos una variedad de servicios que incluyen Casitas Abejorro, del Bosque, del Árbol y Nido de Pájaro para niños y niñas de 0 a 12 años. También ofrecemos actividades extracurriculares como ludotecas de invierno, primavera y verano, y sábados en familia. En nuestra escuela, el aprendizaje es un proceso holístico que se vive de manera funcional y se integra en la vida cotidiana. Nuestros objetivos son promover el desarrollo integral de todas las personas involucradas y desarrollar la inteligencia emocional junto con la resolución de problemas. En nuestro aula viva, los niños pueden explorar, investigar y aprender en contacto directo con la naturaleza, mientras nuestros guías les brindan apoyo y herramientas para enriquecer su experiencia.",
          },
        },
      },
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
    moreInformation: {
      title: "VEN A CONOCERNOS",
    },
    menu: {
      forestAsClassroom: {
        main: "El bosque como aula",
        daytimeMother: "Madre de día",
        childhoodClass: "Infantil",
        primarySchool: "Primaria",
        extracurricularActivitiesPlayRoom: "Extraescolares - Ludoteca",
        extracurricularActivitiesSaturdays:
          "Extraescolares - Sábados en familia",
      },
      whoWeAre: {
        main: "Quiénes somos",
        project: "Proyecto",
        natureSpaces: "Naturaleza y espacios",
        aDayInHegazti: "Un día en Hegazti",
        faqs: "Preguntas frecuentes",
      },
      contact: "Contacto",
      blog: "Blog",
      scholarCalendar: "Calendario escolar",
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
