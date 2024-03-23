export type menuTypeProps = {
  name: string;
  url?: string;
  target?: string;
  subOptions?: { url: string; name: string }[];
  highlighted?: boolean;
  noFollow?: boolean;
};

const menu = (menuTexts: any): menuTypeProps[] => {
  return [
    {
      name: menuTexts?.forestAsClassroom?.text,
      subOptions: [
        {
          url: menuTexts?.forestAsClassroom?.daytimeMother.url,
          name: menuTexts?.forestAsClassroom?.daytimeMother.text,
        },
        {
          url: menuTexts?.forestAsClassroom?.childhoodClass.url,
          name: menuTexts?.forestAsClassroom?.childhoodClass.text,
        },
        {
          url: menuTexts?.forestAsClassroom?.primarySchool.url,
          name: menuTexts?.forestAsClassroom?.primarySchool.text,
        },
        {
          url: menuTexts?.forestAsClassroom?.extracurricularActivitiesPlayRoom
            .url,
          name: menuTexts?.forestAsClassroom?.extracurricularActivitiesPlayRoom
            .text,
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
      name: menuTexts?.whoWeAre?.text,
      subOptions: [
        {
          url: menuTexts?.whoWeAre?.project.url,
          name: menuTexts?.whoWeAre?.project.text,
        },
        {
          url: menuTexts?.whoWeAre?.natureSpaces.url,
          name: menuTexts?.whoWeAre?.natureSpaces.text,
        },
        {
          url: menuTexts?.whoWeAre?.aDayInHegazti.url,
          name: menuTexts?.whoWeAre?.aDayInHegazti.text,
        },
        {
          url: menuTexts?.whoWeAre?.faqs.url,
          name: menuTexts?.whoWeAre?.faqs.text,
        },
      ],
    },
    {
      name: menuTexts?.contact.text,
      url: menuTexts?.contact.url,
    },
    {
      name: menuTexts.playGroup.text,
      url: menuTexts.playGroup.url,
      highlighted: true,
    },
/*     {
      name: menuTexts.openDoors.text,
      url: menuTexts.openDoors.url,
      highlighted: true,
    }, */
    {
      name: menuTexts?.blog.text,
      url: menuTexts?.blog.url,
      target: "_blank",
    },
    /*  {
      name: menuTexts?.extracurricularActivities.text,
      url: menuTexts?.extracurricularActivities.url,
      highlighted: true,
    }, */
    {
      name: menuTexts?.scholarCalendar.text,
      url: menuTexts?.scholarCalendar.url,
      target: "_blank",
      noFollow: true,
    },
  ];
};

export default menu;
