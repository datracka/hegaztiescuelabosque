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
        text: "The forest as a classroom",
        daytimeMother: {
          url: "daily-mother-schoolroom",
          text: "Daytime mother",
        },
        childhoodClass: {
          url: "preschool-classroom",
          text: "Preschool Classroom",
        },
        primarySchool: {
          url: "primary-school",
          text: "Primary School",
        },
        extracurricularActivitiesPlayRoom: {
          url: "extracurricular-playroom",
          text: "Extracurriculars - Playroom",
        },
        extracurricularActivitiesSaturdays: {
          url: "extracurricular-family-satuday",
          text: "Extracurriculars - Family Saturday",
        },
      },
      whoWeAre: {
        text: "Who we are",
        project: {
          url: "whoweare-project",
          text: "Project",
        },
        natureSpaces: {
          url: "whoweare-spaces",
          text: "Nature and Spaces",
        },
        aDayInHegazti: {
          url: "whoweare-hegazti",
          text: "A day at Hegazti",
        },
        faqs: {
          url: "whoweare-faqs",
          text: "Frequently Asked Questions",
        },
      },
      extracurricularActivities: {
        url: "extracurriculars-2023-2024",
        text: "Extracurriculars",
      },
      contact: {
        url: "more-information",
        text: "Contact",
      },
      blog: {
        url: "//blog.hegaztiescuelabosque.org",
        text: "Blog",
      },
      scholarCalendar: {
        url: "//docs.google.com/document/d/1Dk-Hd-NI8Y8oh9TxotYUyBzqWnu9dXUMpjkJ1dkAsCY/edit?usp=sharing",
        text: "School Calendar 23/24",
      },
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
    whoWeAreSpaces: {
      header: {
        title: "Hegazti Forest School | Who We Are - Nature and Spaces",
        meta: {
          description: {
            content:
              "This text explains the importance of early childhood exposure to nature and how it can influence the physical, emotional, and spiritual development of children. It emphasizes how nature provides quality spaces for movement and sensory perception that are difficult to replicate in other environments. It also discusses how frequent contact with nature fosters a sense of identity and belonging that promotes attitudes and behaviors of environmental respect. Furthermore, it highlights how playing in nature stimulates curiosity, imagination, creativity, language, and motor skills in children. The text also mentions the numerous health benefits associated with contact with nature. A bibliographic reference is provided for further information.",
          },
        },
      },
      hero: {
        claim: "NATURE AND SPACES",
        subClaim: "Learning through play in contact with nature",
      },
      section: {
        saying: "There is always an open book for all eyes: Nature.",
        imageTitle1: "Child with a seashell",
        imageTitle2: "Hands joined together",
        title: "WHY IN NATURE?",
        textPart1: `
        Early childhood is especially sensitive to nature, as children identify with it in a holistic, integrated way; they feel a part of it. Nothing gives them as much pleasure as being outdoors and immersing themselves with all their senses in what nature offers them. Nature provides quality spaces for movement and sensory perception that are difficult to replicate in other settings. Although it is not necessary to seek grandiose settings, as children at this age are interested in the micro-scale, in what is within reach of their hands, it is important to provide them with a natural space that is as unaltered as possible. Frequent or nearly constant contact with nature, as is the case here by being in the woods every day, generates a sense of identity and belonging to it that is hard to achieve with sporadic visits. This translates almost immediately into attitudes and behaviors of respect for the environment, almost without the need for explanation or mediation by adults.
          `,
        textPart2: `
          Furthermore, this prolonged and regular contact with nature provides children with intense, deep, and gratifying sensory experiences in the long run. The information that reaches them through all their senses is coherent, consistent, and full of nuances and subtleties, which is essential for integrating information in the brain. All of this allows for a greater self-awareness of their bodies and what they can do. The infinite nuances of shapes, colors, sizes, and materials make children more sensitive to beauty and make them feel in harmony with the environment and with themselves. The wide and open space allows them to expand physically and mentally, to feel free; they can develop their play without interfering with each other and in a setting with multiple environments, structures, materials, and challenges of different levels and characteristics. Being outdoors, in an environment that is inherently changing, makes them more alert, enhances their observation and concentration skills, and makes them more flexible with themselves and others than when they are in the classroom. For this same reason, they improve in recognizing their own and others' needs. The rhythms of the natural world, generally slower than those imposed by our society, allow for the development of patience, provide serenity, and contribute to the encounter with their spirituality.
          `,
        textPart3: `
          On the other hand, play in nature, with its uneven terrain, and the use of materials found there stimulate their curiosity, imagination, creativity, language, and, above all, their motor skills, both gross and fine. Having to make, shape, or define their own toys creates the need to use language for it, greatly enriching their descriptive capacity and fantasy. The physical and sensory challenges they encounter in that environment foster their autonomy, independence, and ability to cooperate, negotiate, reason, and make decisions, as it is the children themselves who assess their own ability to face them and evaluate the results of their attempts. The natural environment also presents situations of variable risk, which caregivers try to control but not eliminate. The risk they face there contributes to learning to evaluate them more realistically, to self-awareness of their abilities, to a better ability to cope with adversity, to greater tolerance for frustration, and to respect for limits and rules. Thus, the set of sensory and motor experiences that nature offers in early childhood contributes to a more harmonious and integrated physical, emotional, and spiritual development.
          `,
        textPart4: `
          Contact with nature at an early age also has multiple health benefits: It is not just the obviously more intense physical exercise they engage in outdoors. It also has beneficial effects for children with autism spectrum disorders, attention deficit disorders, physical, mental, or sensory disabilities, and chronic illnesses; it contributes to reducing tension and spasticity; it promotes concentration and attention capacity and mitigates antisocial behaviors such as violence, bullying, vandalism, and absenteeism.
          `,
        textPart5: `
          For more information, see Hueso, K. (2017) Somos naturaleza. Plataforma editorial, Barcelona. (Spanish)
          `,
      },
      cardList: {
        alt1: "Joint Games",
        alt2: "Groups of Children",
        alt3: "Children and Horses",
        alt4: "Climbing the Mountain",
        alt5: "Exploring the Stream",
        alt6: "Herding",
        alt7: "Leaf Games",
        alt8: "Yurt",
      },
    },
    whoWeAreADayInHegazti: {
      header: {
        title:
          "Forest School Hegazti | Who We Are - Frequently Asked Questions",
        meta: {
          description: {
            content:
              "he Hegazti Forest School is a special place for early childhood education, with four areas differentiated by age, each with a different dynamic in which children learn through play in contact with nature. The main focus is project-based learning and outdoor activities in a natural environment, giving children the opportunity to explore and discover the world through their own curiosity.",
          },
        },
      },
      hero: {
        claim: "A DAY AT HEGAZTI",
        subClaim: "Discover our day-to-day at the school",
      },
      introduction: `
      <strong>Hegazti Forest School</strong>
      has four spaces differentiated by age and therefore four
      different dynamics in terms of day-to-day experience.
      `,
      section1: {
        title: "A Day in the Bumblebee House (0 to 3 years)",
        text: `
        <p className={tw(""mb-4"")}>
        The Bumblebee House is a warm, calm, respectful, caring,
        trustworthy, and safe space.
      </p>
      <p className={tw(""mb-4"")}>
        The bumblebees arrive, and the first space is for welcoming,
        contact, and connection with each person.
      </p>
      <p className={tw(""mb-4"")}>
        The next moment is free movement through the interior space or, if appropriate, the outdoor space, where we focus on following their rhythms and facilitating spontaneous movement as well as accompanying them in the exploration of materials.
      </p>
      <p className={tw(""mb-4"")}>
        The last space is for reading, storytelling, and
        relaxation to close the morning.
      </p>
        `,
        imgCaption: "Bumblebee House",
      },
      section2: {
        title: "A Day in the Forest House (3 to 6 years)",
        imgCaption: "Forest House",
        text: `
        <p className={tw(""mb-4"")}>
        The Forest House in the day-to-day is a comfortable space.
      </p>
      <p className={tw(""mb-4"")}>
        At the start of the day is our meeting space, where everyone can have their welcome and our time to share our feelings and organize our day.
      </p>
      <p className={tw(""mb-4"")}>
        We prepare what is needed and head out on our Learning Path, with our magnifying glasses, baskets, ropes, or whatever we need today...
      </p>
      <p className={tw(""mb-4"")}>
        When we arrive at our chosen place for the day, we have lunch in our cabins, play what we imagine, set our rules, have fun, sometimes things happen and we also fix them.
      </p>
      <p className={tw(""mb-4"")}>
        Here in this forest space, we do our activity of the day sometimes we collect, investigate, build, sometimes discover...
      </p>
      <p className={tw(""mb-4"")}>
        We return to the School full of energy, sun, rain, mud, sometimes sticks, pine cones, leaves, feathers, or whatever we have found...
      </p>
      <p className={tw(""mb-4"")}>
        We have in the Yurt our art materials, everyone chooses what to do...
      </p>
      <p className={tw(""mb-4"")}>
        And our morning closes with our storytelling space that we create together or sometimes each one tells their own story of the day...
      </p>
      <p className={tw(""mb-4"")}>
        Fridays are a special day at the school we do chores, take care of the animals that live with us, collect eggs, plants, care for and work in the garden, make soap, clean the space, sometimes we go out with baskets to collect trash from the forest or walk with the mares.
      </p>
        `,
      },
      section3: {
        title: "A Day in the Tree House (6 to 9 years)",
        text: `
        <p className={tw("mb-4")}>
        In the Treehouse, we learn many things.
      </p>
      <p className={tw("mb-4")}>
        At the beginning of the day, we meet, share how we've arrived, and discuss what
        we are going to do today. We make decisions and agreements.
      </p>
      <p className={tw("mb-4")}>
        We do concentration activities inside the school, each day
        it's different. Sometimes we do them together, and other times each one
        has a different activity.
      </p>
      <p className={tw("mb-4")}>
        We go outside to play in nature and to have our lunch.
      </p>
      <p className={tw("mb-4")}>
        We take our explorer's backpacks and walk to the location of the day,
        along the way we find many curious things that interest us and
        generate questions…
      </p>
      <p className={tw("mb-4")}>
        When we return, we have our space for reading, art, or
        crafts…
      </p>
      <p className={tw("mb-4")}>
        And finally, we gather to share how the day went, what things
        interested us, how we might answer the questions we have,
        resolve doubts, and agree on what task each one will
        take on to resolve these questions.
      </p>
      <p className={tw("mb-4")}>
        In school on Mondays and Fridays, we do tasks, take care of the
        animals living with us, collect eggs, plants,
        tend and work in the garden, make soap, clean the space,
        sometimes go out with baskets to collect garbage from the forest or walk
        with the mares. And we also coincide with other classmates from the
        school.
      </p>
        `,
        imgCaption: "Tree House",
      },
      section4: {
        title: "A Day in the Bird's Nest (9 to 12 years)",
        text: `
        <p className={tw("mb-4")}>
        The Bird's Nest is a place where we prepare to fly.
      </p>
      <p className={tw("mb-4")}>
        Upon arrival, we greet each other, meet, and share feelings,
        interests, dreams, and curiosities. We also make our choice of
        the project for the day.
      </p>
      <p className={tw("mb-4")}>
        We have space to prepare what we need for our
        project today, sometimes our project lasts weeks... it depends on
        how much it interests us. We plan, organize, gather materials, make predictions, and when we are ready, we go outside.
      </p>
      <p className={tw("mb-4")}>
        Now it's our turn to put into practice or carry out what we have
        decided, also noting what we believe is appropriate or what
        suddenly occurs to us. Sometimes it turns out as we expected, and other times nothing goes as we thought... when we finish for today, we go back inside.
      </p>
      <p className={tw("mb-4")}>
        Our spaces for free play, enjoyment, conversation, calm, or
        reading, we agree on them each day, and they tend to be different
        depending on the project we have.
      </p>
      <p className={tw("mb-4")}>
        Here we take notes, make reformulations, ask questions, see what
        we need, what has failed, analyze variables, and agree on how
        to continue or how to close and record our results.
      </p>
      <p className={tw("mb-4")}>
        We have our free space for art, or choose a workshop…
      </p>
      <p className={tw("mb-4")}>
        During the week we have responsibilities or tasks in school which
        we do at the end of the morning, it can be taking care of the animals,
        working in the garden, helping with maintenance tasks...
      </p>
      <p className={tw("mb-4")}>
        Fridays are a special day; we choose what things we want to learn
        outside of school, and that day we go to share with other people in
        their trades, a space for learning-work.
      </p> 
        `,
        imgCaption: "Bird's Nest",
      },
    },
    whoWeAreFaqs: {
      header: {
        title: "Forest School Hegazti | About Us - Frequently Asked Questions",
        meta: {
          description: {
            content:
              "We are a forest school that offers an educational approach based on contact with nature and learning through experience. Our schedule is Monday to Friday from 9:00 to 14:00, and the groups have different ratios of companions per person. To attend school, it is recommended to wear comfortable clothing and have rain boots and a raincoat in case of rain. We have a civil liability insurance and a labor insurance for the companions. The students bring their own food. We spend most of the time outside, although the climatic and physical conditions of the group are valued. Visits to the school are made by appointment. The rules and limits are built by the group and the importance of taking care of oneself and others is emphasized. Although there are risks when playing in the forest, they are minimized as much as possible through companionship and the development of skills in the environment.",
          },
        },
      },
      hero: {
        claim: "FREQUENTLY ASKED QUESTIONS",
        subClaim: "Everything you need to know",
      },
      faq1: {
        question: "What are the hours?",
        answer: "The school hours are from 9:00 to 14:00 Monday to Friday.",
      },
      faq2: {
        question: "What is the school's price?",
        answer: `
        <p className={tw("mb-4")}>
         The price of the school is as follows:
        </p>.
        <p className={tw("mb-4")}>
        €350 per month, full-time (25 hours per week).
        </p>
        <p className={tw("mb-4")}>
        €250 per child, reduced rate (15 hours per week).
        </p>
        <p className={tw("mb-4")}>
        €150 per child, super reduced rate (10 hours per week).
        </p>
        <p className={tw("mb-4")}>
        And finally, for individual days: €20 per day.
        </p>
        <p className={tw("mb-4")}>
        Depending on each family's circumstances, we are open to discussing the rates, which can potentially be offset through community work or activities benefiting the children and the school.
        </p>
        `,
      },
      faq3: {
        question: "What is the ratio in each group?",
        answer: `
        <p className={tw("mb-4")}>
        In Little Beehive, it is 4 people per companion.
        </p>
        <p className={tw("mb-4")}>
          In Forest House, it is 8 people per companion.
        </p>
        <p className={tw("mb-4")}>
          In Treehouse and Bird's Nest, it is 12 people per
          companion.
        </p>
        `,
      },
      faq4: {
        question:
          "Do you need special clothing to go to a forest school? What if it rains?",
        answer: `
        <p className={tw("mb-4")}>
        We need comfortable clothes, sneakers, and rain boots, a raincoat, and
        always have spare clothes for each person in the school.
         </p>
        
        `,
      },
      faq5: {
        question: "Is there any insurance?",
        answer: `
        <p className={tw("mb-4")}>
        Lunch in the case of the older ones is brought by the family and
        food in the case of the younger ones is also provided by the
        family, we do not provide a food service.
      </p>
        `,
      },
      faq6: {
        question: "What about food?",
        answer: `
          <p className={tw("mb-4")}>
            El almuerzo en el caso de los/as más mayores los lleva la familia y
            la comida en el caso de los más pequeños/as igualmente lo aporta la
            familia, no hacemos servicio de comida.
          </p>
        `,
      },
      faq7: {
        question: "How much time do they spend outside? What about in winter?",
        answer: `
        <p className={tw("mb-4")}>
        The time spent outside depends on age, the youngest ones in Little Beehive go outside when the weather permits.
      </p>
      <p className={tw("mb-4")}>
        In Forest House, they go outside regardless of the weather, although
        conditions are always considered, they can spend between 60% and 75% of the day outside.
      </p>
      <p className={tw("mb-4")}>
        In Treehouse, they go outside regardless of the weather, conditions are
        also considered in this case they spend 60% of the day outside.
      </p>
      <p className={tw("mb-4")}>
        In Bird's Nest, they go outside regardless of the weather, conditions are
        also considered and there are always indoor proposals, and the time spent outside is variable, depending on the project but they spend approximately 50% of the day outside.
      </p>
      <p className={tw("mb-4")}>
        We go outside in all seasons, always with the appropriate clothing,
        and with optimal group conditions, circumstances such as heavy rain, or the physical state of the group are taken into account. The environment is a resource, not a punishment, if it is deemed inappropriate there are options to work in the Yurt.
      </p>
        `,
      },
      faq8: {
        question: "Can you visit the school to get to know it?",
        answer: `
        <p className={tw("mb-4")}>
        You can visit the school always by appointment and prior contact.
      </p>"
What rules and limits are there in the forest school?
"<p className={tw("mb-4")}>
        The rules are built by the group, a clear rule of the school is
        to take care of oneself and others. There are other rules of the space that are clearly delimited to preserve the safety of the people. There are natural limits and natural consequences.
      </p>"
Isn't it dangerous for children to play in the forest?
"<p className={tw("mb-4")}>
        In the forest, there may be risks, however, as they have contact with it, experiences, and understand the limits and develop skills in the environment, the risks decrease and accompaniment in this case is essential. Not all risks disappear, but they are minimized as much as possible.
      </p>
          `,
      },
      faq9: {
        question: "What rules and limits are there in the forest school?",
        answer: `
        <p className={tw("mb-4")}>
        The rules are built by the group, a clear rule of the school is
        to take care of oneself and others. There are other rules of the space that are clearly delimited to preserve the safety of the people. There are natural limits and natural consequences.
      </p>
        `,
      },
      faq10: {
        question: "Isn't it dangerous for children to play in the forest?",
        answer: `
        <p className={tw("mb-4")}>
        In the forest, there may be risks, however, as they have contact with it, experiences, and understand the limits and develop skills in the environment, the risks decrease and accompaniment in this case is essential. Not all risks disappear, but they are minimized as much as possible.
      </p>
        `,
      },
      moreQuestionsHeadline: "Do you have any other questions or inquiries?",
      moreQuestionsText:
        "Do not hesitate to contact us, we will be delighted to help you.",
      moreQuestionsButton: "I HAVE A QUESTION",
    },
    extracurricular20232024: {
      header: {
        title: "Hegazti Forest School | Extracurricular Activities 2023 2024",
        meta: {
          description: {
            content:
              "Play in nature. Group dynamics. Artistic activities. Come live the experience!",
          },
        },
      },
      hero: {
        claim: "Extracurricular Activities 2023-2024",
        subClaim: "Wednesday or Thursday 16:30 to 17:30",
      },
      title:
        "Exploration and Continuous Development: Extracurricular Activities at Hegazti Forest",
      text: `
      <p class="mb-4">
        Dive into classrooms where nature is the teacher, a space where
        the sky is visible, the earth is tangible, flowers emit
        fragrances, and the senses are stimulated. Here, children can
        move freely, explore their surroundings, and observe the real world
        around them.
      </p>
      <p class="mb-4">
        Our classrooms live and breathe nature to meet the
        fundamental needs of every human being. We encourage
        curiosity, stimulate the senses, and promote connection with
        the diversity of each person. In our environment, every individual
        finds their unique and valuable place.
      </p>
      <p class="mb-4">
        We are excited to announce our extracurricular activities,
        which will take place every Wednesday or Thursday from 16:30 to 17:30. Designed
        to enhance group dynamics, experiential learning, and motor development, these activities will also address emotional and
        social aspects in an integrated manner.
      </p>
      <p class="mb-4">
        Join us at Hegazti Forest School and experience an
        education that goes beyond the traditional classroom walls.
        We are committed to the holistic growth of each child,
        cultivating their love for learning and promoting a sense of
        belonging in our natural environment.
      </p>
      <p class="mb-4">
        We invite you to join us at our Open Day
        to experience the school in person. You will discover how our living classroom
        is the perfect environment to nurture curiosity and connection
        with the world. We hope to see you soon at Hegazti Forest School!
      </p>
      <p class="mb-4">
        Call us at 697 24 57 75 or send us an email at
        hegaztiescuelabosque@gmail.com if you want to know more. We are waiting for you!
      </p>
      `,
    },
    cookiePolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Cookies",
      },
      content: `
      <h1 className="hegazti-h1 text-left! py-8">
      COOKIE POLICY
      </h1>
    <h3 className="text-2xl pt-8 pb-4">BACKGROUND</h3>
    <p className="mb-4">
      In accordance with Spanish regulations governing the use of cookies in
      relation to the provision of electronic communications services,
      outlined in Royal Decree Law 13/2012 of March 30, we inform you
      about the cookies used on the website of
      <strong>
        HEGAZTI FAMILIES FOREST SCHOOL
      </strong>(also the provider) and the reason for their use. Likewise, we
      inform you that by browsing the Website you are giving your
      consent to use them.
    </p>
    <h3 className="text-2xl pt-8 pb-4">WHAT ARE COOKIES?</h3>
    <p className="mb-4">
      A cookie is a file that is downloaded to your computer when you access
      certain web pages. Cookies allow a web page, among
      other things, to store and retrieve information about the browsing habits of
      a user or their computer and, depending on the
      information they contain and the way they use their equipment, they
      can be used to recognize the user. Cookies are associated
      only with an anonymous user and their computer or device and do not
      provide references that allow personal data to be known.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      COOKIES SUBJECT TO REGULATION AND EXEMPT COOKIES
    </h3>
    <p className="mb-4">
      According to the EU directive, the cookies that require informed
      consent from the user are analytics cookies and advertising and affiliate
      cookies, exempting those of a technical nature and those necessary for the
      operation of the website or the provision of services expressly requested by
      the user.
    </p>
    <h3 className="text-2xl pt-8 pb-4">TYPES OF COOKIES</h3>
    <p className="mb-4">
      &nbsp;a) Depending on the <strong>entity</strong>
      that manages them, there are own Cookies (those that are sent to the
      user's terminal equipment from a computer or domain managed by
      the editor itself and from which the service requested
      by the user is provided) and third-party cookies (those that are sent to the user's terminal equipment from a computer or domain that is not managed by the
      editor, but by another entity that processes the data obtained through
      cookies).
    </p>
    <p className="mb-4">
      b) Depending on the <strong>duration</strong>
      they remain active, there are session cookies (designed to request and
      store data while the user accesses a web page) and
      persistent cookies (in which the data is stored in the terminal and can
      be accessed and processed for a period defined by the
      cookie's controller - this can range from a few minutes to several years).
    </p>
    <p className="mb-4">
      &nbsp;c) Depending on the <strong>purpose</strong>
      for which they process the information they collect, they can be:
    </p>
    <p className="mb-4">
      -<strong>Technical Cookies</strong>
      (necessary for the use of the website and the provision of the
      <strong>contracted service),</strong>
    </p>
    <p className="mb-4">
      - <strong>Personalization Cookies</strong>
      (which allow the user to access the service with predefined
      characteristics, such as language, browser type, regional configuration, etc.)
    </p>
    <p className="mb-4">
      - <strong>Analysis Cookies</strong>
      (collect information on the use made of the website),
    </p>
    <p className="mb-4">
      - <strong>Advertising Cookies</strong>
      (collect information about the preferences and personal choices of
      users),
    </p>
    <p className="mb-4">
      - <strong>Affiliate Cookies</strong>
      (allow tracking of visits from other
      websites, with which the website establishes an affiliation contract).
    </p>
    <h3 className="text-2xl pt-8 pb-4">EXEMPT COOKIES:</h3>
    <p className="mb-4">
      &nbsp;• those that only allow communication between the user's
      computer and the network.
    </p>
    <p className="mb-4">
      • those strictly necessary to provide a service expressly
      requested by the user.
    </p>
    <p className="mb-4">
      &nbsp;Furthermore, the GT29, in its Opinion 4/201210, has interpreted that
      among the exempt cookies would be those that aim to:
    </p>
    <p className="mb-4">
      &nbsp;• "User entry" cookies (Session and user entry cookies are usually used to track user actions when filling out online forms across several pages, or as a shopping cart to track items that the user has selected by clicking a button)
    </p>
    <p className="mb-4">
      • User authentication or identification cookies (session only).
    </p>
    <p className="mb-4">
      • User security cookies (For example, cookies
      used to detect erroneous and repeated attempts to connect to
      a website)
    </p>
    <p className="mb-4">
      • Session multimedia player cookies.
    </p>
    <p className="mb-4">
      • Session cookies to balance the load.
    </p>
    <p className="mb-4">
      • User interface personalization cookies.
    </p>
    <p className="mb-4">
      • Certain plug-in cookies (plug-in) to exchange
      social content (The exception only applies to users who have
      decided to keep the session open)
    </p>
    <h3 className="text-2xl pt-8 pb-4">REVOCATION</h3>
    <p className="mb-4">
      At any time you can access the configuration of your browser
      accepting or rejecting all cookies, or select those
      whose installation is permitted and those that are not, following one of the
      following procedures, which depends on the browser you use:
    </p>
    <p className="mb-4">
      <strong>Google Chrome</strong> (in the Tools Menu):
    </p>
    <p className="mb-4">
      Settings&gt; Show advanced options&gt; Privacy
      (Content settings)&gt; Cookies:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=en"
        target="_blank"
      >
        https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=en
      </a>
    </p>
    <p className="mb-4">
      <strong>&nbsp;</strong>
    </p>
    <p className="mb-4">
      <strong>Microsoft Internet Explorer</strong>
      (in the Tools Menu):
    </p>
    <p className="mb-4">
      Internet Options&gt; Privacy&gt; Advanced:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
        target="_blank"
      >
        https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
      </a>
    </p>
    <p className="mb-4">
      <strong>&nbsp;</strong>
    </p>
    <p className="mb-4">
      <strong>Firefox:</strong>
    </p>
    <p className="mb-4">
      Options&gt; Privacy&gt; Cookies:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
        target="_blank"
      >
        https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
      </a>
    </p>
    <p className="mb-4">
      <strong>Safari, iPad and iPhone:</strong>
    </p>
    <p className="mb-4">
      Preferences&gt; Privacy
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.apple.com/kb/ph21411?locale=en_US"
        target="_blank"
      >
        https://support.apple.com/kb/ph21411?locale=en_US
      </a>
    </p>
    <p className="mb-4">
      <strong>Opera:</strong>
    </p>
    <p className="mb-4">
      Settings&gt; Options&gt; Advanced&gt; Cookies
    </p>
<p className="mb-4">
  <a
    rel="noopener noreferrer"
    href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=es"
    target="_blank"
  >
    https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=es
  </a>
</p>
<p className="mb-4">
  <strong>&nbsp;</strong>
</p>
<p className="mb-4">
  <strong>Microsoft Internet Explorer</strong> (in the Tools Menu):
</p>
<p className="mb-4">
  Internet Options&gt; Privacy&gt; Advanced:
</p>
<p className="mb-4">
  <a
    rel="noopener noreferrer"
    href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
    target="_blank"
  >
    https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
  </a>
</p>
<p className="mb-4">
  <strong>&nbsp;</strong>
</p>
<p className="mb-4">
  <strong>Firefox:</strong>
</p>
<p className="mb-4">
  Options&gt; Privacy&gt; Cookies:
</p>
<p className="mb-4">
  <a
    rel="noopener noreferrer"
    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
    target="_blank"
  >
    https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
  </a>
</p>
<p className="mb-4">
  <strong>Safari, iPad and iPhone:</strong>
</p>
<p className="mb-4">
  Preferences&gt; Privacy
</p>
<p className="mb-4">
  <a
    rel="noopener noreferrer"
    href="https://support.apple.com/kb/ph21411?locale=es_ES"
    target="_blank"
  >
    https://support.apple.com/kb/ph21411?locale=es_ES
  </a>
</p>
<p className="mb-4">
  <strong>Opera:</strong>
</p>
<p className="mb-4">
  Settings&gt; Options&gt; Advanced&gt; Cookies
</p>
<p className="mb-4">
  <a
    rel="noopener noreferrer"
    href="http://help.opera.com/Windows/12.00/es-ES/cookies.html"
    target="_blank"
  >
    http://help.opera.com/Windows/12.00/es-ES/cookies.html
  </a>
</p>
<p className="mb-4">
  These browsers are subject to changes or modifications, so we cannot guarantee that they fully comply with your browser version. You might also be using another browser not covered by these links such as Konqueror, Arora, Flock, etc. To avoid these mismatches, you can access directly from your browser options, usually in the "Options" menu in the "Privacy" section. (Please consult your browser's help for more information).
</p>
<h3 className="text-2xl pt-8 pb-4">
  DEACTIVATION / ACTIVATION AND DELETION OF COOKIES
</h3>
<p className="mb-4">
  To restrict or block cookies, it's done through the browser settings. If you do not want websites to place any cookies on your device, you can adapt your browser settings so that you're notified before any cookie is placed. Similarly, you can adapt the settings so that the browser rejects all cookies or only third-party cookies. You can also delete any of the cookies that are already on your device. Remember that you will need to adjust the settings separately for each browser and device you use.
</p>
<p className="mb-4">
  Remember that if you do not want to receive cookies, we can no longer guarantee that our website will function properly. Some functions of the site may be lost, and you might not be able to see certain websites. Moreover, rejecting cookies does not mean that you will no longer see advertisements. Simply the ads will not be tailored to your interests and will be repeated more frequently.
</p>
<p className="mb-4">
  Each browser has a different method to adjust the settings. If necessary, consult the browser's help function to set the correct configuration.
</p>
<p className="mb-4">
  To disable cookies on your mobile phone, consult the device's manual for more information.
</p>
<p className="mb-4">
  You can find out more about cookies on the Internet, <a href="http://www.aboutcookies.org/">http://www.aboutcookies.org/</a>.
</p>
<p className="mb-4">
  Given the way the Internet and websites work, we do not always have information on the cookies placed by third parties through our website. This is particularly true in cases where the webpage contains what are known as embedded elements: texts, documents, images, or short movies that are stored elsewhere but are displayed on our website or through it.
</p>
<p className="mb-4">
  Therefore, if you encounter such cookies on this website and they are not listed above, please let us know. Or directly contact the third party to ask for information about the cookies they place, their purpose and duration of the cookie, and how they have ensured your privacy.
</p>
<p className="mb-4">
  <strong>
    Who is responsible for the processing of your personal data?
  </strong>
</p>
<p className="mb-4">
  &nbsp;<strong>
    ASOCIACIÓN FAMILIAS HEGAZTI ESCUELA BOSQUE
  </strong>is responsible for the processing of personal data that you provide us, located at Carretera de Aras 6, 31230, Viana, Navarra, with CIF XXXZZZZX. Telephone 697 24 57 75 and contact email <a href="mailto:info@hegaztiescuelabosque.org">info@hegaztiescuelabosque.org</a>.
</p>
<p className="mb-4">
  <strong>For what purpose do we use your personal data?</strong>
</p>
<p className="mb-4">
  &nbsp;The information collected through our own cookies (session and user entry cookies) is usually used to track user actions when filling out online forms on various pages, or as a shopping cart to keep track of the items the user has selected by pressing a button, or to personalize the user interface when visiting the website.
</p>
<p className="mb-4">
  &nbsp;The information collected through third-party cookies is as follows:&nbsp;
</p>
<p className="mb-4">
  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Through analytical cookies, your browsing habits are analyzed to improve the services provided;
</p>
<p className="mb-4">
  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Through behavioral cookies, information about the user's preferences is collected to manage advertising spaces as effectively as possible; and
</p>
<p className="mb-4">
  -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; through advertising cookies, the performance of the ads is measured and product recommendations based on statistical data are provided.
</p>
<p className="mb-4">
  To see exactly the use of cookies, see the table on the use of cookies on this website.
</p>
<p className="mb-4">
  <strong>&nbsp;</strong>
</p>
<p className="mb-4">
  <strong>
    What is the legal basis for the processing of your personal data?
  </strong>
</p>
<p className="mb-4">
  The legitimacy for processing your personal data is given by your consent, granted at the time of contacting us, for the use of analytical, behavioral, and advertising cookies; for session or customization cookies, the legitimacy for processing is given by the legitimate interest of the provider (data controller).
</p>
<p className="mb-4">
  <strong>To whom do we communicate your data?</strong>
</p>
<p className="mb-4">
  Data will not be transferred or communicated to third parties, except by legal obligation or to the third parties indicated in the case of use of cookies managed by them.
</p>
<p className="mb-4">
  <strong>What is the retention period of your data?</strong>
</p>
<p className="mb-4">
  The retention period of the collected data is indicated in the table on the use of cookies on this website.
</p>
<p className="mb-4">
  <strong>What are your rights?</strong>
</p>
<p className="mb-4">
  The rights that protect the user are the rights of access, rectification,
  deletion, portability of the same, withdrawal of consent
  (without affecting the legality of the processing granted previously
  to its withdrawal), opposition to processing, limitation (under certain
  circumstances) and to file a complaint with the supervisory authority
  (the Spanish Data Protection Agency,
  <a href="https://www.aepd.es">www.aepd.es</a>).
</p>
      `,
    },
    legalPolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Legal Notice",
      },
      content: `
      <h1 className="hegazti-h1 py-8 text-left!">
      LEGAL NOTICE
  </h1>
  
  <p className="mb-4">
      In compliance with Article 10 of Law 34/2002 on Services of the Information Society and Electronic Commerce, we inform users of our data:
  </p>
  
  <p className="mb-4">
      Company Name: <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong>
  </p>
  <p className="mb-4">
      Registered Office: <strong>Aras Road 6, 31230, Viana, Navarra</strong>
  </p>
  <p className="mb-4">
      Tax ID (NIF): <strong>XXX</strong>
  </p>
  <p className="mb-4">
      Phone: <strong>669 575 406</strong>
  </p>
  <p className="mb-4">
      E-Mail: <strong>ingo@hegaztiescuelabosque.com</strong>
  </p>
  <p className="mb-4">
      Website: <a href="http://www.hegaztiescuelabosque.org"><strong>www.hegaztiescuelabosque.org</strong></a>
  </p>
  <p className="mb-4">
      Registration Details: <strong>This entity is registered in the Association Registry of Navarra Doc.2017/217491</strong>
  </p>
  <h3 className="text-2xl pt-8 pb-4">
      1. OBJECT
  </h3>
  <p className="mb-4">
      <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> (hereinafter also the provider), as the responsible party for the website, provides users with this document, which regulates the use of the website <strong>www.hegaztiescuelabosque.org</strong>. With this, we aim to comply with the obligations set forth in Law 34/2002 on Information Society Services and Electronic Commerce (LSSICE or LSSI) and inform all website users about the conditions of use of the website.
  </p>
  <p className="mb-4">
      Through the website, <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> provides users with access to and use of various services and content made available through the website.
  </p>
  <p className="mb-4">
      Anyone accessing this website assumes the role of a user (hereinafter the user) and implies full and unconditional acceptance of each and every provision included in this Legal Notice, as well as any other legal provisions that may be applicable.
  </p>
  <p className="mb-4">
      As users, you should carefully read this Legal Notice whenever you access the website, as it may undergo modifications. The provider reserves the right to modify any information that may appear on the website, without the obligation to notify or inform users of these obligations, with publication on the provider's website being sufficient.
  </p>
  <h3 className="text-2xl pt-8 pb-4">
      2. TERMS OF ACCESS AND USE OF THE WEBSITE
  </h3>
  <p className="mb-4">
      <strong>2.1. Free Nature of Access and Use of the Website</strong>
  </p>
  <p className="mb-4">
      The provision of services by <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> is free of charge for all users.
  </p>
  <p className="mb-4">
      <strong>2.2. User Registration</strong>
  </p>
  <p className="mb-4">
      In general, the provision of services does not require prior subscription or registration by users.
  </p>
  <p className="mb-4">
      <strong>2.3. Truthfulness of Information</strong>
  </p>
  <p className="mb-4">
      All information provided by the user must be truthful. In this regard, the user guarantees the authenticity of the data communicated through the forms for the subscription of services. It is the user's responsibility to keep all information provided to <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> continuously updated to reflect their actual situation. In any case, the user will be solely responsible for any false or inaccurate statements made and for any damages caused to the provider or third parties.
  </p>
  <p className="mb-4">
      <strong>2.4. Minors</strong>
  </p>
  <p className="mb-4">
      Minors must always obtain the prior consent of their parents, guardians, or legal representatives to use the services. The ultimate responsibility for determining specific content that minors may access lies with those responsible. Therefore, if minors access content on the Internet that is not suitable for them, mechanisms, in particular computer programs, filters, and blocks, should be established on their computers to limit the available content. Although they are not infallible, these measures are particularly useful for controlling and restricting materials that minors can access.
  </p>
  <p className="mb-4">
      <strong>2.5. Obligation to Use the Website Correctly</strong>
  </p>
  <p className="mb-4">
      The user agrees to use the website in accordance with the law and this Legal Notice, as well as with morality and good customs. Consequently, the user shall refrain from using the website for illicit or prohibited purposes, harmful to the rights and interests of third parties, or that may in any way damage, disable, overload, deteriorate, or prevent the normal use of computer equipment or documents, files, and all kinds of content stored on any computer equipment of the provider.
  </p>
  <p className="mb-4">
      In particular, but not exclusively, the user agrees not to transmit, disseminate, or make available to third parties information, data, content, messages, graphics, drawings, sound or image files, photographs, recordings, software, and, in general, any kind of material that:
  </p>
  <p className="mb-4">
      (A) is contrary to, disparages, or violates fundamental rights and public freedoms constitutionally recognized in international treaties and other current regulations;
  </p>
  <p className="mb-4">
      (B) induces, incites, or promotes criminal, denigratory, defamatory, violent, or, in general, actions contrary to the law, morality, and public order;
  </p>
  <p className="mb-4">
      (C) induces, incites, or promotes actions, attitudes, or thoughts that are discriminatory on the grounds of sex, race, religion, beliefs, age, or condition;
  </p>
  <p className="mb-4">
      (D) is contrary to the right to honor, personal or family privacy, or the image of people;
  </p>
  <p className="mb-4">
      (E) in any way harms the credibility of the provider or third parties; and
  </p>
  <p className="mb-4">
      (F) constitutes unlawful, deceptive, or unfair advertising.
  </p>
  
  <h3 className="text-2xl pt-8 pb-4">
      3. DISCLAIMER OF WARRANTIES AND LIABILITY
  </h3>
  <p className="mb-4">
      The provider disclaims any liability for the information published on our website, provided that this information has been manipulated or introduced by a third party unrelated to us.
  </p>
  <p className="mb-4">
      This website has been reviewed and tested to work correctly. In principle, it can be guaranteed to function properly 365 days a year, 24 hours a day. However, the provider does not rule out the possibility of certain programming errors, or that force majeure events, natural disasters, strikes, or similar circumstances may make it impossible to access the website.
  </p>
  <p className="mb-4">
      <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> does not provide any warranty and is not responsible, in any case, for damages of any kind that may arise from the lack of availability, maintenance, and effective operation of the website or its services and content; the existence of viruses, malicious or harmful programs in the content; illegal, negligent, fraudulent, or contrary to this Legal Notice and conditions of use; or the lack of legality, quality, reliability, usefulness, and availability of the services provided by third parties and made available to users on the website.
  </p>
  <p className="mb-4">
      The provider is not responsible under any circumstances for damages that may arise from the illegal or improper use of this website.
  </p>
  
  <h3 className="text-2xl pt-8 pb-4">
      4. COOKIES
  </h3>
  <p className="mb-4">
      The provider's website may use cookies (small information files that the server sends to the computer of the person accessing the page) to carry out certain functions that are considered essential for the proper functioning and visualization of the site. The cookies used are, in any case, temporary in nature, with the sole purpose of making navigation more efficient, and they disappear when the user's session ends. Under no circumstances will cookies be used to collect personal information. For more information, see our <a href="/politicadecookies"><span style="text-decoration:underline">Cookie Policy</span></a>.
  </p>
  
  <h3 className="text-2xl pt-8 pb-4">
      5. LINKS
  </h3>
  <p className="mb-4">
      From the website, it is possible to redirect to sponsored content, advertisements, and/or affiliate links and/or third-party websites.
  </p>
  <p className="mb-4">
      Among the links provided, there is the possibility of informing or referring to products and/or services from third parties. Since we cannot control the content introduced by third parties on the web, <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> assumes no responsibility for such content, nor does it guarantee the experience, integrity, or quality of their products. In any case, the provider states that it will proceed to immediate withdrawal of any content that may contravene national or international law, morality, or public order, and will immediately remove the redirection to these websites, informing the competent authorities of the content in question.
  </p>
  <p className="mb-4">
      <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> will have these links published until they are deleted or suspended by the provider or the advertiser, and it will not be responsible even if these ads may be indexed by other search engines unrelated to this website.
  </p>
  <p className="mb-4">
      The provider is not responsible for the information and content stored, including but not limited to forums, chats, blog generators, comments, social networks, or any other means that allows third parties to publish content independently on the provider's website. However, and in compliance with the provisions of articles 11 and 16 of the LSSICE, the provider is available to all users, authorities, and security forces and actively collaborates in the removal or, where necessary, blocking of all content that may affect or contravene national or international law, the rights of third parties, or morality and public order. In the event that the user believes that there may be content that could be classified as such, they are requested to notify the website administrator immediately.
  </p>
  <p className="mb-4">
      However, <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> informs you that any contractual or extracontractual relationship that the user formalizes with these third parties, affiliates, or advertisers through the link provided by this website will be valid only and exclusively between the user and the advertiser and/or third party, and <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> will have no responsibility for the damages or losses that may arise from the provision of services and/or contractual or extracontractual relationships between the user and the advertisers or third parties contacted through this portal, as the provider only acts as an intermediary or advertising medium.
  </p>
  <h3 className="text-2xl pt-8 pb-4">
            6.&nbsp;&nbsp;&nbsp;&nbsp; PERSONAL DATA PROTECTION
          </h3>
          <p className="mb-4">
            The provider is deeply committed to complying with personal data protection regulations and guarantees full compliance with the obligations set forth, as well as the implementation of security measures established in the European Data Protection Regulation and Spanish data protection regulations. For more information, see our <a href="/privacy-policy"><span style="text-decoration:underline">Privacy Policy.</span></a>
          </p>
          <h3 className="text-2xl pt-8 pb-4">
            7.&nbsp;&nbsp;&nbsp;&nbsp; INTELLECTUAL AND INDUSTRIAL PROPERTY
          </h3>
          <p className="mb-4">
            The website, including, but not limited to: programming, editing, compilation, and other elements necessary for its operation, designs, logos, texts, photographs, and/or graphics are the property of the provider or, where necessary, have the express license or authorization from the authors. All website content is duly protected by intellectual and industrial property regulations.
          </p>
          <p className="mb-4">
            Regardless of the purpose for which they were intended, total or partial reproduction, use, distribution, and public communication require prior written authorization from the provider. Any unauthorized use by the provider will be considered a serious breach of the intellectual or industrial property rights of the author.
          </p>
          <p className="mb-4">
            Designs, logos, text, and/or graphics not owned by the provider that may appear on the website belong to their respective owners, who are responsible for any possible disputes that may arise regarding them. In any case, the provider has the express and prior authorization from them.
          </p>
          <p className="mb-4">
            The provider recognizes the corresponding industrial and intellectual property rights in favor of their owners, with no implication of the existence of rights or responsibility of the provider on the website, nor does it imply endorsement, sponsorship, or recommendation by the provider.
          </p>
          <p className="mb-4">
            To report any possible violations of intellectual or industrial property rights, as well as any of the website's content, you can do so through the email address mentioned above.
          </p>
          <h3 className="text-2xl pt-8 pb-4">
            8.&nbsp;&nbsp;&nbsp;&nbsp; APPLICABLE LAW AND JURISDICTION
          </h3>
          <p className="mb-4">
            For the resolution of disputes or issues related to this website or the activities carried out on it, Spanish law shall apply, to which the parties expressly submit, with the Courts and Tribunals of Navarre being competent to resolve all conflicts arising from or related to its use.
          </p>
      `,
    },
    privacyPolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Privacy Notice",
      },
      content: `
      <h1 className="hegazti-h1 text-left! py-8">
      PRIVACY POLICY
    </h1>
    <h3 className="text-2xl pt-8 pb-4">INTRODUCTION</h3>
    <p className="mb-4">
      Your privacy is important to us, so through this document, we explain what data we collect from users, how we use it, and for what purposes, among other instructions. Users over 14 years of age can register without the prior consent of their parents, guardians, or legal representatives. In the case of minors under 14 years of age or identified as "legally incapable," we will always require parental consent or the consent of the guardian/representative.
    </p>
    <p className="mb-4">
      For your information, we will never request more information than is necessary for the required services; we will never share it with third parties, except by legal obligation or with your prior authorization; and we will never use your data for purposes other than those previously indicated.
    </p>
    <p className="mb-4">
      As users, you should carefully read this Privacy Policy regularly, and every time you enter your personal data since this document may undergo modifications as the provider may modify any information that may appear on the website to comply with regulations or update the policy, without the obligation to give notice or inform users of these obligations, with publication on the provider's website being sufficient.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      DATA CONTROLLER:
    </h3>
    <p className="mb-4">
      Identity:<strong>
        &nbsp;HEGAZTI FAMILY ASSOCIATION
      </strong>(also the provider)
    </p>
    <p className="mb-4">
      VAT ID:<strong>
        G26525329&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </strong>
    </p>
    <p className="mb-4">
      Address:<strong>
        &nbsp;Aras Road 6, 31230, Viana, Navarra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </strong>
    </p>
    <p className="mb-4">
      Email:<strong>
        &nbsp;info@hegaztiescuelabosque.org
      </strong>
    </p>
    <p className="mb-4">
      <strong>
        HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION
      </strong>, as the responsible party for the website, in accordance with Regulation (EU) 2016/679 of April 27, 2016 (GDPR) regarding the protection of individuals with regard to the processing of personal data and the free movement of such data and other current regulations on the protection of personal data, as well as Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), informs you that it has implemented the necessary security measures, of a technical and organizational nature, to guarantee and protect the confidentiality, integrity, and availability of the data entered.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      METHOD OF DATA COLLECTION AND DATA WE COLLECT:
    </h3>
    <p className="mb-4">
      The data we collect and how we obtain it is as follows:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          through the contact form: name, email
        </p>
      </li>
      <li>
        <p className="mb-4">
          through the reservation form: name, ID, phone, email
        </p>
      </li>
    </ol>
    <p className="mb-4">
      No special categories of data are processed.
    </p>
    <h3 className="text-2xl pt-8 pb-4">PURPOSE OF PROCESSING:</h3>
    <p className="mb-4">
      Your personal data will only be used for the following purposes, with your consent for each of the purposes in the corresponding section of the website:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          <strong>contact form:</strong> to respond to inquiries and/or provide information requested by the User;
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>reservation form:</strong> to request the services we offer on the website.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>WhatsApp</strong>: the processing of data carried out on individuals who make an inquiry through WhatsApp from <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> will be governed by this section, as well as any conditions of use, privacy policies, and access regulations belonging to the application that apply in each case and have been previously accepted by the user. <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> will process your data for the purpose of correctly managing your inquiry and any other administrative purpose of the service. The use of WhatsApp from <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> for sending content other than what is necessary for responding to the inquiry and that is illegal under national or international regulations that violate the fundamental rights of individuals, as well as principles of legality, honesty, responsibility, protection of privacy, consumer protection, and intellectual and industrial property rights, is prohibited.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Other purposes</strong>:
        </p>
        <ul data-rte-list="default">
          <li>
            <p className="mb-4">
              Perform commercial, administrative, tax, and accounting management required by current legislation;
            </p>
          </li>
          <li>
            <p className="mb-4">
              Gather opinions and improve the services provided on the website;
            </p>
          </li>
          <li>
            <p className="mb-4">
              Conduct usability analysis of the website through cookies (mentioned in the cookie policy);
            </p>
          </li>
          <li>
            <p className="mb-4">
              Social media: the use of social media is specified in the corresponding section.
            </p>
          </li>
        </ul>
      </li>
    </ol>
    <p className="mb-4">
      The photographs posted on the website are the property of <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong>, including those of minors, for which the prior consent of the parents, guardians, or legal representatives has been obtained through the forms completed by the centers to which the minors belong. However, parents, guardians, or legal representatives of minors, as the holders of their rights, can indicate their refusal to use the image of the minor at any time, provided they do so in writing. In this case, the image will be pixelated.
    </p>
    <p className="mb-4">
      You can revoke your consent at any time by sending a letter to the registered office at Aras Road 6, 31230, Viana, Navarra, with the subject line "Refusal/Withdrawal of Consent."
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      LEGITIMACY OF DATA PROCESSING:
    </h3>
    <p className="mb-4">
      The legal basis for processing your data is:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          the consent of the interested party.
        </p>
      </li>
      <li>
        <p className="mb-4">
          the execution of the contract for the sale of products or provision of services.
        </p>
      </li>
    </ol>
    <p className="mb-4">
      The prospective or commercial offer of products and services is based on the consent requested, without in any case the withdrawal of this consent affecting the execution of the contract for the sale of products and provision of services.
    </p>
    <p className="mb-4">
      In addition, the data subject has the right to withdraw their consent at any time, without affecting the legality of the processing based on the consent prior to withdrawal.
    </p>
    <p className="mb-4">
      To revoke this consent, you can contact us through the means provided in this document.
    </p>
    <p className="mb-4">
      The provision of personal data required for carrying out the aforementioned purposes is mandatory, as it is necessary to provide the services requested by the user. Failure to provide the requested personal data or failure to accept this data protection policy means that it is impossible to subscribe, register, or receive information about these services.
    </p>
    <p className="mb-4">
      In cases where there is a prior contractual relationship between the parties, the legitimacy of processing the data for administrative, tax, accounting, and labor purposes is based on the legitimate interest of the Party responsible for processing the data. The data will not be transferred to third parties, except in cases where there is a legal obligation to do so.
    </p>
    <h3 className="text-2xl pt-8 pb-4">RECIPIENTS:</h3>
    <p className="mb-4">
      The data will not be transferred to third parties, except for any legal obligation. However, your data may be processed by third-party service providers who, as data processors, provide their services to HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION, with whom the corresponding data processing contract has been signed in accordance with article 28 of the GDPR. Providers who provide services to HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION are in charge of processing the data in order to provide the following services: web hosting, information request management, and reservation management. The servers of these service providers are located within the European Union.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      RIGHTS:
    </h3>
    <p className="mb-4">
      The data subject may exercise the following rights:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          Right to request access to personal data related to the data subject.
        </p>
      </li>
      <li>
        <p className="mb-4">
          Right to request rectification or deletion (right to be forgotten) of personal data.
        </p>
      </li>
      <li>
        <p className="mb-4">
          Right to request limitation of data processing.
        </p>
      </li>
      <li>
        <p className="mb-4">
          Right to object to data processing.
        </p>
      </li>
      <li>
        <p className="mb-4">
          Right to data portability.
        </p>
      </li>
      <li>
        <p className="mb-4">
          Right not to be subject to automated individual decision-making, including profiling.
        </p>
      </li>
    </ol>
    <p className="mb-4">
      To exercise your rights, you can do so through the following means: info@hegaztiescuelabosque.org. When your rights are exercised, you must provide a copy of your ID or a document that proves your identity.
    </p>
    <p className="mb-4">
      The exercise of these rights is free of charge.
    </p>
    <p className="mb-4">
      You also have the right to file a complaint with the competent supervisory authority if you believe that your rights have been violated in relation to the processing of your personal data (agpd.es).
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      SECURITY OF YOUR PERSONAL DATA
    </h3>
    <p className="mb-4">
      In order to protect your personal data, we take all reasonable precautions and follow best practices in the industry to prevent the loss, misuse, access, disclosure, alteration, or destruction of your personal data.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      UPDATING YOUR INFORMATION:
    </h3>
    <p className="mb-4">
      In order to keep your personal information up-to-date, it is important that you inform us whenever there has been any change in it. Otherwise, we cannot be held responsible for its veracity.
    </p>
    <p className="mb-4">
      We are not responsible for the privacy policy regarding personal data that you may provide to third parties through the links available on our website.
    </p>
    <p className="mb-4">
      This Privacy Policy may be modified to adapt it to changes that occur on our website, as well as legislative or jurisprudential changes on personal data that appear, so it requires reading it, each time you provide your data through this website.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      COMMERCIAL EMAILS:
    </h3>
    <p className="mb-4">
      According to the LSSICE, <strong>HEGAZTI FAMILY FOREST SCHOOL ASSOCIATION</strong> does not carry out SPAM practices, so it does not send commercial emails that have not been previously requested or authorized by the User. Consequently, in all the communication received from the provider, the User has the possibility of canceling their express consent to receive our communications.
    </p>
    <p className="mb-4">
      We will not process your personal data for any purpose other than those described except for legal obligation or judicial requirement.
    </p>
    <p className="mb-4">
      You will not be subject to decisions based on automated processing that produce effects on your data.
    </p>
    <p className="mb-4">&nbsp;</p>
    <h3 className="text-2xl pt-8 pb-4">
      LEGITIMACY OF PROCESSING
    </h3>
    <p className="mb-4">
      The legal basis for data processing is your consent given when providing your data in the respective form for the stated purposes, at the time of checking the verification box.
    </p>
    <p className="mb-4">
      Failure to provide the requested personal data or not accepting this privacy policy implies the impossibility of achieving the previously described purposes. In cases where there is a previous contractual relationship between the parties, legitimacy for the development of administrative, tax, accounting, and labor obligations required by current legislation will be {" "}
      <strong>the prior existence of the commercial relationship</strong>{" "}
      established between the parties.
    </p>
    <p className="mb-4">
      The prospective or commercial offer of products and services is based on the consent requested, and the withdrawal of this consent will not affect the execution of the subscription contract in any case.
    </p>
    <p
      class=""
      data-rte-preserve-empty="true"
      style="white-space:pre-wrap;"
    >
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      DATA RETENTION PERIOD
    </h3>
    <p className="mb-4">
      Your data will be retained for the duration of the commercial relationship with us or when you exercise your right to cancellation, opposition, or limitation of processing. However, we will retain your data as legally required by applicable regulations.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      RECIPIENTS OF TRANSFERS OR TRANSFERS
    </h3>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      does not carry out any data transfer or communication, either within or outside the EU. The provider will only provide information to the law enforcement authorities under a court order or legal obligation, without prejudice to the ability to block or cancel your account if there are indications of any criminal activity by the user. The information provided will be only what the provider has at that time.
    </p>
    <p className="mb-4">
      The information you provide through this website will be hosted on the servers of{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>, contracted with SQUARESPACE IRELAND LTD with VAT number 3041081MH and address at Le Pole House Ship Street Great, Dublin 8, Ireland, which provides web hosting services. The processing of the entity's data is regulated by a data processor contract between the provider and this company.
    </p>
    <p className="mb-4">
      Additionally, the provider uses certain tools to provide necessary services for the activity, which may involve storing your data. These tools are as follows:
    </p>
    <p className="mb-4">
      <strong>Google Analytics</strong>: to perform analysis and metrics of user usage of the website through cookies. The information generated and collected by these cookies about usage (including IP address) will be directly transmitted and stored by Google Inc., located in Delaware, 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States ("Google"), on its servers in the United States.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      RIGHTS OF INTERESTED PARTIES
    </h3>
    <p className="mb-4">
      As a user-interested party, you can request the exercise of the following rights before{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong> by submitting a written request to the postal address in the heading or by sending an email to info@hegaztiescuelabosque.org, indicating "DATA PROTECTION: RIGHTS OF THE AFFECTED" as the subject, and attaching a photocopy of your ID or any legally equivalent means, as indicated by law. Rights:
    </p>
    <ul data-rte-list="default">
      <li>
        <p className="mb-4">
          <strong>Right of access:</strong>{" "}
          allows the interested party to know and obtain information about their personal data subject to processing.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Right to rectification or deletion</strong>: allows for the correction of errors and modification of data that are found to be inaccurate or incomplete.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Right to cancellation</strong>: allows for the deletion of data that is inadequate or excessive.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Right to object</strong>: the right of the interested party not to have their personal data processed or to cease processing.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Limitation of processing</strong>: involves marking personal data that is retained in order to limit its future processing, for the exercise or defense of claims.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Data portability</strong>: provision of data subject to processing to the interested party, so that they can transmit it to another data controller without hindrance.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>
            Right not to be subject to automated individual decisions (including profiling)
          </strong>: the right not to be subject to a decision based solely on automated processing that produces legal effects or significantly affects the individual.
        </p>
      </li>
    </ul>
    <p className="mb-4">
      As a user, you have the right to withdraw your consent at any time. The withdrawal of consent will not affect the legality of the processing carried out before the withdrawal of consent.
    </p>
    <p className="mb-4">
      You also have the right to lodge a complaint with the supervisory authority if you believe that your data protection rights have been violated (aepd.es).
    </p>
    <h3 className="text-2xl pt-8 pb-4">ADDITIONAL INFORMATION</h3>
    <p className="mb-4">
      <strong>SECURITY MEASURES:</strong>
    </p>
    <p className="mb-4">
      The data you provide to us will be treated confidentially. The provider has implemented all necessary technical and organizational measures and protection levels to ensure data security and prevent its alteration, loss, theft, processing, or unauthorized access, in accordance with the state of technology and the nature of the stored data. Likewise, it is also guaranteed that the processing and recording in files, programs, systems, or equipment, premises, and centers comply with the requirements and conditions of integrity and security established by current regulations.
    </p>
    <p className="mb-4">
      <strong>LANGUAGE</strong>
    </p>
    <p className="mb-4">
      The applicable language for this privacy policy is Spanish. Therefore, in case of any contradiction in any of the versions provided in other languages, the Spanish version will prevail.
    </p>
    <p className="mb-4">
      <strong>SOCIAL MEDIA</strong>
    </p>
    <p className="mb-4">
      We inform you that{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      may have a presence on social media. The processing of data carried out on people who become followers on social media (and/or perform any link or connection action through social media) of the official pages of{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong> will be governed by this section, as well as by the terms of use, privacy policies, and access regulations that belong to the respective social network and have been previously accepted by the user.
    </p>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      will process your data for the purposes of managing its presence on the social network correctly, informing about activities, products, and services of the provider, as well as for any other purpose that social network regulations allow.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      The publication of content is prohibited:
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - That are allegedly illegal under national, community, or international regulations or that engage in allegedly illegal activities or contravene the principles of good faith.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - That infringe on the fundamental rights of individuals, lack courtesy on the internet, bother or may generate negative opinions in our users or third parties, and in general, any content that{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong> considers inappropriate.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - And, in general, content that contravenes the principles of legality, honesty, responsibility, protection of human dignity, protection of minors, protection of public order, protection of private life, protection of consumers, and intellectual and industrial property rights.
    </p>
    <p className="mb-4">
      Likewise,{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      reserves the right to remove, without prior notice, any content from the website or corporate social network that is considered inappropriate.
    </p>
    <p className="mb-4">
      In any case, if you send personal information through the social network,{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      will be exempt from any liability related to the security measures applicable to this platform, and the user, if they want to know them, must consult the corresponding specific conditions of the respective network.
    </p>
    <p className="mb-4">
      <strong>CHANGES TO THIS PRIVACY POLICY</strong>
    </p>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      reserves the right to modify this policy to adapt it to legislative or jurisprudential developments.
    </p>
    <p className="mb-4">
      <strong>REVOCABILITY</strong>
    </p>
    <p className="mb-4">
      The consent given, both for processing and for the transfer of data of interested parties, is revocable at any time by communicating it to{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      in the terms established in this Policy for the exercise of rights. This revocation will not have retroactive effect.
    </p>
    <p className="mb-4">
      <strong>LEGISLATION</strong>
    </p>
    <p className="mb-4">
      In general, the relationships between{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      and the Users of its telematic services, present on this website, are subject to Spanish legislation, to which the parties expressly submit, with the Courts and Tribunals of Navarra being competent to resolve all conflicts arising from or related to their use.
    </p>
      `,
    },
    footer: {
      whereAreWe: "WHERE WE ARE LOCATED",
      whereAreWeExtended:
        "We are located in the Valdearas area, 1 kilometer from Viana and 9 km from Logroño.",
      timeTableTitle: "Forest School Schedule:",
      timeTableText: "Monday to Friday from 9:00 AM to 2:00 PM.",
      priceTableTitle: "Rates for the 2023/2024 School Year:",
      priceTableText1: "Full-time (25 hours/week): €350 per child.",
      priceTableText2: "Reduced rate (15 hours/week): €250 per child.",
      priceTableText3: "Super reduced rate (10 hours/week): €150 per child.",
      priceTableText4: "Single days: €20 per day.",
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
      cookiePolicy: {
        url: "legal-cookie-policy",
        text: "Cookie Policy",
      },
      privacyPolicy: {
        url: "legal-privacy-policy",
        text: "Privacy Policy",
      },
      legal: {
        url: "legal-notice",
        text: "Legal Notice",
      },
      contact: "Contact",
      contactWithUs: "CONTACT WITH US",
    },
  },
};

