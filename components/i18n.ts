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
    whoWeAreProject: {
      header: {
        title: "Hegazti Forest School | Who We Are - Project",
        meta: {
          description: {
            content:
              "The fundamental principles of the school focus on daily coexistence with nature and experiential learning. The school promotes free play, emotional bonding, emotional support, non-violent communication, coexistence, and free movement as means to develop creativity, imagination, autonomy, and self-sufficiency in children. The school also promotes solidarity values and caring for others.",
          },
        },
      },
      hero: {
        claim: "OUR PROJECT",
        subClaim: "What has led us to build Hegazti",
      },
      title: "SCHOOL PRINCIPLES",
      cardList: {
        title1: "Daily coexistence with nature",
        text1:
          "Connection with the natural environment allows children to develop organically in harmony with the context. Functional learning, autonomy, and self-sufficiency are built. It activates the immune system. It is an inspiring and inclusive environment. It's the largest and most creative classroom, where curiosity and the desire to know are awakened. Nature balances the nervous system and conveys a calm rhythm. Being in coexistence from childhood establishes emotional bonds with it and with respect and care for it.",
        title2: "Experiential Learning",
        text2:
          "Learning is integrated when we experience it. It is a holistic and organic way in which individuals are involved in their own process at all levels. This generates a curiosity to investigate and discover.",
        title3: "Free Play",
        text3:
          "An intrinsic activity of the human being, as in the animal kingdom, through which they learn group behaviors, skills, values, and knowledge. It develops self-determination, creativity, imagination, and decision-making ability. They create their own processes with rules, principles, outcomes, materials...",
        title4: "Emotional Bond",
        text4:
          "We nurture the climate and the environment to make the space a safe and calm place where they can feel secure. The main foundation of the school for exploration to happen.",
        title5: "Emotional and Respectful Support",
        text5:
          "We accompany children's emotional experience through active, non-directive presence, reflecting back to them what we understand about their emotional experience, leaving the experience of the emotion entirely in their hands, showing our company and understanding without trying to appropriate the emotion or manage it for them.",
        title6: "Non-violent Communication",
        text6:
          "We practice daily communication by describing events without value judgments or adjectives. We try to identify in conflicts what each person's needs are and specify what the request is.",
        title7: "Mixed Age Groups",
        text7:
          "We mix age groups as follows: 0 to 3, 3 to 6, 6 to 9, 9 to 12 years old. The purpose of these groupings is to respect the timing in processes and contribute to the experiences offered by different ages.",
        title8: "Free Movement",
        text8:
          "Physical challenges allow the child to discover their own body and become aware of their possibilities. One way we support this is by allowing them to move freely without interference, such as placing them in positions they cannot reach by themselves or advancing processes they can achieve autonomously. We encourage them to develop and learn freely and autonomously, guided by their interests and motivations.",
        title9: "Solidarity Values",
        text9:
          "We encourage awareness of everyone's needs, the need to take care of ourselves and others, to contribute to making these values part of the school's everyday life.",
      },
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
    whoWeAreProject : {
      header: {
        title: "Hegazti Escuela Bosque | Quienes Somos - Proyecto",
        meta: {
          description: {
            content:
              "Los principios fundamentales de la Escuela se centran en la convivencia diaria con la naturaleza y el aprendizaje experiencial. La escuela fomenta el juego libre, el vínculo emocional, el acompañamiento emocional, la comunicación no violenta, la convivencia y el movimiento libre como medios para desarrollar la creatividad, la imaginación, la autonomía y la autosuficiencia en los niños. La escuela también promueve valores solidarios y el cuidado de los demás.",
          },
        },
      },
      hero: {
        claim: "NUESTRO PROYECTO",
        subClaim: "Que nos ha llevado a construir Hegazti",
      },
      title: "PRINCIPIOS DE LA ESCUELA",
      cardList: {
        title1: "Convivencia diaria con la naturaleza",
        text1:
          "La conexión con el medio natural permite a los niños desarrollarse de forma orgánica en armonía con el contexto. Se construyen aprendizajes funcionales, de autonomía y autosuficiencia. Activa el sistema inmunitario. Es un medio inspirador e integrador. Y el aula más grande y creativa, donde se despierta el interés y la inquietud por saber. La naturaleza equilibra el sistema nervioso, y transmite un ritmo tranquilo.  Estar en convivencia desde la infancia establece vínculos emocionales con ella, y con el respeto y el cuidado por ella.",
        title2: "Vicencialismo",
        text2:
          "El aprendizaje se integra cuando experimentamos. Es una forma holística y orgánica donde las personas están involucradas en su propio proceso a todos los niveles. Y esto genera inquietud por investigar y por descubrir.",
        title3: "Juego libre",
        text3:
          "actividad intrínseca del ser humano, al igual que en el reino animal, mediante la que aprende conductas grupales, destrezas, valores y conocimiento. Desarrolla la autodeterminación, la creatividad, la imaginación la capacidad de elección. Elaboran procesos propios con reglas, principios, finales, materilaes….",
        title4: "Vínculo emocional",
        text4:
          "Cuidamos el clima, y el ambiente para hacer del espacio un lugar seguro calmado donde puedan sentirse seguros/as. Base principal de la escuela para que la exploración suceda.",
        title5: "Acompañamiento emocional y respetuoso",
        text5:
          "Acompañamos la vivencia emocional de los enfantes desde la presencia activa, no directiva, reflejando al otro lo que comprendemos de su experiencia emocional, dejando en sus manos completamente la vivencia de la emoción, mostrando nuestra compañía y comprensión, sin tratar de apropiarnos de la emoción o intentar gestionársela.",
        title6: "Comunicación no violenta",
        text6:
          "Practicamos diariamente una comunicación describiendo los acontecimientos sin juicios de valor ni adjetivos. Tratando de identificar en los conflictos cual es la necesidad de cada uno. Y concretando cual es la petición.",
        title7: "Interedad",
        text7:
          "Mezclamos grupos de edad de la siguiente manera 0 a 3, 3 a 6, 6 a 9, 9 a 12 años. La finalidad de las agrupaciones es respetar los tiempos en los procesos, y contribuir en las experiencias que ofrecen las diferentes edades.",
        title8: "Movimiento libre",
        text8:
          "Los retos físicos permiten al niño descubrir su propio cuerpo y ser consciente de sus posibilidades. Una forma en la que acompañamos es que se muevan libremente sin interferencias, como colocarlos en posiciones que no puede llegar por sí mismo, o adelantar procesos a los que   pueden llegar de forma autónoma. Acompañamos a que se desarrollen y aprendan de forma libre y autónoma, guiándose por sus intereses y motivaciones.",
        title9: "Valores solidarios",
        text9:
          "Fomentamos la toma de conciencia de las necesidades de todos, de la necesidad de cuidarnos, y cuidar a otros para  contribuir a que estos valores sean parte del día a día de la escuela.",
      },
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
      section: {
        saying: "Hay un libro abierto siempre para todos los ojos: la naturaleza.",
        imageTitle1: "Niño con caracola",
        imageTitle2: "Manos conjuntas",
        title: "¿POR QUÉ EN LA NATURALEZA?",
        textPart1: `
          La infancia temprana es especialmente sensible a la naturaleza, pues
            los niños se identifican con ella de una manera holística, integrada,
            se sienten parte de ella. Nada les produce tanto placer como estar
            fuera y poder zambullirse con todos los sentidos en lo que la
            naturaleza les ofrece. La naturaleza ofrece espacios de calidad para
            el movimiento y la percepción sensorial, difíciles de reproducir en
            otro tipo de emplazamientos. Aunque no es necesario buscar escenarios
            grandiosos, pues el interés de los niños a estas edades está en la
            escala micro, en lo que tiene lugar al alcance de su mano, es
            importante proveerles de un espacio natural lo menos manipulado
            posible. El contacto frecuente o casi permanente con la naturaleza,
            como es el caso aquí al estar a diario en el monte, genera un sentido
            de identidad y pertenencia a ella que es difícil de conseguir con
            visitas esporádicas. Ello se traduce de manera casi inmediata en
            actitudes y comportamientos de respeto al entorno, casi sin necesidad
            de explicación o mediación por parte del adulto.
          `,
          textPart2: `
          Además, ese contacto prolongado y habitual con la naturaleza provee a
          los niños de experiencias sensoriales intensas, profundas y
          gratificantes a la larga. La información que les llega a través de
          todos los sentidos es coherente, consistente y llena de matices y
          sutilezas, imprescindible a la hora de integrar la información en el
          cerebro. Todo ello permite un mayor autoconocimiento de su cuerpo y lo
          que éste les permite hacer. Los infinitos matices de formas, colores,
          tamaños y materiales, hace que los niños se hagan más sensibles a la
          belleza y se sientan en armonía con el entorno y consigo mismos. El
          espacio amplio y abierto les permite expandirse física y mentalmente,
          sentirse libres; pueden desarrollar su juego sin interferir los unos
          con los otros y en un escenario con múltiples ambientes, estructuras,
          materiales y retos de diferente nivel y características. La
          permanencia al aire libre, en un entorno por definición cambiante,
          hace que estén más alerta, tengan una mayor capacidad de observación y
          concentración, y sean más flexibles consigo mismos y con los demás que
          cuando están en el aula. Por esta misma razón, mejoran en el
          reconocimiento de las necesidades propias y ajenas. Los ritmos del
          mundo natural, en general más pausados que los que impone nuestra
          sociedad, permiten desarrollar la paciencia, les aportan serenidad y
          contribuyen al encuentro con su espiritualidad.
          `,
          textPart3: `
          Por otro lado, el juego en la naturaleza, con su terreno irregular, y
          el manejo de los materiales que allí se encuentran estimula su
          curiosidad, su imaginación, su creatividad, su lenguaje y, sobre todo,
          su motricidad, tanto gruesa como fina. El hecho de tener que fabricar,
          modelar o definir sus propios juguetes crea la necesidad de usar el
          lenguaje para ello, enriqueciendo enormemente su capacidad descriptiva
          y la fantasía. Los desafíos físicos y sensoriales que encuentran en
          ese medio fomentan su autonomía, independencia y capacidad de
          cooperación, de negociación, de razonamiento y de decisión, pues son
          los propios niños quienes estiman su propia capacidad de enfrentarse a
          ellos y valoran los resultados de sus intentos. El entorno natural
          presenta además situaciones de riesgo variable, que los acompañantes
          procuran controlar, pero no eliminar. El riesgo que allí afrontan
          contribuye a aprender a evaluarlos de forma más realista, al
          autoconocimiento de sus habilidades, a su mejor capacidad para
          afrontar la adversidad, a una mayor tolerancia a la frustración y al
          respeto de límites y normas. Así pues, el conjunto de experiencias
          sensoriales y motoras que ofrece la naturaleza en la infancia temprana
          contribuye a un desarrollo físico, emocional y espiritual más armónico
          e integrado.
          `,
          textPart4: `
          El contacto con la naturaleza en edades tempranas tiene además
          múltiples beneficios para la salud: No sólo se trata del ejercicio
          físico evidentemente más intenso que realizan en el exterior. También
          tiene efectos beneficiosos para niños con trastornos del espectro
          autista, de déficit de atención, discapacitados físicos, psíquicos o
          sensoriales y enfermos crónicos; contribuye a la reducción de la
          tensión y de la espasticidad; fomenta la concentración y capacidad de
          atención y mitiga comportamientos antisociales como la violencia, el
          acoso, el vandalismo y el absentismo.
          `,
          textPart5: `
          Para saber más, véase Hueso, K. (2017) Somos naturaleza. Plataforma
          editorial, Barcelona
          `
      },
      cardList: {
      }
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
