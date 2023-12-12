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
    menu: {
      forestAsClassroom: {
        main: "The forest as a classroom",
        daytimeMother: "Daytime mother",
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
      extracurricularActivities: "Extracurriculars",
      contact: "Contact",
      blog: "Blog",
      scholarCalendar: "School Calendar 23/24",
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
      hero: {
        claim: "Growing up in nature.",
        subClaim: "HEGAZTI FOREST SCHOOL",
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
    moreInformation: {
      header: {
        title: "Hegazti Forest School | More Information",
        meta: {
          description: {
            content: "Form to request for more information",
          },
        },
      },
      title: "COME AND MEET US",
    },
    daytimeMother: {
      header: {
        title: "Hegazti Forest School | Classroom - Day Mother",
        meta: {
          description: {
            content:
              "La Casita Abejorro is a childcare center for children aged 0 to 3 years old, providing a calm and respectful environment in contact with nature. It focuses on free movement and respectful companionship to create a secure bond between the little ones and the accompanying person. The yurt is the warm and familial setting where experiences of love, trust, and simplicity are fostered to allow children to be themselves. The center is led by Leti, a mother of two, who joins the project with the enthusiasm to contribute her life experience in respectful companionship with the little ones.",
          },
        },
      },
      hero: {
        claim: "DAYTIME MOTHER",
        subClaim: "CASITA ABEJORRO",
      },
      imgPlayingTogetherTitle: "Casita Abejorro, playing together",
      imgCouriosGirl: "Casita Abejorro, curious girl",
      imgLogo: "Casita Abejorro, logo",
      descriptionText1: `
      At Casita Abejorro, children aged 18 months to 3 years can experience a daily space of calm and respect in contact with nature. We believe that children are complete beings who need a safe and loving place to develop and grow in a healthy way, in connection with nature and their own needs.
      `,
      descriptionText2: `
      WE CREATE EXPERIENCES FOR THEM TO DISCOVER THE WORLD IN AN
      INTEGRATED WAY, BASED ON THEIR NEEDS AND PACE
      `,
      descriptionText3: `
      We rely on the principles of free movement and respectful companionship to establish a secure bond between the little ones and the person accompanying them. Through contact with natural materials, songs, and stories, we create life experiences in which children discover the world in an integrated way, based on their needs and at their own pace.
        `,
      yurta: {
        title: "THE YURT",
        text: `
        The yurt at Casita Abejorro is a warm and familial environment where experiences of love, trust, and simplicity are generated, fostering that children can 'be.' Focusing on the children, we provide space and time for them to unfold 'their flight' in life, organically and naturally..
        `,
        imgTitle: "The Yurt",
      },
      companion: {
        title: "COMPANION",
        text: `
        My name is Leti, I am a mother of two children, and the magic of life has brought me to Walking with Horses. I share with Hegazti Forest School the vision of a respected childhood developing at its own calm pace in nature. I join the project with the excitement of contributing my life experience in respectful companionship with the creatures around us.
        `,
        imgTitle: "Casita Abejorro, mother and children",
      },
      saying:
        "It is proven that bumblebees shouldn't be able to fly due to their weight, size, and body, only they don't know it.",
      imageGridGirlDrawingAlt: "Free Movement Quote",
      imageGridFreeMovementAlt: "Free Movement Quote",
      imageGridPlayingWithAnimalsAlt: "Playing with Animals",
      imageGridTrustAlt: "Trust Quote",
      imageGridCareAlt: "Care Quote",
      imgGridForestAlt: "Forest",
      imgGridCousinessAlt: "Warmth Quote",
      imgGridPlaying: "Children Playing",
      imgGridHorsesAlt: "Horses and Children",
      imgGridSlowTempoAlt: "Calm Pace Quote",
      imgGridSnakeAlt: "Shell Quote",
      imgGridCareAlt: "Child and Care",
      imgGridCompanionAlt: "Companionship Quote",
      imgGridMotherAlt: "Mother and child embraced",
      imgGridNatureAlt: "Nature Quote",
      imgGridAnimalsAlt: "Children and Animals",
    },
    preschoolClassroom: {
      header: {
        title: "Hegazti Forest School | Classroom - Preschool",
        meta: {
          description: {
            content: `
              La Casita del Bosque (The Forest Little House) is a natural space designed for children aged 3 to 6, where they can learn by living, touching, and exploring their natural environment. The goal is to grow in harmony with nature and develop motor and emotional skills. Priority is given to the individual, their preferences, interests, states, and feelings.",
              `,
          },
        },
      },
      hero: {
        claim: "PRESCHOOL",
        subClaim: "CASITA DEL BOSQUE",
      },
      introImage1: "Children playing in the little house",
      introImage2: "Girl playing with water",
      introText1: `
      The Forest Little House is a natural space where girls and boys, aged 3 to 6, live daily with trees, water, earth, insects, animals, sky, air, sun... all of this allows them to grow in harmony with who they are, in an inspiring, changing, organic, and inclusive context.
        `,
      introText2: `
      Learning by living, touching, exploring allows integrating any type of learning. Interacting with a living environment generates curiosity, interest in the context. This leads to questions that lead to investigating on all planes of knowledge.  
      `,
      introText3: `
      We give a central space to the individual, to their preferences, interests, states, and feelings. Likewise, the times, circumstances, needs, and choices of each one are respected.
        `,
      introBullet: `
      "GIVING SPACE TO MOTOR NEEDS IN CHILDHOOD IS OPENING THE DOOR TO PSYCHOLOGICAL WELL-BEING AND EMOTIONAL BALANCE.
      `,
      introText4: `
      At this stage, motor development is essential; we open the possibility for individuals to take on motor challenges, experience challenges, and achieve conquests.
      `,
      introText5: `
      Emotional management is another focus of support. That's why special importance is given at Hegazti to respecting the individual's space to process what they feel or experience.
          `,
      saying:
        "Look deep into nature, and then you will understand everything better.",
      imageGrid: {
        horses: "Girls caressing horses",
        kidHand: "Hand with a lizard",
        yurta: " Yurt",
        cooking: "Making cakes together",
        forest: "Playing in the river",
        walk: "Walking through the field",
        clay: "Making clay figures",
        playingInYurta: "Playing in the yurt",
      },
    },
    primarySchool: {
      header: {
        title: "Hegazti Forest School | Classroom - Primary",
        meta: {
          description: {
            content:
              "The Tree House and Bird's Nest is a natural space where primary school children can experience and learn through contact with nature. The focus is on experiential learning and motor development, considered essential at this stage of life. Attention is also given to emotional management, and each child's personal space is respected so they can process their own feelings.",
          },
        },
      },
      hero: {
        claim: "PRIMARY",
        subClaim: "Tree House & Bird's Nest",
      },
      introImage1: "Little girl picking flowers",
      introImage3: "hildren playing in a little house",
      introImage2: "Children learning and reading",
      introText1: `
      Hegazti Forest Primary School is a natural space where girls and boys aged 6 to 12 learn through exploration and investigation in the context of nature.
      `,
      introText2: `
      There are two age groups from 6 to 9 years in the Tree House and from 9 to 12 years in the Bird's Nest.
      `,
      introText3: `
      The learning method remains experiential and functional for their day-to-day life and for holistic development through the natural environment.
      `,
      introText4: `
      The learnings are not separated by knowledge areas but integrated organically.
      `,
      introText5: `
      Knowledge stems from its own process of learning what interests them.
      `,
      introBullet: `
      THE PURPOSE OF EDUCATION IS NOT TO TEACH BUT TO LET THEM LEARN FROM THEIR OWN EXPERIENCE, WHAT INTERESTS THEM.
      `,
      introText6: `
      Education is something admirable, but it is good to remember from time to time that nothing worth knowing can be taught. - Oscar Wilde.
      `,
      introText7: `
      The learning process unfolds through research and lived experience.
      `,
      introText8: `
      The levels of concretization of what is learned materialize in structures, created books, field notebooks, or functional projects for themselves and the environment.
      `,
      introText9: `
      Learning is integrated into school tasks progressively.
      `,
      introText10: `
      In addition, at Hegazti, at this age, daily tasks are integrated into the context. Such as caring for animals, working in the garden, creating health care products, and maintaining their natural environment and that of the school.
      `,
      saying:
        "Children are not things to be molded, but individuals to be unfolded.",
      grid: {
        yurta: "Yurt",
        kidReading: "Girl reading",
        shells: "Heart of stones",
        horses: "Grazing horses",
        hands: "Hands full of mud",
        goats: "Little goats",
        kids: "Space to play",
        vocals: "Vowels",
      },
    },
    extracurricularPlayroom: {
      header: {
        title: "Hegazti Forest School | Extracurricular Activities - Playgroup",
        meta: {
          description: {
            content:
              "The Forest School offers extracurricular activities for children aged 3 to 12 in contact with nature and animals. They provide a playgroup and playgroups during winter, spring, and summer, from 9:00 AM to 2:00 PM. Interested individuals are invited to make their reservations in advance.",
          },
        },
      },
      hero: {
        claim: "PLAYGROUP",
        subClaim: "Playgroup for children aged 3 to 12.",
      },
      title: "WINTER, SPRING, AND SUMMER PLAYGROUPS",
      subTitle: "EXPERIENCING NATURE",
      imgTitle: "Adult accompanying a child in nature",
      text1: `
      Our Forest School welcomes other children aged 3 to 12 who
      wish to share our beautiful school and have this experience
      in contact with nature and animals.
      `,
      text2: "The proposed schedule is from 16:00 to 18:30 PM.",
      text3: `
      And we encourage you to contact us when the dates approach
      to make your reservation.
      `,
      text4: `
      We're giving you a sneak peek of some of the activities we carry out
      during these sessions to provide you with a bit more information.
      `,
      button: "MORE INFORMATION",
    },
    extracurricularSaturdaysInFamily: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      title: "",
    },
    project: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      title: "",
    },
    natureSpaces: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      title: "",
    },
    aDayInHegazti: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      title: "",
    },
    faqs: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      title: "",
    },
    footer: {
      whereAreWe: "WHERE WE ARE LOCATED",
      whereAreWeExtended:
        "We are located in the Valdearas area, 1 kilometer from Viana and 9 km from Logroño.",
      timeTableTitle: "Forest School Schedule:",
      timeTableText: "Monday to Friday from 9:00 AM to 2:00 PM.",
      timeTableTextSummerTitle:
        "Winter, Spring, or Summer Toy Library Schedule:",
      timeTableTextSummerText: "From 9:00 AM to 2:00 PM.",
      timeTableTextSaturdayTitle: "Family Saturdays Schedule:",
      timeTableTextSaturdayText: "From 10:00 AM to 2:00 PM.",
      address: `
      Carretera de Aras nº 6, 31230, Navarra Educational Contact: 697 24 57 75
      (Naroa) / Collaboration Opportunities: 635 57 53 61 (Vicens)
      info@hegaztiescuelabosque.org
      `,
      cookiePolicyText: "Cookie Policy",
      privacyPolicyText: "Privacy Policy",
      legalText: "Legal Notice",
      contact: "Contact",
      contactWithUs: "CONTACT WITH US",
    },
  },
};