const spanish = {
  translation: {
    menu: {
      forestAsClassroom: {
        text: "El bosque como aula",
        daytimeMother: {
          url: "aula-madre-de-dia",
          text: "Madre de día",
        },
        childhoodClass: {
          url: "aula-infantil",
          text: "Infantil",
        },
        primarySchool: {
          url: "primary-school",
          text: "Primaria",
        },
        extracurricularActivitiesPlayRoom: {
          url: "aula-extraescolares-ludoteca",
          text: "Extraescolares - Ludoteca",
        },
        extracurricularActivitiesSaturdays: {
          url: "//",
          text: "Extraescolares - Sábados en familia",
        },
      },
      whoWeAre: {
        text: "Quiénes somos",
        project: {
          url: "quienes-somos-proyecto",
          text: "Proyecto",
        },
        natureSpaces: {
          url: "quienes-somos-espacios",
          text: "Naturaleza y espacios",
        },
        aDayInHegazti: {
          url: "quienes-somos-hegazti",
          text: "Un día en Hegazti",
        },
        faqs: {
          url: "quienes-somos-faqs",
          text: "Preguntas frecuentes",
        },
      },
      contact: {
        url: "mas-informacion",
        text: "Contacto",
      },
      extracurricularActivities: {
        url: "extraescolares-2023-2024",
        text: "Extraescolares",
      },
      blog: {
        url: "//blog.hegaztiescuelabosque.org",
        text: "Blog",
      },
      scholarCalendar: {
        url: "//docs.google.com/document/d/1Dk-Hd-NI8Y8oh9TxotYUyBzqWnu9dXUMpjkJ1dkAsCY/edit?usp=sharing",
        text: "Calendario escolar",
      },
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
        traido a Hegazti. Comparto con la Bosque escuela Hegazti
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
    whoWeAreProject: {
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
    whoWeAreSpaces: {
      header: {
        title: "Hegazti Escuela Bosque | Quienes Somos - Naturaleza y espacios",
        meta: {
          description: {
            content:
              "Este texto explica la importancia del contacto con la naturaleza en la infancia temprana y cómo esto puede influir en el desarrollo físico, emocional y espiritual de los niños. Se enfatiza en cómo la naturaleza ofrece espacios de calidad para el movimiento y la percepción sensorial que son difíciles de reproducir en otros entornos, y cómo el contacto frecuente con la naturaleza genera un sentido de identidad y pertenencia que fomenta actitudes y comportamientos de respeto al entorno. También se destaca cómo el juego en la naturaleza estimula la curiosidad, la imaginación, la creatividad, el lenguaje y la motricidad de los niños. Además, se mencionan los múltiples beneficios para la salud que se derivan del contacto con la naturaleza. Se proporciona una referencia bibliográfica para ampliar la información.",
          },
        },
      },
      hero: {
        claim: "NATURALEZA Y ESPACIOS",
        subClaim: "Aprender jugando en contacto con la naturaleza",
      },
      section: {
        saying:
          "Hay un libro abierto siempre para todos los ojos: la naturaleza.",
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
          `,
      },
      cardList: {
        alt1: "Juegos Conjuntos",
        alt2: "Grupos de Niños",
        alt3: "Niños y Caballos",
        alt4: "Escalando la montaña",
        alt5: "Explorando el riachuelo",
        alt6: "Pastoreando",
        alt7: "Juegos de hojas",
        alt8: "Yurta",
      },
    },
    whoWeAreADayInHegazti: {
      header: {
        title: "Hegazti Escuela Bosque | Quienes Somos - Un día en Hegazti",
        meta: {
          description: {
            content:
              "La Escuela Bosque Hegazti es un lugar especializado en educación infantil, con cuatro áreas diferenciadas por edad, cada una con una dinámica diferente en la que los niños aprenden jugando en contacto con la naturaleza. El enfoque principal es el aprendizaje basado en proyectos y las actividades al aire libre en un entorno natural, ofreciendo a los niños la oportunidad de explorar y descubrir el mundo a través de su propia curiosidad.",
          },
        },
      },
      hero: {
        claim: "UN DIA EN HEGAZTI",
        subClaim: "Descubre nuestro dia a dia en la escuela",
      },
      introduction: `
      <strong>Escuela Bosque Hegazti</strong>
      tiene cuatro espacios diferenciados por edad y por lo tanto cuatro
      dinámicas diferentes en cuanto a la experiencia del día a día.
      `,
      section1: {
        title: "Un día en la Casita Abejorro (0 a 3 años)",
        text: `
          <p className={tw("mb-4")}>
            La Casita Abejorro es un espacio cálido, de calma, respeto, cuidado,
            confianza y seguridad.
          </p>
          <p className={tw("mb-4")}>
            Los/as abejorros llegan, y el primer espacio sería de bienvenida,
            contacto y conexión con cada persona.
          </p>
          <p className={tw("mb-4")}>
            El sigueinte momento es libre movimiento por el espacio interior o si
            es oportuno por el espacio exterior, aquí nos centramos en seguir sus
            ritmos y facilitar el movimiento espontáneo además de acompañarles en
            la exploración de los materiales.
          </p>
          <p className={tw("mb-4")}>
            El último espacio sería el momento de la lectura, el cuento y la
            relajación para cerrar la mañana.
          </p>
        `,
        imgCaption: "Casita Abejorro",
      },
      section2: {
        title: "Un día en la Casita del Bosque (3 a 6 años)",
        imgCaption: "Casita del Bosque",
        text: `
            <p className={tw("mb-4")}>
            La casita del Bosque en el día a día es un espacio confortable.
          </p>
          <p className={tw("mb-4")}>
            En el inicio del día está nuestro espacio de encuentro, donde todas y
            todos podemos tener nuestra bienvenida y nuestro tiempo para compartir
            nuestros sentires y organizar nuestro día.
          </p>
          <p className={tw("mb-4")}>
            Preparamos lo necesario y salimos a nuestro Camino de Aprendizaje, con
            nuestras, lupas, cestas, cuerdas o lo que sea que necesitamos hoy….
          </p>
          <p className={tw("mb-4")}>
            Cuando llegamos a nuestro lugar elegido en el día de hoy almorzamos en
            nuestras cabañas, jugamos a lo que imaginamos, ponemos nuestras
            reglas, nos divertimos, a veces nos pasan cosas y también las
            arreglamos.
          </p>
          <p className={tw("mb-4")}>
            Aquí en este espacio del bosque hacemos nuestra actividad del día a
            veces recolectamos, a veces investigamos, otras construimos, en
            ocasiones descubrimos…
          </p>
          <p className={tw("mb-4")}>
            Volvemos a la Escuela cargadas/os de energía, de sol de lluvia, de
            barro, a veces de palos, piñas, hojas, plumas, o lo que hayamos
            encontrado…
          </p>
          <p className={tw("mb-4")}>
            Tenemos en la Yurta nuestros materiales de arte, cada una/o elige que
            hacer….
          </p>
          <p className={tw("mb-4")}>
            Y nuestra mañana se cierra con nuestro espacio de cuento que creamos
            entre todas/os o a veces cada uno/a cuenta su propio cuento del día…
          </p>
          <p className={tw("mb-4")}>
            Los viernes son un día especial en la escuela hacemos tareas, cuidamos
            de los animales que viven con nosotras/os, recogemos huevos, plantas,
            cuidamos y trabajamos el huerto, hacemos jabón, limpiamos el espacio,
            a veces salimos con cestas a recoger la basura del bosque o paseamos
            con las yeguas.
          </p>
        `,
      },
      section3: {
        title: "Un día en la Casita del Árbol (6 a 9 años)",
        text: `
            <p className={tw("mb-4")}>
            En la Casita de Árbol se aprenden muchas cosas.
          </p>
          <p className={tw("mb-4")}>
            En el comienzo del día nos encontramos, compartimos cómo llegamos, qué
            vamos a hacer en el día de hoy tomamos decisiones, hacemos acuerdos.
          </p>
          <p className={tw("mb-4")}>
            Hacemos la actividad de concentración dentro de la escuela, cada día
            tenemos una diferente a veces la hacemos juntos y otras cada uno/a
            tiene una actividad diferente.
          </p>
          <p className={tw("mb-4")}>
            Salimos a fuera a jugar en la naturaleza y a hacer nuestro almuerzo.
          </p>
          <p className={tw("mb-4")}>
            Cogemos las mochilas de exploradores y vamos al lugar del día
            caminando, durante el camino encontramos muchas cosas curiosas que nos
            interesan y que nos generan preguntas…
          </p>
          <p className={tw("mb-4")}>
            Cuando regresamos tenemos nuestro espacio de lectura, arte, o
            manualidades…
          </p>
          <p className={tw("mb-4")}>
            Y por último nos reunimos para compartir cómo ha ido el día que cosas
            nos han interesado, como podríamos saber aquello que nos preguntamos,
            resolver preguntas, inquietudes, acordamos que tarea tiene cada una/o
            de que nos vamos a ocupar para resolver estas dudas.
          </p>
          <p className={tw("mb-4")}>
            En la escuela los lunes y los viernes hacemos tareas, cuidamos de los
            animales que viven con nosotras/os, recogemos huevos, plantas,
            cuidamos y trabajamos el huerto, hacemos jabón, limpiamos el espacio,
            a veces salimos con cestas a recoger la basura del bosque o paseamos
            con las yeguas. Y además coicidimos con los demás compañeros de la
            escuela.
          </p>
        `,
        imgCaption: "Casita del Árbol",
      },
      section4: {
        title: "Un día en el Nido del Pájaro (9 a 12 años)",
        text: `
            <p className={tw("mb-4")}>
            El Nido del pájaro es un lugar donde nos preparamos para volar.
          </p>
          <p className={tw("mb-4")}>
            En la llegada nos recibimos, nos encontramos y compartimos sentires,
            intereses, sueños y curiosidades. También hacemos nuestra elección del
            proyecto del día.
          </p>
          <p className={tw("mb-4")}>
            Tenemos espacio para preparar aquello que necesitamos para nuestro
            proyecto de hoy, a veces nuestro poryecto dura semanas….depende de
            cuanto nos interese. Planificamos, organizamos, hacemos acopio de
            material, hacemos previsiones, y cuando estamos preparadas/os salimos
            a fuera.
          </p>
          <p className={tw("mb-4")}>
            Ahora nos toca poner en práctica o realizar aquello que hemos
            decidido, anotar también lo que hemos creido oportuno o lo que de
            repente se nos ocurre, a veces nos sale como esperábamos y en otras
            ocasiones nada sale como penábamos….cuando terminamos por hoy volvemos
            dentro.
          </p>
          <p className={tw("mb-4")}>
            Nuestros espacios de juego libre, de disfrute, conversación, calma o
            lectura, los acordamos cada día y cada día suelen ser distintos
            depende del proyecto que tengamos.
          </p>
          <p className={tw("mb-4")}>
            Aquí anotamos, hacemos reformulaciones, preguntas, vemos lo que
            necesitamos, lo que ha fallado, analizamos variables, y acordamos como
            continuar o cómo cerrar y dejar constancia de nuestros resultados.
          </p>
          <p className={tw("mb-4")}>
            Tenemos nuestro espacio libre de arte, o taller el que elijamos…
          </p>
          <p className={tw("mb-4")}>
            Durante la semana tenemos responsabilidades o tarea en la escuela lo
            hacemos al final de la mañana, puede ser, cuidar de los animales,
            trabajar en el huerto, ayudar con las tareas de mantenimiento…
          </p>
          <p className={tw("mb-4")}>
            Los viernes son un día especial elegimos que cosas queremos aprender
            fuera de la escuela, y ese día vamos a compartir con otras personas en
            sus oficios un espacio de aprendizaje-trabajo.
          </p>  
        `,
        imgCaption: "Nido del Pájaro",
      },
    },
    whoWeAreFaqs: {
      header: {
        title: "Hegazti Escuela Bosque | Quienes Somos - Preguntas frecuentes",
        meta: {
          description: {
            content:
              "Somos una escuela bosque que ofrece un enfoque educativo basado en el contacto con la naturaleza y el aprendizaje a través de la experiencia. Nuestro horario es de lunes a viernes de 9.00 a 14.00, y los grupos tienen diferentes ratios de acompañantes por persona. Para asistir a la escuela, se recomienda usar ropa cómoda y tener botas de agua y chubasquero en caso de lluvia. Contamos con un seguro de responsabilidad civil y un seguro laboral para los acompañantes. Los alumnos/as traen su propia comida. Pasamos la mayoría del tiempo afuera, aunque se valoran las condiciones climáticas y físicas del grupo. Las visitas a la escuela se hacen con cita previa. Las normas y límites son construidos por el grupo y se enfatiza la importancia de cuidarse y cuidar a los demás. Aunque existen riesgos al jugar en el bosque, se minimizan al máximo mediante el acompañamiento y el desarrollo de habilidades en el medio.",
          },
        },
      },
      hero: {
        claim: "PREGUNTAS FRECUENTES",
        subClaim: "Todo lo que necesitas saber",
      },
      faq1: {
        question: "¿Cuál es el horario?",
        answer: `
          <p className={tw("mb-4")}>
            El horario de la escuela es de 9.00 a 14.00 de lunes a viernes.
          </p>.
          `,
      },
      faq2: {
        question: "¿Cuál es el precio de la escuela?",
        answer: `
        <p className={tw("mb-4")}>
          El precio de la escuela es de:
        </p>.
        <p className={tw("mb-4")}>
          350€ al mes, jornada completa (25 horas/semana).
        </p>
        <p className={tw("mb-4")}>
          250€ por niño, tarifa reducida (15 horas/semana).
        </p>
        <p className={tw("mb-4")}>
        150€ por niño, tarifa super reducida (10 horas/semana).
        </p>
        <p className={tw("mb-4")}>
        Y finalmente, días sueltos: 20€ por día.
        </p>
        <p className={tw("mb-4")}>
        En función de las problematicas de cada familia estamos abiertos a hablar de las tarifas, pudiendo aportarse en trabajos comunitarios u actividades en beneficio de los niños y la escuela.
        </p>
        `,
      },
      faq3: {
        question: "¿Cuál es el ratio en cada grupo?",
        answer: `
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
        `,
      },
      faq4: {
        question:
          "¿Se necesita ropa especial para ir a una escuela bosque?¿Y si llueve?",
        answer: `
          <p className={tw("mb-4")}>
          Necesitamos ropa cómoda, zapatillas y botas de agua, chubasquero y
          tener ropa de recambio siempre para cada persona en la escuela.
           </p>
        `,
      },
      faq5: {
        question: "¿Hay algún seguro?",
        answer: `
            <p className={tw("mb-4")}>
            Hay un seguro de responsabilidad civíl que cubre a los niños/as de
            la escuela y otro recurso específico para las acompañantes que es un
            seguro laboral.
          </p>
        `,
      },
      faq6: {
        question: "¿Y la comida?",
        answer: `
          <p className={tw("mb-4")}>
            El almuerzo en el caso de los/as más mayores los lleva la familia y
            la comida en el caso de los más pequeños/as igualmente lo aporta la
            familia, no hacemos servicio de comida.
          </p>
        `,
      },
      faq7: {
        question: "¿Cuánto tiempo están afuera? ¿y en invierno?",
        answer: `
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
        `,
      },
      faq8: {
        question: "¿Se puede hacer una visita a la escuela para conocerla?",
        answer: `
          <p className={tw("mb-4")}>
            Se puede visitar la escuela siempre con cita y contacto previo.
          </p>
          `,
      },
      faq9: {
        question: "¿Qué normas y límites hay en la escuela bosque?",
        answer: `
           <p className={tw("mb-4")}>
            Las normas las construye el grupo, una norma clara de la escuela es
            cuidarse y cuidar. Hay otras normas del espacio que se delimitan
            claramente para conservar la seguridad de las personas. Hay límites
            naturales y consecuencias naturales.
          </p>
        `,
      },
      faq10: {
        question: "¿No es peligroso que los niños jueguen en el bosque?",
        answer: `
          <p className={tw("mb-4")}>
            En el bosque puede haber riesgos sin embargo a medida que tiene
            contacto con él, experiencias y comprenden los límites y desarrollan
            las habilidades en el medio, los riesgos descienden y el
            acompañamiento en este caso es esencial. Todos los riesgos no
            desaparecen, pero se minimizan al máximo.
          </p>
        `,
      },
      moreQuestionsHeadline: "¿Tienes alguna otra pregunta o consulta?",
      moreQuestionsText:
        "No dudes en ponerte en contacto con nosotros que estaremos encantados de ayudarte.",
      moreQuestionsButton: "TENGO UNA PREGUNTA",
    },
    extracurricular20232024: {
      header: {
        title: "Hegazti Escuela Bosque | Extraescolares 2023 2024",
        meta: {
          description: {
            content:
              "Juego en la naturaleza. Dinámicas de grupo. Actividades artísticas. ¡Ven a vivir la experiencia!",
          },
        },
      },
      hero: {
        claim: "Extraescolares 2023-2024",
        subClaim: "Miercoles o Jueves 16:30 a 17:30",
      },
      title:
        "Exploración y Desarrollo Continuo: Extraescolares en Bosque Hegazti",
      text: `
      <p className="mb-4">
        Sumérgete en aulas donde la naturaleza es la maestra, un espacio donde
        el cielo es visible, la tierra es tangible, las flores emanan
        fragancias, y los sentidos son estimulados. Aquí, los niños pueden
        moverse con libertad, explorar su entorno, y observar el mundo real
        que les rodea.
      </p>
      <p className="mb-4">
        Nuestras aulas viven y respiran naturaleza para satisfacer las
        necesidades fundamentales de cada ser humano. Fomentamos la
        curiosidad, estimulamos los sentidos y promovemos la conexión con la
        diversidad de cada persona. En nuestro entorno, cada individuo
        encuentra su lugar único y valioso.
      </p>
      <p className="mb-4">
        Estamos emocionados de anunciar nuestras actividades extraescolares,
        que tendrán lugar cada miércoles o jueves de 16:30 a 17:30. Diseñadas
        para potenciar dinámicas de grupo, aprendizaje vivencial y desarrollo
        motor, estas actividades también abordarán aspectos emocionales y
        sociales de manera integral.
      </p>
      <p className="mb-4">
        Únete a nosotros en la Escuela Bosque Hegazti y experimenta una
        educación que va más allá de las paredes tradicionales del aula.
        Estamos comprometidos con el crecimiento holístico de cada niño,
        cultivando su amor por el aprendizaje y promoviendo un sentido de
        pertenencia en nuestro entorno natural.
      </p>
      <p className="mb-4">
        Te invitamos a unirte a nosotros en la Jornada de Puertas Abiertas
        para experimentar la escuela en persona. Descubrirás cómo nuestra aula
        viva es el ambiente perfecto para nutrir la curiosidad y la conexión
        con el mundo. ¡Esperamos verte pronto en la Escuela Bosque Hegazti!
      </p>
      <p className="mb-4">
        Llámanos al 697 24 57 75 o envíanos un email a
        hegaztiescuelabosque@gmail.com si quieres saber más. ¡Te esperamos!
      </p>
      `,
    },
    cookiePolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Cookies",
      },
      content: `
      <h1 className="hegazti-h1 text-left! py-8">
      POLÍTICA DE COOKIES
    </h1>
    <h3 className="text-2xl pt-8 pb-4">ANTECEDENTES</h3>
    <p className="mb-4">
      Conforme la normativa española que regula el uso de cookies en
      relación a la prestación de servicios de comunicaciones electrónicas,
      recogida en el Real Decreto Ley 13/2012 del 30 de marzo, le informamos
      sobre las cookies utilizadas en el sitio web de
      <strong>
        ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>(también el prestador) y el motivo de su uso. Asimismo, le
      informa que al navegar en el Sitio Web usted está prestando su
      consentimiento para poder utilizarlas.
    </p>
    <h3 className="text-2xl pt-8 pb-4">¿QUÉ SON LAS COOKIES?</h3>
    <p className="mb-4">
      Una cookie es un archivo que se descarga en su ordenador al acceder a
      determinadas páginas web. Las cookies permiten a una página web, entre
      otras cosas, almacenar y recuperar información sobre los hábitos de
      navegación de un usuario o de su equipo y, dependiendo de la
      información que contengan y de la forma en que utilice su equipo, se
      pueden utilizar para reconocer al usuario. Las cookies se asocian
      únicamente a un usuario anónimo y su ordenador o dispositivo y no
      proporcionan referencias que permitan conocer sus datos personales.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      COOKIES AFECTADAS POR LA NORMATIVA Y COOKIES EXENTAS
    </h3>
    <p className="mb-4">
      Según la directiva de la UE, las cookies que requieren el
      consentimiento informado por parte del usuario son las cookies de
      analítica y las de publicidad y afiliación, quedando exceptuadas las
      de carácter técnico y las necesarias para el funcionamiento del sitio
      web o la prestación de servicios expresamente demandados por el
      usuario.
    </p>
    <h3 className="text-2xl pt-8 pb-4">TIPO DE COOKIES</h3>
    <p className="mb-4">
      &nbsp;a) Según la <strong>entidad</strong>
      que las gestione, hay Cookies propias (aquellas que se envían al
      equipo terminal del usuario desde un equipo o dominio gestionado por
      el propio editor y desde el que se presta el servicio Sol · licitado
      por el usuario) y de terceros (las que se envían al equipo terminal
      del usuario desde un equipo o dominio que no es gestionado por el
      editor, sino por otra entidad que trata los datos obtenidos mediante
      las galletas).
    </p>
    <p className="mb-4">
      b) Según el <strong>tiempo</strong>
      que permanecen activas, están las de sesión (diseñadas para pedir y
      almacenar datos mientras el usuario accede a una página web) y las
      persistentes (en que los datos se almacenan en el terminal y pueden
      ser accedidos y tratados durante un período definido por el
      responsable de la galleta -puede ir de unos minutos a varios años).
    </p>
    <p className="mb-4">
      &nbsp;c) Según la <strong>finalidad</strong>
      para la que tratan la información que recopilan, pueden ser:
    </p>
    <p className="mb-4">
      -<strong>Cookies técnicas</strong>
      (necesarias para el uso de la web y la prestación del servicio
      <strong>contratado),</strong>
    </p>
    <p className="mb-4">
      - <strong>Cookies de personalización</strong>
      (que permiten al usuario acceder al servicio con características
      predefinidas, tales como el idioma, tipo de navegador, configuración
      regional, etc.)
    </p>
    <p className="mb-4">
      - <strong>Cookies de análisis</strong>
      (recogen información del uso que se realiza de la web),
    </p>
    <p className="mb-4">
      - <strong>Cookies publicitarias</strong>
      (recogen información sobre las preferencias y elecciones personales de
      los usuarios),
    </p>
    <p className="mb-4">
      - <strong>Cookies de afiliados</strong>
      (permiten hacer un seguimiento de las visitas procedentes de otras
      webs, con las que el sitio web establece un contrato de afiliación).
    </p>
    <h3 className="text-2xl pt-8 pb-4">COOKIES EXENTAS:</h3>
    <p className="mb-4">
      &nbsp;• las que permiten únicamente la comunicación entre el equipo
      del usuario y la red.
    </p>
    <p className="mb-4">
      • las estrictamente necesarias para prestar un servicio expresamente
      solicitado por el usuario.
    </p>
    <p className="mb-4">
      &nbsp;Asimismo, el GT29, en su Dictamen 4/201210, ha interpretado que
      entre las cookies exceptuadas estarían aquellas que tienen por
      finalidad:
    </p>
    <p className="mb-4">
      &nbsp;• Cookies de “entrada del usuario” (Las cookies de sesión y de
      entrada de usuario se suelen utilizar para rastrear las acciones del
      usuario al rellenar los formularios en línea en varias páginas, o como
      cesta de la compra para hacer el seguimiento de los artículos que el
      usuario ha seleccionado al pulsar un botón)
    </p>
    <p className="mb-4">
      • Cookies de autenticación o identificación de usuario (únicamente de
      sesión).
    </p>
    <p className="mb-4">
      • Cookies de seguridad del usuario (Por ejemplo, las cookies
      utilizadas para detectar intentos erróneos y reiterados de conexión a
      un sitio web)
    </p>
    <p className="mb-4">
      • Cookies de sesión de reproductor multimedia.
    </p>
    <p className="mb-4">
      • Cookies de sesión para equilibrar la carga.
    </p>
    <p className="mb-4">
      • Cookies de personalización de la interfaz de usuario.
    </p>
    <p className="mb-4">
      • Determinadas cookies de complemento (plug-in) para intercambiar
      contenidos Sociales (La excepción sólo se aplica para usuarios que han
      decidido mantener la sesión abierta)
    </p>
    <h3 className="text-2xl pt-8 pb-4">REVOCACIÓN</h3>
    <p className="mb-4">
      En todo momento podrá acceder a la configuración de su navegador
      aceptando o rechazando todas las cookies, o bien seleccionar aquellas
      que la instalación admite y las que no, siguiendo uno de los
      siguientes procedimientos, que depende del navegador que utilice:
    </p>
    <p className="mb-4">
      <strong>Google Chrome</strong> (en el Menú Herramientas):
    </p>
    <p className="mb-4">
      Configuración&gt; Mostrar opciones avanzadas&gt; Privacidad
      (Configuración de contenido)&gt; Cookies:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=es"
        target="_blank"
      >
        https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=es
      </a>
    </p>
    <p className="mb-4">
      <strong>&nbsp;</strong>
    </p>
    <p className="mb-4">
      <strong>Microsoft Internet Explorer</strong>
      (en el Menú Herramientas):
    </p>
    <p className="mb-4">
      Opciones de Internet&gt; Privacidad&gt; Avanzada:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
        target="_blank"
      >
        https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies
      </a>
    </p>
    <p className="mb-4">
      <strong>&nbsp;</strong>
    </p>
    <p className="mb-4">
      <strong>Firefox:</strong>
    </p>
    <p className="mb-4">
      Opciones&gt; Privacidad&gt; Cookies:
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
        target="_blank"
      >
        https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
      </a>
    </p>
    <p className="mb-4">
      <strong>Safari, iPad y iPhone:</strong>
    </p>
    <p className="mb-4">
      Preferencias&gt; Privacidad
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="https://support.apple.com/kb/ph21411?locale=es_ES"
        target="_blank"
      >
        https://support.apple.com/kb/ph21411?locale=es_ES
      </a>
    </p>
    <p className="mb-4">
      <strong>Opera:</strong>
    </p>
    <p className="mb-4">
      Configuración&gt; Opciones&gt; Avanzada&gt; Cookies
    </p>
    <p className="mb-4">
      <a
        rel="noopener noreferrer"
        href="http://help.opera.com/Windows/12.00/es-ES/cookies.html"
        target="_blank"
      >
        http://help.opera.com/Windows/12.00/es-ES/cookies.html
      </a>
    </p>
    <p className="mb-4">
      Estos navegadores están sometidos a cambios o modificaciones, por lo
      que no podemos garantizar que se ajusten completamente a la versión de
      su navegador. También puede ser que utilice otro navegador no
      contemplado en estos enlaces como Konqueror, Arora, Flock, etc. Para
      evitar estos desajustes, puede acceder directamente desde las opciones
      de su navegador, generalmente en el menú de "Opciones" en la sección
      de "Privacidad". (Por favor, consulte la ayuda de su navegador para
      más información).
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      DESACTIVACIÓN / ACTIVACIÓN Y ELIMINACIÓN DE COOKIES
    </h3>
    <p className="mb-4">
      Para restringir o bloquear las cookies, se hace a través de la
      configuración del navegador. Si no desea que los sitios web pongan
      ninguna cookie en su equipo, puede adaptar la configuración del
      navegador de modo que se le notifique antes de que se coloque ninguna
      cookie. Del mismo modo, puede adaptar la configuración de forma que el
      navegador rechace todas las cookies, o únicamente las cookies de
      terceros. También puede eliminar cualquiera de las cookies que ya se
      encuentren en el equipo. Recuerde que deberá adaptarse por separado la
      configuración de cada navegador y equipo que utilice.
    </p>
    <p className="mb-4">
      Recuerde que si no desea recibir cookies, ya no podremos garantizar
      que nuestro sitio web funcione como es debido. Quizá algunas funciones
      del sitio se pierdan y es posible que ya no pueda ver ciertos sitios
      web. Además, rechazó las cookies no significa que ya no vaya a ver
      anuncios publicitarios. Simplemente los anuncios no se ajustarán a sus
      intereses y se repetirán con más frecuencia.
    </p>
    <p className="mb-4">
      Cada navegador tiene un método diferente para adaptar la
      configuración. Si es necesario, consulte la función de ayuda del
      navegador para establecer la configuración correcta.
    </p>
    <p className="mb-4">
      Para desactivar las cookies en el teléfono móvil, consulte el manual
      del dispositivo para obtener más información.
    </p>
    <p className="mb-4">
      Puede obtener más información sobre las cookies en Internet,
      <a href="http://www.aboutcookies.org/">
        http://www.aboutcookies.org/
      </a>.
    </p>
    <p className="mb-4">
      Teniendo en cuenta la forma en que funciona Internet y los sitios web,
      no siempre contamos con información de las cookies que colocan
      terceras partes a través de nuestro sitio web. Esto se aplica
      especialmente a casos en que la página web contiene lo que se
      denominan elementos integrados: textos, documentos, imágenes o breves
      películas que se almacenan en otra parte, pero se muestran en nuestro
      sitio web o mediante el mismo.
    </p>
    <p className="mb-4">
      Por tanto, en caso de que se encuentre con este tipo de cookies en
      este sitio web y no estén enumeradas en la lista anterior, le rogamos
      que nos lo comunique. O bien póngase en contacto directamente con el
      tercero para pedirle información sobre las cookies que coloca, la
      finalidad y la duración de la cookie, y como ha garantizado su
      privacidad.
    </p>
    <p className="mb-4">
      <strong>
        ¿Quién es el responsable del tratamiento de sus datos personales?
      </strong>
    </p>
    <p className="mb-4">
      &nbsp;<strong>
        ASOCIACIÓN FAMILIAS HEGAZTI ESCUELA BOSQUE
      </strong>es el responsable del tratamiento de los datos personales que
      usted nos proporciona, sito en Carretera de Aras 6, 31230, Viana,
      Navarra y con CIF XXXZZZZX. Teléfono 697 24 57 75 y mail de contacto
      
      <a href="mailto:info@hegaztiescuelabosque.org">
        info@hegaztiescuelabosque.org
      </a>.
    </p>
    <p className="mb-4">
      <strong>¿Para qué utilizamos sus datos personales?</strong>
    </p>
    <p className="mb-4">
      &nbsp;La información recopilada a través de las cookies propias
      (cookies de sesión y de entrada de usuario) se suelen utilizar para
      rastrear las acciones del usuario al rellenar los formularios en línea
      en varias páginas, o como cesta de la compra para hacer el seguimiento
      de los artículos que el usuario ha seleccionado al pulsar un botón, o
      para personalizar la interface del usuario al visitar la página web.
    </p>
    <p className="mb-4">
      &nbsp;La información recopilada a través de las cookies de terceros es
      la siguiente:&nbsp;
    </p>
    <p className="mb-4">
      -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A través de las cookies
      analíticas se analizan sus hábitos de navegación para mejorar los
      servicios prestados;
    </p>
    <p className="mb-4">
      -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A través de las cookies
      comportamentales se recoge información sobre las preferencias del
      usuario para gestionar los espacios publicitarios de la forma más
      eficaz posible; y
    </p>
    <p className="mb-4">
      -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a través de las cookies
      publicitarias se mide el rendimiento de los anuncios y se proporcionan
      recomendaciones relativas a productos basadas en datos estadísticos.
    </p>
    <p className="mb-4">
      Para ver exactamente el uso de las cookies véase el cuadro sobre el
      uso de las cookies en esta web.
    </p>
    <p className="mb-4">
      <strong>&nbsp;</strong>
    </p>
    <p className="mb-4">
      <strong>
        ¿Cuál es la base legal para el tratamiento de sus datos personales?
      </strong>
    </p>
    <p className="mb-4">
      La legitimación para el tratamiento de sus datos personales viene dada
      por su consentimiento, otorgado en el momento de ponerse en contacto
      con nosotros, para la utilización de cookies analíticas,
      comportamentales y publicitarias; para las cookies de sesión o
      personalización, la legitimación para el tratamiento viene dada por el
      interés legítimo del prestador (responsable del tratamiento).
    </p>
    <p className="mb-4">
      <strong>¿A quién comunicamos sus datos?</strong>
    </p>
    <p className="mb-4">
      No se cederán ni comunicarán datos a terceros, salvo por obligación
      legal o a los terceros indicados en el caso de uso de cookies
      gestionadas por éstos.
    </p>
    <p className="mb-4">
      <strong>¿Cuál es el plazo de conservación de sus datos?</strong>
    </p>
    <p className="mb-4">
      El plazo de conservación de los datos recogidos es el indicado en el
      cuadro sobre el uso de las cookies en esta web.
    </p>
    <p className="mb-4">
      <strong>¿Cuáles son sus derechos?</strong>
    </p>
    <p className="mb-4">
      Los derechos que amparan al usuario son los de acceso, rectificación,
      supresión, portabilidad de los mismos, retirada del consentimiento
      (sin que ello afecte a la licitud del tratamiento otorgado previamente
      a su retirada), oposición al tratamiento, limitación (en determinadas
      circunstancias) y a presentar una reclamación ante la autoridad de
      control (la Agencia Española de protección de datos,
      <a href="https://www.aepd.es">www.aepd.es</a>).
    </p>
      `,
    },
    legalPolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Aviso Legal",
      },
      content: `
      <h1 className="hegazti-h1 py-8 text-left!">
          AVISO LEGAL
        </h1>

        <p className="mb-4">
          Para dar cumplimiento al artículo 10 de la Ley 34/2002 de Servicios de
          la Sociedad de la Información y del Comercio Electrónico, informamos a
          los usuarios de nuestros datos:
        </p>

        <p className="mb-4">
          Denominación Social:
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
        </p>
        <p className="mb-4">
          Domicilio Social:<strong>
            Carretera de Aras 6, 31230, Viana, Navarra
          </strong>
        </p>
        <p className="mb-4">
          NIF:
          <strong>
            XXXXX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
        </p>
        <p className="mb-4">
          Teléfono:<strong>669 575 406</strong>
        </p>
        <p className="mb-4">
          E-Mail: <strong>info@hegaztiescuelabosque.org</strong>
        </p>
        <p className="mb-4">
          Web:
          <a href="http://www.hegaztiescuelabosque.org">
            <strong>www.hegaztiescuelabosque.org</strong>
          </a>
          <strong></strong>
        </p>
        <p className="mb-4">
          Datos Registrales:
          <strong>
            Esta entidad consta inscrita en el Registro de asociaciones de
            Navarra Doc.2017/217491
          </strong>
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          1.&nbsp;&nbsp;&nbsp;&nbsp; OBJETO
        </h3>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>(Desde ahora también el prestador) como responsable del sitio
          web, pone a disposición de los usuarios el presente documento, que
          regula el uso del sitio web
          <strong>www.hegaztiescuelabosque.org</strong>, con el que pretendemos
          dar cumplimiento a las obligaciones que dispone la Ley 34/2002 , de
          servicios de la Sociedad de la Información y del Comercio Electrónico
          (LSSICE o LSSI), así como informar a todos los usuarios del sitio web
          respecto de cuáles son las condiciones de uso del sitio web.
        </p>
        <p className="mb-4">
          A través de la web,
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>facilita a los usuarios el acceso y utilización de diferentes
          servicios y contenidos puestos a disposición a través de la web.
        </p>
        <p className="mb-4">
          Toda persona que acceda a esta web asume el papel de usuario (en
          adelante el usuario), e implica la aceptación total y sin reservas de
          todas y cada una de las disposiciones incluidas en este Aviso Legal,
          así como cualesquiera otras disposiciones legales que fueran de
          aplicación.
        </p>
        <p className="mb-4">
          Como usuarios, deben leer atentamente el presente Aviso Legal en
          cualquiera de las ocasiones que entren en la web, ya que ésta puede
          sufrir modificaciones ya que el prestador se reserva el derecho a
          modificar cualquier tipo de información que pudiera aparecer en la
          web, sin que haya la obligación de preavisar o poner en conocimiento
          de los usuarios dichas obligaciones, siendo suficientes la publicación
          en el sitio web del prestador.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          2.&nbsp;&nbsp;&nbsp;&nbsp; CONDICIONES DE ACCESO Y USO DEL WEB
        </h3>
        <p className="mb-4">
          <strong>2.1. Carácter gratuito del acceso y uso de la web.</strong>
        </p>
        <p className="mb-4">
          La prestación de los servicios por parte de
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          tiene carácter gratuito para todos los usuarios.
        </p>
        <p className="mb-4">
          <strong>2.2. Registro de Usuario.</strong>
        </p>
        <p className="mb-4">
          Con carácter general la prestación de los Servicios no exige la previa
          suscripción o registro de los Usuarios.
        </p>
        <p className="mb-4">
          <strong>2.3. Veracidad de la información.</strong>
        </p>
        <p className="mb-4">
          Toda la información que facilita el Usuario debe ser veraz. En estos
          efectos, el Usuario garantiza la autenticidad de los datos comunicados
          a través de los formularios para la suscripción de los Servicios. Será
          responsabilidad del Usuario mantener toda la información facilitada a
          
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          permanentemente actualizada de forma que responda, en cada momento, a
          su situación real. En todo caso, el Usuario será el único responsable
          de las manifestaciones falsas o inexactas que realice y de los
          perjuicios que cause al prestador o a terceros.
        </p>
        <p className="mb-4">
          <strong>2.4. Menores de edad.</strong>
        </p>
        <p className="mb-4">
          Para el uso de los servicios, los menores de edad deben obtener
          siempre previamente el consentimiento de los padres, tutores o
          representantes legales, responsables últimos de todos los actos
          realizados por los menores a su cargo. La responsabilidad en la
          determinación de contenidos concretos a los que acceden los menores
          corresponde a aquellos, es por eso que si acceden a contenidos no
          apropiados para Internet, se deberán establecer en sus ordenadores
          mecanismos, en particular programas informáticos, filtros y bloqueos,
          que permitan limitar los contenidos disponibles y, aunque no sean
          infalibles, son de especial utilidad para controlar y restringir los
          materiales a los que pueden acceder los menores.
        </p>
        <p className="mb-4">
          &nbsp;<strong>
            2.5. Obligación de hacer uso correcto de la web.
          </strong>
        </p>
        <p className="mb-4">
          El Usuario se compromete a utilizar la web de conformidad a la Ley y
          al presente Aviso Legal, así como la moral y las buenas costumbres. En
          efecto, el Usuario se abstendrá de utilizar la página con fines
          ilícitos o prohibidas, lesivos de derechos e intereses de terceros, o
          que de cualquier forma puedan dañar, inutilizar, sobrecargar,
          deteriorar o impedir la normal utilización de equipos informáticos o
          documentos, archivos y toda clase de contenidos almacenados en
          cualquier equipo informático del prestador.
        </p>
        <p className="mb-4">
          En particular, y a título indicativo, pero no exhaustivo, el Usuario
          se compromete a no transmitir, difundir o poner a disposición de
          terceros informaciones, datos, contenidos, mensajes, gráficos,
          dibujos, archivos de sonido o imagen, fotografías, grabaciones,
          software y, en general, cualquier clase de material que:
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (A) sea contraria, menosprecie o atente contra los derechos
          fundamentales y las &nbsp; libertades públicas reconocidas
          constitucionalmente, en tratados internacionales y otras normas
          vigentes;
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (B) induzca, incite o promueva actuaciones delictivas, denigratorias,
          difamatorias, violentas o, en general, contrarias a la ley, a la moral
          y el orden público;
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (C) induzca, incite o promueva actuaciones, actitudes o pensamientos
          discriminatorios por razón de sexo, raza, religión, creencias, edad o
          condición;
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (D) sea contrario al derecho al honor, a la intimidad personal o
          familiar o la propia imagen de las personas;
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (E) de cualquier manera perjudique la credibilidad del prestador o de
          terceros; y
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          (F) constituya publicidad ilícita, engañosa o desleal.
        </p>

        <h3 className="text-2xl pt-8 pb-4">
          3.&nbsp;&nbsp;&nbsp;&nbsp; EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
        </h3>
        <p className="mb-4">
          El prestador se exime de cualquier tipo de responsabilidad derivada de
          la información publicada en nuestro sitio web, siempre que esta
          información haya sido manipulada o introducida por un tercero ajeno.
        </p>
        <p className="mb-4">
          Esta web ha sido revisada y probada para que funcione correctamente.
          En principio, se puede garantizar el correcto funcionamiento los 365
          días del año, 24 horas al día. Sin embargo, el prestador no descarta
          la posibilidad de que existan determinados errores de programación, o
          que sucedan causas de fuerza mayor, catástrofes naturales, huelgas, o
          circunstancias semejantes que hagan imposible el acceso a la página
          web.
        </p>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          no otorga ninguna garantía ni se hace responsable, en ningún caso, de
          los daños y perjuicios de cualquier naturaleza que puedan salir a
          colación de la falta de disponibilidad, mantenimiento y efectivo
          funcionamiento de la web o de sus servicios y contenidos; de la
          existencia de virus, programas maliciosos o lesivos en los contenidos;
          del uso ilícito, negligente, fraudulento o contrario a este Aviso
          legal y condiciones de uso; o de la falta de licitud, calidad,
          fiabilidad, utilidad y disponibilidad de los servicios prestados por
          terceros y puestos a disposición de los usuarios en el sitio web.
        </p>
        <p className="mb-4">
          El prestador no se hace responsable bajo ningún concepto de los daños
          que puedan dimanar del uso ilegal o indebido de la presente página
          web.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          4.&nbsp;&nbsp;&nbsp;&nbsp; COOKIES
        </h3>
        <p className="mb-4">
          El sitio web del prestador puede utilizar cookies (pequeños archivos
          de información que el servidor envía al ordenador de quien accede a la
          página) para llevar a cabo determinadas funciones que son consideradas
          imprescindibles para el correcto funcionamiento y visualización del
          sitio. Las cookies utilizadas tienen, en todo caso, carácter temporal,
          con la única finalidad de hacer más eficaz la navegación, y
          desaparecen al terminar la sesión del usuario. En ningún caso se
          utilizarán las cookies para recoger información de carácter personal.
          para más información, ver nuestra
          <a href="/politicadecookies">
            <span style="text-decoration:underline">Política de Cookies.</span>
          </a>
        </p>

        <h3 className="text-2xl pt-8 pb-4">
          5.&nbsp;&nbsp;&nbsp;&nbsp; ENLACES <em>(LINKS)</em>
        </h3>
        <p className="mb-4">
          Desde el sitio web es posible que se redirija a contenidos
          patrocinados, anuncios y / o enlaces de afiliados y / o de terceras
          webs.
        </p>
        <p className="mb-4">
          Entre los enlaces facilitados, existe la posibilidad de informar o
          hacer referencia a productos y / o servicios de terceros. Dado que
          desde la web no podemos controlar los contenidos introducidos por los
          terceros,
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          no asume ningún tipo de responsabilidad respecto a dichos contenidos,
          ni garantiza la experiencia, integridad o calidad de sus productos. En
          todo caso, el prestador manifiesta que procederá a la retirada
          inmediata de cualquier contenido que pudiera contravenir la
          legislación nacional o internacional, la moral o el orden público,
          procediendo a la retirada inmediata de la redirección a estas webs,
          poniendo en conocimiento de las autoridades competentes el contenido
          en cuestión
        </p>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          tendrá publicados estos enlaces hasta que sean eliminados o
          suspendidos por el prestador o por el anunciante, y no será
          responsable aunque estos anuncios puedan ser indexados por otros
          buscadores ajenos a esta web.
        </p>
        <p className="mb-4">
          El prestador no se responsabiliza de la información y contenidos
          almacenados, a título enunciativo pero no limitativo, en foros, chats,
          generadores de blogs, comentarios, redes sociales o cualquier otro
          medio que permita a terceros publicar contenidos de forma
          independiente en la página web del prestador. No obstante y en
          cumplimiento de lo dispuesto en el art. 11 y 16 de la LSSICE, el
          prestador se pone a disposición de todos los usuarios, autoridades y
          fuerzas de seguridad, y colaborando de forma activa en la retirada o,
          cuando sea necesario, el bloqueo de todos aquellos contenidos que
          puedan afectar o contravenir la legislación nacional, o internacional,
          derechos de terceros o la moral y el orden público. En caso de que el
          usuario considere que puede existir algún contenido que pudiera ser
          susceptible de esta clasificación, se ruega lo notifique de forma
          inmediata al administrador del sitio web.
        </p>
        <p className="mb-4">
          Sin embargo,
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          le informa que cualquier relación contractual o extracontractual que
          el usuario formalice con estos terceros, afiliados o anunciantes
          mediante el link proporcionado por esta web, será válido únicamente y
          exclusivamente entre el usuario y el anunciante y / o tercera persona
          y
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>
          no tendrá ningún tipo de responsabilidad sobre los daños o perjuicios
          que pudieran ser ocasionados por la prestación de servicios y / o
          relaciones contractuales o extracontractuales realizadas entre el
          usuario y los anunciantes o terceros contactadas a través de este
          portal ya que el prestador sólo actúa como intermediario o medio
          publicitario.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          6.&nbsp;&nbsp;&nbsp;&nbsp; PROTECCIÓN DE DATOS PERSONALES
        </h3>
        <p className="mb-4">
          El prestador está profundamente comprometido con el cumplimiento de la
          normativa de protección de datos personales y garantiza el
          cumplimiento íntegro de las obligaciones dispuestas, así como la
          implementación de las medidas de seguridad dispuestas en el Reglamento
          Europeo de Protección de datos y la normativa española de protección
          de datos. Para más información, ver nuestra
          <a href="/poltica-de-privacidad">
            <span style="text-decoration:underline">
              Política de Privacidad.
            </span>
          </a>
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          7.&nbsp;&nbsp;&nbsp;&nbsp; PROPIEDAD INTELECTUAL E INDUSTRIAL
        </h3>
        <p className="mb-4">
          El sitio web, incluyendo a título enunciativo, pero no limitativo: la
          programación, edición, compilación y demás elementos necesarios para
          su funcionamiento, los diseños, logotipos, textos, fotografías y / o
          gráficos son propiedad del prestador o, en caso de que fuera
          necesario, dispone de la licencia o autorización expresa por parte de
          los autores. Todos los contenidos del sitio web se encuentran
          debidamente protegidos por la normativa de propiedad intelectual e
          industrial.
        </p>
        <p className="mb-4">
          Independientemente de la finalidad para la que fueran destinados, la
          reproducción total o parcial, uso, distribución y comunicación pública
          requieren de la autorización escrita previa por parte del prestador.
          Cualquier uso no autorizado previamente por parte del prestador será
          considerado un incumplimiento grave de los derechos de propiedad
          intelectual o industrial del autor.
        </p>
        <p className="mb-4">
          Los diseños, logotipos, texto y / o gráficos ajenos al prestador y que
          puedan aparecer en el sitio web, pertenecen a sus respectivos
          propietarios, siendo ellos mismos responsables de cualquier posible
          controversia que pudiera devenir respecto a los mismos. En todo caso,
          el prestador cuenta con la autorización expresa y previa por parte de
          los mismos.
        </p>
        <p className="mb-4">
          El prestador reconoce a favor de sus titulares los correspondientes
          derechos de propiedad industrial e intelectual, no implicando la
          mención o aparición en el sitio web, de la existencia de derechos o
          responsabilidad del prestador sobre los mismos, como tampoco respaldo,
          patrocinio o recomendación por parte del mismo.
        </p>
        <p className="mb-4">
          Para realizar cualquier tipo de observación respecto a posibles
          incumplimientos de los derechos de propiedad intelectual o industrial,
          así como sobre cualquiera de los contenidos del sitio web, puede
          hacerlo a través del correo electrónico arriba reseñado.
        </p>

        <h3 className="text-2xl pt-8 pb-4">
          8.&nbsp;&nbsp;&nbsp;&nbsp; LEY APLICABLE Y JURISDICCIÓN
        </h3>
        <p className="mb-4">
          Para la resolución de las controversias o cuestiones relacionadas con
          la presente página web o de las actividades en esta desarrolladas,
          será de aplicación la legislación española, a la que se someten
          expresamente las partes, siendo competentes para la resolución de
          todos los conflictos derivados o relacionados con su uso los Juzgados
          y Tribunales de Navarra.
        </p>
      `,
    },
    privacyPolicy: {
      header: {
        title: "Hegazti Escuela Bosque | Política de privacidad",
      },
      content: `
      <h1 className="hegazti-h1 text-left! py-8">
      POLÍTICA DE PRIVACIDAD
    </h1>
    <h3 className="text-2xl pt-8 pb-4">INTRODUCCIÓN</h3>
    <p className="mb-4">
      Su privacidad es importante para nosotros, así que, mediante este
      documento, le explicamos qué datos recogemos de los usuarios, como los
      utilizamos y para qué, entre otras indicaciones. Los mayores de 14
      años podrán registrarse como usuarios sin el previo consentimiento de
      sus padres, tutores o representantes legales. En caso de menores de 14
      años o identificados como "incapaces legalmente", siempre
      necesitaremos del consentimiento paterno, o del tutor / a o
      representante legal.
    </p>
    <p className="mb-4">
      Para su información, nunca pediremos más información de la que
      realmente necesitaremos para los servicios requeridos; nunca la
      compartiremos con terceros, excepto por obligación legal o con su
      autorización previa; y nunca utilizaremos sus datos para otra
      finalidad no indicada previamente.
    </p>
    <p className="mb-4">
      Como usuarios, deberá leer atentamente esta Política de privacidad de
      manera regular, y siempre que introduzca sus datos personales, ya que
      este documento puede sufrir modificaciones ya que el prestador puede
      modificar cualquier tipo de información que pudiera aparecer en la web
      para cumplir con la normativa o actualizar la política, y sin que
      exista la obligación de preavisar o poner en conocimiento de los
      usuarios dichas obligaciones, siendo suficientes la publicación en el
      sitio web del prestador.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      RESPONSABLE DEL TRATAMIENTO:
    </h3>
    <p className="mb-4">
      Identidad:<strong>
        &nbsp;ASOCIACIÓN FAMILIAS HEGAZTI
      </strong>(también el prestador)
    </p>
    <p className="mb-4">
      NIF:<strong>
        G26525329&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </strong>
    </p>
    <p className="mb-4">
      Dirección postal:<strong>
        &nbsp;Carretera de Aras 6, 31230, Viana,
        Navarra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </strong>
    </p>
    <p className="mb-4">
      Correo electrónico:<strong>
        &nbsp;info@hegaztiescuelabosque.org
      </strong>
    </p>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>, como responsable del sitio web, de conformidad con lo
      dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD)
      relativo a la protección de las personas físicas en lo que respecta al
      tratamiento de datos personales ya la libre circulación de estos datos
      y demás normativa vigente en materia de protección de datos
      personales, y por la Ley 34/2002, de 11 de julio, de Servicios de la
      Sociedad de la Información y del Comercio Electrónico (LSSICE), le
      informa que tiene implementadas las medidas de seguridad necesarias,
      de índole técnica y organizativas, para garantizar y proteger la
      confidencialidad, integridad y disponibilidad de los datos
      introducidos.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      MÉTODO DE OBTENCIÓN DE LOS DATOS y DATOS QUE RECAUDAMOS:
    </h3>
    <p className="mb-4">
      Los datos que recogemos y cómo las obtenemos es la siguiente:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          mediante el formulario de contacto: nombre, email
        </p>
      </li>
      <li>
        <p className="mb-4">
          mediante el formulario de reserva: nombre, DNI, teléfono, email
        </p>
      </li>
    </ol>
    <p className="mb-4">
      No se tratan categorías de datos especialmente protegidos.
    </p>
    <h3 className="text-2xl pt-8 pb-4">FINALIDAD DEL TRATAMIENTO:</h3>
    <p className="mb-4">
      Sus datos personales sólo se utilizarán para las siguientes
      finalidades, prestando su consentimiento para cada una de las
      finalidades en el apartado correspondiente de la web:
    </p>
    <ol data-rte-list="default">
      <li>
        <p className="mb-4">
          <strong>formulario de contacto:</strong>para responder a las
          consultas y / o proporcionar informaciones requeridas por el
          Usuario;
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>formulario de reserva:</strong>para solicitar los
          servicios que ofrecemos en la web.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>WhatsApp</strong>: el tratamiento de los datos que se
          lleven a cabo de las personas que realicen una consulta a través
          de WhatsApp de{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>se regirá por este apartado, así como aquellas
          condiciones de uso, políticas de privacidad y normativas de acceso
          que pertenezcan a la aplicación que procedan en cada caso y
          aceptadas previamente por el usuario.{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>, tratará sus datos con la finalidad de administrar
          correctamente su consulta así como cualquier otra finalidad de la
          gestión administrativa del servicio. Queda prohibido el uso del
          WhatsApp de{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>, para el envío de contenidos que no sean los necesarios
          para la respuesta a la consulta y que sean ilícitos por la
          normativa nacional o internacional que atente contra los derechos
          fundamentales de las personas y en general que contravengan los
          principios de legalidad, honradez, responsabilidad, protección de
          la vida privada, la protección del consumidor y los derechos de
          propiedad intelectual e industrial.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Otras finalidades</strong>:
        </p>
        <ul data-rte-list="default">
          <li>
            <p className="mb-4">
              Realizar las gestiones comerciales, administrativas, fiscales,
              contables que sean necesarias en virtud de la legislación
              vigente;
            </p>
          </li>
          <li>
            <p className="mb-4">
              Conocer su opinión y mejorar los servicios prestados por la
              web;
            </p>
          </li>
          <li>
            <p className="mb-4">
              Realización de análisis de usabilidad de la web, a través de
              las cookies (mencionadas en la política de cookies);
            </p>
          </li>
          <li>
            <p className="mb-4">
              Redes sociales: en el apartado correspondiente se especifica
              el uso de las redes sociales.
            </p>
          </li>
        </ul>
      </li>
    </ol>
    <p className="mb-4">
      Las fotografías que estén colgadas en la web son propiedad de{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>, incluyendo las de los menores, en las que, para la
      obtención de estas, se ha obtenido el consentimiento previo de los
      padres, tutores o representantes legales mediante la firma de los
      formularios realizados para tal efecto por los centros de los que los
      menores forman parte. Sin embargo, los padres, tutores o
      representantes de los menores, como titulares del ejercicio de los
      derechos de estos, y siempre previo requerimiento formal por escrito,
      pueden indicar la negativa al uso de la imagen del menor; en este
      caso, la imagen se mostrará pixelada.
    </p>
    <p className="mb-4">
      Puede revocar en cualquier momento su consentimiento remitiendo un
      escrito con el asunto "Baja" en el mail reseñado.
    </p>
    <p className="mb-4">
      De acuerdo con la LSSICE,{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      no realiza prácticas de SPAM, por lo tanto, no envía correos
      comerciales por e-mail que no hayan sido previamente solicitados o
      autorizados por el Usuario. En consecuencia, en todas las
      comunicaciones que recibirá del prestador, el usuario tiene la
      posibilidad de cancelar su consentimiento expreso para recibir
      nuestras comunicaciones.
    </p>
    <p className="mb-4">
      No trataremos sus datos personales para ningún otro fin de las
      descritas excepto por obligación legal o requerimiento judicial.
    </p>
    <p className="mb-4">
      No será objeto de decisiones basadas en tratamientos automatizados que
      produzcan efectos sobre sus datos.
    </p>
    <p className="mb-4">&nbsp;</p>
    <h3 className="text-2xl pt-8 pb-4">
      LEGITIMACIÓN DEL TRATAMIENTO
    </h3>
    <p className="mb-4">
      La base legal para el tratamiento de los datos es su consentimiento
      otorgado en el momento de dar sus datos en el formulario
      correspondiente para llevar a cabo las finalidades, en el momento de
      marcación de la casilla de verificación.
    </p>
    <p className="mb-4">
      El no facilitar los datos personales solicitados o el no aceptar la
      presente política de privacidad supone la imposibilidad de conseguir
      las finalidades anteriormente descritas.En los casos en que haya una
      previa relación contractual entre las partes, la legitimación para el
      desarrollo de las obligaciones administrativas, fiscales, contables y
      laborales que sean necesarias en virtud de la legislación vigente será
      {" "}
      <strong>la existencia previa de la relación comercial</strong>{" "}
      establecida entre las partes.
    </p>
    <p className="mb-4">
      La oferta prospectiva o comercial de productos y servicios está basada
      en el consentimiento que se le solicita, sin que en ningún caso la
      retirada de este consentimiento condicione la ejecución del contrato
      de suscripción.
    </p>
    <p
      class=""
      data-rte-preserve-empty="true"
      style="white-space:pre-wrap;"
    >
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      PLAZO DE CONSERVACIÓN DE LOS DATOS:
    </h3>
    <p className="mb-4">
      Sus datos se conservarán mientras dure la relación comercial con
      nosotros o ejerce su derecho de cancelación u oposición, o limitación
      al tratamiento. Sin embargo, conservaremos sus datos en los plazos
      legalmente previstos en las disposiciones aplicables.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      DESTINATARIOS DE CESIONES O TRANSFERENCIAS:
    </h3>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      no lleva a cabo ninguna cesión o comunicación de datos ni dentro ni
      fuera de la UE. El prestador únicamente facilitará información a las
      fuerzas y cuerpos de seguridad bajo orden judicial o por obligación de
      una norma legal, sin perjuicio de poder bloquear o cancelar su cuenta
      si puede haber indicios de la comisión de algún delito por parte del
      usuario. La información facilitada será sólo la que disponga en ese
      momento el prestador.
    </p>
    <p className="mb-4">
      La información que nos proporcione a través de este sitio web será
      alojada en los servidores de{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>, contratados a la empresa SQUARESPACE IRELAND LTD con NIF
      3041081MH y domicilio en Le Pole House Ship Street Great, Dublin 8,
      Ireland que presta el servicio de alojamiento de la web. El
      tratamiento de los datos de la entidad se encuentra regulado mediante
      un contrato de encargado del tratamiento entre el prestador y esta
      empresa.
    </p>
    <p className="mb-4">
      Asimismo, el prestador utiliza determinadas herramientas para prestar
      servicios necesarios para el desarrollo de la actividad, pudiendo
      almacenar sus datos. Estas herramientas son las siguientes:
    </p>
    <p className="mb-4">
      <strong>Google Analytics</strong>: para realizar un análisis y métrica
      del uso que los usuarios hacen de la web a través de las cookies. La
      información que generan y recopilan estas cookies sobre el uso
      (incluyendo la dirección IP) será directamente transmitida y archivada
      por Google Inc., ubicada en Delaware, 1600 Amphitheatre Parkway,
      montaré View (California), CA 94043 de Estados Unidos ( " Google "),
      en sus servidores de Estados Unidos.
    </p>
    <h3 className="text-2xl pt-8 pb-4">
      DERECHOS DE LAS PERSONAS INTERESADAS:
    </h3>
    <p className="mb-4">
      Como usuario-interesado, puede solicitar el ejercicio de los
      siguientes derechos ante{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>presentando un escrito a la dirección postal del
      encabezamiento o enviando un correo electrónico a
      info@hegaztiescuelabosque.org, indicando como Asunto: "PROTECCIÓN
      DE DATOS: DERECHOS DE LOS AFECTADOS ", y adjuntando fotocopia de su
      DNI o cualquier medio análogo en derecho, tal como indica la
      ley.Derechos:
    </p>
    <ul data-rte-list="default">
      <li>
        <p className="mb-4">
          <strong>Derecho de acceso:</strong>{" "}
          permite al interesado conocer y obtener información sobre sus
          datos de carácter personal sometidos a tratamiento.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Derecho de rectificación o supresión</strong>: permite
          corregir errores y modificar los datos que resulten ser inexactos
          o incompletos
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Derecho de cancelación</strong>: permite que se supriman
          los datos que sean inadecuados o excesivos
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Derecho de oposición</strong>: derecho del interesado a
          que no se lleve a cabo el tratamiento de sus datos de carácter
          personal o se cese en el mismo.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Limitación del tratamiento</strong>: conlleva el marcado
          de los datos personales conservados, con el fin de limitar su
          futuro tratamiento, para el ejercicio o la defensa de
          reclamaciones.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>Portabilidad de los datos</strong>: facilitación de los
          datos objeto de tratamiento al interesado, para que éste pueda
          transmitir a otro responsable, sin impedimentos.
        </p>
      </li>
      <li>
        <p className="mb-4">
          <strong>
            Derecho a no ser objeto de decisiones individuales automatizadas
            (incluida la elaboración de perfiles)
          </strong>: derecho a no ser objeto de una decisión basada en el
          tratamiento automatizado que produzca efectos o afecte
          significativamente
        </p>
      </li>
    </ul>
    <p className="mb-4">
      Como usuario, tiene derecho a retirar el consentimiento dado en
      cualquier momento. La retirada del consentimiento no afectará a la
      licitud del tratamiento efectuado antes de la retirada del
      consentimiento.
    </p>
    <p className="mb-4">
      También tiene derecho a presentar una reclamación ante la autoridad de
      control si considera que pueden haberse visto vulnerados sus derechos
      en relación a la protección de sus datos (aepd.es).
    </p>
    <h3 className="text-2xl pt-8 pb-4">INFORMACIÓN ADICIONAL</h3>
    <p className="mb-4">
      <strong>MEDIDAS DE SEGURIDAD:</strong>
    </p>
    <p className="mb-4">
      Los datos que nos facilite se tratarán de forma confidencial. El
      prestador ha adoptado todas las medidas técnicas y organizativas y
      todos los niveles de protección necesarios para garantizar la
      seguridad en el tratamiento de los datos y evitar su alteración,
      pérdida, robo, tratamiento o acceso no autorizado, de acuerdo al
      estado de la tecnología y naturaleza de los datos almacenados.
      Asimismo, se garantiza también que el tratamiento y registro en
      ficheros, programas, sistemas o equipos, locales y centros cumplen con
      los requisitos y condiciones de integridad y seguridad establecidas en
      la normativa vigente.
    </p>
    <p className="mb-4">
      <strong>IDIOMA</strong>
    </p>
    <p className="mb-4">
      El idioma aplicable a esta política de privacidad es el castellano.
      Por tanto, en caso de que hubiera alguna contradicción en alguna de
      las versiones facilitadas en otros idiomas, prevalecerá la versión en
      castellano.
    </p>
    <p className="mb-4">
      <strong>REDES SOCIALES</strong>
    </p>
    <p className="mb-4">
      Le informamos que{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      puede tener presencia en redes sociales. El tratamiento de los datos
      que se lleve a cabo de las personas que se hagan seguidoras en las
      redes sociales (y / o realicen cualquier vínculo o acción de conexión
      a través de las redes sociales) de las páginas oficiales de{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>se regirá por este apartado , así como para aquellas
      condiciones de uso, políticas de privacidad y normativas de acceso que
      pertenezcan a la red social que proceda en cada caso y aceptadas
      previamente por el usuario.
    </p>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      tratará sus datos con las finalidades de administrar correctamente su
      presencia en la red social, informando de actividades, productos y
      servicios del prestador, así como para cualquier otra finalidad que
      las normativas de las Redes Sociales permitan.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Queda prohibida la publicación de contenidos:
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - Que sean presuntamente ilícitos por la normativa nacional,
      comunitaria o internacional o que realicen actividades presuntamente
      ilícitas o contravengan los principios de la buena fe.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - Que atenten contra los derechos fundamentales de las personas,
      falten a la cortesía en la red, molesten o puedan generar opiniones
      negativas en nuestros usuarios o terceros y en general cualesquiera
      sean los contenidos que ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI considere inapropiados.
    </p>
    <p className="mb-4">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      - Y en general que contravengan los principios de legalidad, honradez,
      responsabilidad, protección de la dignidad humana, protección de
      menores, protección del orden público, la protección de la vida
      privada, la protección del consumidor y los derechos de propiedad
      intelectual e industrial.
    </p>
    <p className="mb-4">
      Asimismo,{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      se reserva la potestad de retirar, sin previo aviso del sitio web o de
      la red social corporativa aquellos contenidos que se consideran
      inadecuados.
    </p>
    <p className="mb-4">
      En todo caso, si Ud. remite información personal a través de la red
      social, ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI quedará exento de responsabilidad en relación
      con las medidas de seguridad aplicables a la presente plataforma y el
      usuario, en caso de querer conocerlas, debe consultar las
      correspondientes condiciones particulares de la red en cuestión.
    </p>
    <p className="mb-4">
      <strong>CAMBIOS EN LA PRESENTE POLÍTICA DE PRIVACIDAD</strong>
    </p>
    <p className="mb-4">
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      se reserva el derecho a modificar la presente política para adaptarla
      a novedades legislativas o jurisprudenciales.
    </p>
    <p className="mb-4">
      <strong>REVOCABILIDAD</strong>
    </p>
    <p className="mb-4">
      El consentimiento prestado, tanto por el tratamiento como para la
      cesión de los datos de los interesados, es revocable en cualquier
      momento comunicándolo a{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      en los términos establecidos en esta Política para el ejercicio de los
      derechos. Esta revocación en ningún caso tendrá carácter retroactivo.
    </p>
    <p className="mb-4">
      <strong>LEGISLACIÓN</strong>
    </p>
    <p className="mb-4">
      Con carácter general las relaciones entre{" "}
      <strong>
        ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
      </strong>{" "}
      con los Usuarios de sus servicios telemáticos, presentes en esta web,
      están sometidos a la legislación y jurisdicción española a la que se
      someten expresamente las partes, siendo competentes para la resolución
      de todos los conflictos derivados o relacionados con su uso los
      Juzgados y Tribunales de Navarra.
    </p>
      `,
    },
    footer: {
      whereAreWe: "DONDE ESTAMOS UBICADOS",
      whereAreWeExtended:
        "Estamos ubicados en el Paraje de Valdearas a 1 kilómetro de Viana y a 9 km de Logroño.",
      timeTableTitle: "Horario de Escuela Bosque:",
      timeTableText: " De Lunes a Vierns de 9:00 a 14:00 hrs.",
      priceTableTitle: "Tarifas Curso 20223 / 2024:",
      priceTableText1: "Jornada completa (25 horas/semana): 350€ por niño.",
      priceTableText2: "Tarifa reducida (15 horas/semana): 250€ por niño.",
      priceTableText3:
        "Tarifa super reducida (10 horas/semana): 150€ por niño.",
      priceTableText4: "Días sueltos: 20€ por día.",
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
      cookiePolicyText: {
        url: "legal-politica-de-cookies",
        text: "política de cookies",
      },
      privacyPolicyText: {
        url: "legal-politica-de-privacidad",
        text: "Política de privacidad",
      },
      legalText: {
        url: "legal-aviso-legal",
        text: "Aviso legal",
      },
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
