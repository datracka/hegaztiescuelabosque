export type menuTypeProps = {
  name: string;
  url?: string;
  target?: string;
  subOptions?: { url: string; name: string }[];
  highlighted?: boolean;
};

const menu = (menuTexts: any): menuTypeProps[] => {
  return [
    {
      name: menuTexts?.forestAsClassroom?.main,
      subOptions: [
        {
          url: "aula-madre-de-dia",
          name: menuTexts?.forestAsClassroom?.daytimeMother,
        },
        {
          url: "aula-infantil",
          name: menuTexts?.forestAsClassroom?.childhoodClass,
        },
        {
          url: "aula-primaria",
          name: menuTexts?.forestAsClassroom?.primarySchool,
        },
        {
          url: "aula-extraescolares-ludoteca",
          name: menuTexts?.forestAsClassroom?.extracurricularActivitiesPlayRoom,
        },
        // PENDING TO TRANSLATE !!!!!
        /* {
          url: "aula-extraescolares-sabado-en-familia",
          name: menuTexts?.forestAsClassroom
            ?.extracurricularActivitiesSaturdays,
        }, */
      ],
    },
    {
      name: menuTexts?.whoWeAre?.main,
      subOptions: [
        { url: "quienes-somos-proyecto", name: menuTexts?.whoWeAre?.project },
        {
          url: "quienes-somos-espacios",
          name: menuTexts?.whoWeAre?.natureSpaces,
        },
        {
          url: "quienes-somos-hegazti",
          name: menuTexts?.whoWeAre?.aDayInHegazti,
        },
        {
          url: "quienes-somos-faqs",
          name: menuTexts?.whoWeAre?.faqs,
        },
      ],
    },
    {
      name: menuTexts?.contact,
      url: "mas-informacion",
    },
    /* {
      name: "Jornada de puertas abiertas",
      url: "jornada-puertas-abiertas-2023",
      highlighted: true,
    }, */
    {
      name: menuTexts?.blog,
      url: "//blog.hegaztiescuelabosque.org",
      target: "_blank",
    },
    {
      name: menuTexts?.extracurricularActivities,
      url: "extraescolares-2023-2024",
      highlighted: true,
    },
    {
      name: menuTexts?.scholarCalendar,
      url: "//docs.google.com/document/d/1Dk-Hd-NI8Y8oh9TxotYUyBzqWnu9dXUMpjkJ1dkAsCY/edit?usp=sharing",
      target: "_blank",
    },
  ];
};


export default menu;