const spanish = {
  translation: {
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
      extracurricularActivities: "Extraescolares",
      blog: "Blog",
      scholarCalendar: "Calendario escolar",
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
      hero: {
        claim: "Creciendo en la naturaleza",
        subClaim: "HEGAZTI ESCUELA BOSQUE",
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
      header: {
        title: "Hegazti Escuela Bosque | Más información",
        meta: {
          description: {
            content: "Formulario para preguntar por más información.",
          },
        },
      },
      title: "VEN A CONOCERNOS",
    },
    daytimeMother: {
      header: {
        title: "Hegazti Escuela Bosque | Aula - Madre de dia",
        meta: {
          description: {
            content:
              "La Casita Abejorro es un centro de cuidado de niños y niñas de 0 a 3 años que ofrece un ambiente de calma y respeto en contacto con la naturaleza. Se enfoca en el movimiento libre y el acompañamiento respetuoso para generar un vínculo seguro entre las criaturas y la persona que acompaña. La yurta es el ambiente cálido y familiar en el que se generan experiencias de amor, confianza y sencillez para favorecer que los niños puedan ser. El centro está dirigido por Leti, una madre de dos niños, que se une al proyecto con la ilusión de aportar su experiencia vital en el acompañamiento respetuoso a las criaturas.",
          },
        },
      },
      hero: {
        claim: "MADRE DE DÍA",
        subClaim: "CASITA ABEJORRO",
      },
      imgPlayingTogetherTitle: "Casita Abejorro, jugando juntos",
      imgCouriosGirl: "Casita Abejorro, niña curiosa",
      imgLogo: "Casita Abejorro, logo",
      descriptionText1: `
        En la Casita Abejorro, las niñas y niños de 18 meses a 3 años, pueden
        vivenciar cada día un espacio de calma y respeto en contacto con la
        naturaleza. Creemos que las niñas y los niños son seres completos que
        necesitan un lugar seguro y amoroso en el que desarrollarse y crecer
        de manera sana, en contacto con la naturaleza y con sus propias
        necesidades.
      `,
      descriptionText2: `
        GENERAMOS EXPERIENCIAS PARA QUE DESCUBRAN EL MUNDO DE MANERA
        INTEGRADA, DESDE SUS NECESIDADES Y AL RITMO QUE NECESITAN
      `,
      descriptionText3: `
          Nos apoyamos en los principios del movimiento libre y el
              acompañamiento respetuoso para generar un vínculo seguro entre las
              criaturas y la persona que acompaña. A través del contacto con
              materiales naturales, cantos y cuentos, generamos experiencias de vida
              en las que las niñas y los niños descubren el mundo de manera
              integrada, desde sus necesidades y al ritmo que necesitan.
        `,
      yurta: {
        title: "LA YURTA",
        text: `
          La yurta de La Casita Abejorro es un ambiente cálido y familiar en el
          que se generan experiencias de amor, confianza y sencillez que
          favorecen que las niñas y niños puedan “ser”. Poniendo la mirada en
          las criaturas, favorecemos espacio y tiempo para que puedan desplegar
          “su vuelo” en la vida, de manera orgánica y natural.
        `,
        imgTitle: "La Yurta",
      },
      companion: {
        title: "ACOMPAÑANTE",
        text: `
        Me llamo Leti, soy mamá de dos niños y la magia de la vida me ha
        traido a Caminando con caballos. Comparto con la Bosqueescuela Hegazti
        la visión de una infancia respetada desarrollándose a su ritmo
        tranquilo en la naturaleza. Me sumo al proyecto con la ilusión de
        aportar mi experiencia vital en el acompañamiento respetuoso a las
        criaturas que nos rodean.
        `,
        imgTitle: "Casita Abejorro, madre y niños",
      },
      saying:
        "Está comprobado que los abejorros no deberían poder volar debido a su peso, tamaño y cuerpo, sólo que ellas no lo saben.",
      imageGridGirlDrawingAlt: "Niña Pintando",
      imageGridFreeMovementAlt: "Frase Movimiento Libre",
      imageGridPlayingWithAnimalsAlt: "Jugando con animales",
      imageGridTrustAlt: "Frase Confianza",
      imageGridCareAlt: "Frase Cuidado",
      imgGridForestAlt: "Bosque",
      imgGridCousinessAlt: "Frase Calidez",
      imgGridPlaying: "Niños Jugando",
      imgGridHorsesAlt: "Caballos y niños",
      imgGridSlowTempoAlt: "Frase Ritmo Calmado",
      imgGridSnakeAlt: "Frase Caracola",
      imgGridCareAlt: "Niño y Cuidado",
      imgGridCompanionAlt: "Frase Acompañamiento",
      imgGridMotherAlt: "Madre y niño abrazado",
      imgGridNatureAlt: "Frase Naturaleza",
      imgGridAnimalsAlt: "Niños y animales",
    },
    preschoolClassroom: {
      header: {
        title: "Hegazti Escuela Bosque | Aula - Infantil",
        meta: {
          description: {
            content:
              "La Casita del Bosque es un espacio natural diseñado para niñas y niños de 3 a 6 años, donde pueden aprender viviendo, tocando y explorando su entorno natural. El objetivo es crecer en armonía con la naturaleza y desarrollar habilidades motoras y emocionales. Se da prioridad a la persona, a sus preferencias, intereses, estados y sentimientos.",
          },
        },
      },
      hero: {
        claim: "INFANTIL",
        subClaim: "CASITA DEL BOSQUE",
      },
      introImage1: "Niños jugando en casita",
      introImage2: "Niña jugando con el agua",
      introText1: `
        La Casita del Bosque es un espacio natural en el que niñas y niños de 3
        a 6 años, conviven a diario con los árboles, el agua, la tierra, los
        insectos, los animales, el cielo, el aire, el sol… todo esto les permite
        crecer en armonía con lo que son, en un contexto inspirador, cambiante,
        orgánico e integrador.
        `,
      introText2: `
        Aprender viviendo, tocando, explorando, permite integrar cualquier tipo
        de aprendizaje. Interactuar con un medio vivo genera inquietudes,
        interés sobre el contexto. Esto da lugar a preguntas que conducen a
        investigar en todos los planos del conocimiento.  
      `,
      introText3: `
        Damos un espacio principal a la persona, a sus preferencias, intereses,
        estados, y sentires. Igualmente se respetan los tiempos, las
        circunstancias, necesidades y elecciones de cada uno/a
        `,
      introBullet: `
        DAR ESPACIO A LA NECESIDAD MOTORA EN LA INFANCIA ES ABRIR LA PUERTA AL
        BIENESTAR PSICOLÓGICO Y AL EQUILIBRIO EMOCIONAL.
      `,
      introText4: `
        En esta etapa, el desarrollo motor es esencial; abrimos la posibilidad a
        las personas de asumir retos motores, experimentar desafíos y lograr
        conquistas.
      `,
      introText5: `
          La gestión emocional es otro de los focos del acompañamiento. por eso
          en Hegazti se da especial importancia a respetar el espacio de la
          persona para elaborar lo que siente o le acontece.
          `,
      saying:
        "Mira profundamente en la naturaleza y entonces comprenderás todo mejor.",
      imageGrid: {
        horses: "Niñas acariciando caballos",
        kidHand: "Mano con lagartija",
        yurta: " Yurta",
        cooking: "Haciendo pasteles juntos",
        forest: "Jugando en el rio",
        walk: "Paseando por el campo",
        sand: "Haciendo figuras de barro",
        playingInYurta: "Jugando en la yurta",
      },
    },
    primarySchool: {
      header: {
        title: "Hegazti Escuela Bosque | Aula - Primaria",
        meta: {
          description: {
            content:
              "La Casita del Árbol y el Nido de Pájaro es un espacio natural en el que niños y niñas de primaria pueden experimentar y aprender a través del contacto con la naturaleza. El enfoque es en el aprendizaje vivencial y en el desarrollo motor, que se considera esencial en esta etapa de la vida. También se presta atención a la gestión emocional y se respeta el espacio personal de cada niño o niña para que puedan elaborar sus propios sentimientos.",
          },
        },
      },
      hero: {
        claim: "PRIMARIA",
        subClaim: "Niña recogiendo flores",
      },
      introImage1: "Niños jugando en casita",
      introImage2: "Niños aprendiendo y leyendo",
      introText1: `
        Escuela Bosque Hegazti Primaria es un espacio natural en el que niñas
        y niños de 6 a 12 años aprenden a través de la exploración y la
        investigación en el contexto de la naturaleza.
      `,
      introText2: `
        Hay dos grupos de edades de 6 a 9 años en Casita del Árbol y de 9 a 12
        años en Nido de Pajaro.
      `,
      introText3: `
        El método de aprendizaje sigue siendo vivenciado y funcional para su
        día a día y para el desarrollo holístico a través del medio natural.
      `,
      introText4: `
      Los aprendizajes no están separados por áreas de conocimiento, sino
      integrados de forma orgánica.
      `,
      introText5: `
      El conocimiento parte de su propio proceso por aprender aquello que
          les interesa.
      `,
      introBullet: `
        EL FIN DE LA EDUCACIÓN NO ES ENSEÑAR, SINO DEJAR QUE APRENDAN DE SU
        PROPIA EXPERIENCIA, AQUELLO QUE LES INTERESA
      `,
      introText6: `
        La educación es algo admirable, pero es bueno recordar de vez en
        cuando que nada de lo que vale la pena saber se puede enseñar. Oscar
        Wilde
      `,
      introText7: `
        El proceso de aprendizaje se desarrolla a través de la investigación y
        de la experiencia vivida.
      `,
      introText8: `
        Los niveles de concrección de lo aprendido se materializan en
        estructuras, libros creados, cuadernos de campo o proyectos
        funcionales para ellas/os mismos/as y para el medio.
      `,
      introText9: `
        El aprendizaje se integra en tareas de la escuela de forma progresiva.
      `,
      introText10: `
        Además en Hegazti a esta edad se integran de forma diaria tareas en el
        contexto. Como el cuidado de los animales, el trabajo en el huerto, la
        elaboración de productos de cuidado de la salud, y el mantenimiento de
        su medio natural y el de la escuela.
      `,
      saying:
        "Los niños no son cosas para ser moldeados, pero son personas para ser desplegadas.",
      grid: {
        yurta: "Yurta",
        kidReading: "Niña leyendo",
        shells: "Corazón de piedras",
        horses: "Caballos pastando",
        hands: "Manos llenas de barro",
        goats: "Cabritas",
        kids: "Espacio para jugar",
        vocals: "Vocales",
      },
    },
    extracurricularPlayroom: {
      header: {
        title: "Hegazti Escuela Bosque | Extraescolares - Ludoteca",
        meta: {
          description: {
            content:
              "La Escuela Bosque ofrece actividades extraescolares para niños/as de 3 a 12 años en contacto con la naturaleza y los animales. Ofrecen ludoteca y ludotecas de invierno, primavera y verano en un horario de 9:00 a 14:00 horas. Se invita a los interesados a hacer su reserva con anticipación.",
          },
        },
      },
      hero: {
        claim: "LUDOTECA",
        subClaim: "Ludoteca para niños de 3 a 12 años.",
      },
      title: "LUDOTECAS DE INVIERNO, PRIMAVERA Y VERANO",
      subTitle: "EXPERIMENTANDO LA NATURALEZA",
      imgTitle: "Adulto acompañando niño en la naturakeza",
      text1: `
        Nuestra Escuela Bosque se abre a otros niños/as de 3 a 12 años que
        quieran compartir nuestra preciosa escuela y tener esta experiencia
        en contacto con la naturaleza y los animales.
      `,
      text2: "El horario que proponemos es de 16:00 a 18:30 hrs.",
      text3: `
        Y os animamos a que nos contactéis cuando lleguen las fechas para
        poder hacer vuestra reserva.
      `,
      text4: `
        Os adelantamos algunas de las actividades que realizamos durente
        estas jornadas para que tengáis un poco más de información.
      `,
      button: "MÁS INFORMACIÓN",
    },
    extracurricularSaturdaysInFamily: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      hero: {
        claim: "INFANTIL",
        subClaim: "CASITA DEL BOSQUE",
      },
      title: "",
    },
    project: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      hero: {
        claim: "",
        subClaim: "",
      },
      title: "",
    },
    natureSpaces: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      hero: {
        claim: "",
        subClaim: "",
      },
      title: "",
    },
    aDayInHegazti: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      hero: {
        claim: "",
        subClaim: "",
      },
      title: "",
    },
    faqs: {
      header: {
        title: "",
        meta: {
          description: {
            content: "",
          },
        },
      },
      hero: {
        claim: "",
        subClaim: "",
      },
      title: "",
    },
    footer: {
      whereAreWe: "DONDE ESTAMOS UBICADOS",
      whereAreWeExtended:
        "Estamos ubicados en el Paraje de Valdearas a 1 kilómetro de Viana y a 9 km de Logroño.",
      timeTableTitle: "Horario de Escuela Bosque:",
      timeTableText: " De Lunes a Vierns de 9:00 a 14:00 hrs.",
      timeTableTextSummerTitle:
        "Horario Ludotecas de Invierno, Primavera o Verano:",
      timeTableTextSummerText: "De 9:00 a 14:00 hrs.",
      timeTableTextSaturdayTitle: "Horario Sábados en Familia:",
      timeTableTextSaturdayText: "De 10:00 a 14:00 hrs.",
      address: `
        Carretera de Aras nº 6, 31230, Navarra Contacto Educativo: 697 24 57 75
        (Naroa) / Oportunidades de Colaboración: 635 57 53 61 (Vicens)
        info@hegaztiescuelabosque.org
      `,
      cookiePolicyText: "política de cookies",
      privacyPolicyText: "Política de privacidad",
      legalText: "Aviso legal",
      contact: "Contacto",
      contactWithUs: "CONTACTA CON NOSOTROS",
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

export default (lng: string | undefined | null | unknown) =>
  i18next.getFixedT(lng);

export const i18n = i18next;
export const middleware = i18nextMiddleware;
export const handle = i18nextMiddleware.handle(i18next);
