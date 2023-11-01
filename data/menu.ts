export type menuTypeProps = {
  name: string;
  url?: string;
  target?: string;
  subOptions?: { url: string; name: string }[];
  highlighted?: boolean;
};

const menu: menuTypeProps[] = [
  {
    name: "El bosque como aula",
    subOptions: [
      { url: "aula-madre-de-dia", name: "Madre de día" },
      {
        url: "aula-infantil",
        name: "Aula Infantil",
      },
      {
        url: "aula-primaria",
        name: "Primaria",
      },
      {
        url: "aula-extraescolares-ludoteca",
        name: "Extraescolares - Ludoteca",
      },
      /*       {
        url: "aula-extraescolares-sabado-en-familia",
        name: "Extraescolares - Sábados en familia",
      }, */
    ],
  },
  {
    name: "Quienes somos",
    subOptions: [
      { url: "quienes-somos-proyecto", name: "Proyecto" },
      {
        url: "quienes-somos-espacios",
        name: "Naturaleza y espacios",
      },
      {
        url: "quienes-somos-hegazti",
        name: "Un dia en Hegazti",
      },
      {
        url: "quienes-somos-faqs",
        name: "Preguntas frecuentes",
      },
    ],
  },
  {
    name: "Contacto",
    url: "mas-informacion",
  },
  /* {
    name: "Jornada de puertas abiertas",
    url: "jornada-puertas-abiertas-2023",
    highlighted: true,
  }, */
  {
    name: "Blog",
    url: "//blog.hegaztiescuelabosque.org",
    target: "_blank",
  },
  {
    name: "Calendario Escolar 23/24",
    url: "//docs.google.com/document/d/1Dk-Hd-NI8Y8oh9TxotYUyBzqWnu9dXUMpjkJ1dkAsCY/edit?usp=sharing",
    target: "_blank",
  },
];

export default menu;
