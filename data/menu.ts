export type menuType = {
  name: string;
  url?: string;
  subOptions?: { url: string; name: string }[];
};

const menu: menuType[] = [
  {
    name: "El bosque como aula",
    subOptions: [{ url: "aula-madre-de-dia", name: "Madre de día" }, {
      url: "aula-infantil",
      name: "Aula Infantil",
    }, {
      url: "aula-primaria",
      name: "Primaria",
    }, {
      url: "aula-extraescolares-ludoteca",
      name: "Extraescolares - Ludoteca",
    }, {
      url: "aula-extraescolares-sabado-en-familia",
      name: "Extraescolares - Sábados en familia",
    }],
  },
  {
    name: "Quienes somos",
    subOptions: [{ url: "quienes-somos-proyecto", name: "Proyecto" }, {
      url: "quienes-somos-espacios",
      name: "Naturaleza y espacios",
    }, {
      url: "quienes-somos-hegazti",
      name: "Un dia en Hegazti",
    }, {
      url: "quienes-somos-faqs",
      name: "Preguntas frecuentes",
    }],
  },
  {
    name: "Contacto",
    url: "mas-informacion",
  },
  {
    name: "blog",
    url: "//blog.hegaztiescuelabosque.org",
  },
];

export default menu;
