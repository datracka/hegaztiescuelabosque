type menuType = {
  name: string;
  url?: string;
  subOptions?: { url: string; name: string }[];
};

const menu: menuType[] = [
  {
    name: "El bosque como aula",
    subOptions: [{ url: "aula-madre-de-dia", name: "Made de día" }, {
      url: "aula-infantil",
      name: "Aula Infantil",
    }, {
      url: "primaria",
      name: "Primaria",
    }, {
      url: "extraescolares-ludoteca",
      name: "Extraescolares - Ludoteca",
    }, {
      url: "extraescolares-sabados-en-familia",
      name: "Extraescolares - Sábados en familia",
    }],
  },
  {
    name: "Quienes somos",
    url: "quienes-somos",
  },
  {
    name: "Mas información",
    url: "mas-informacion",
  },
  {
    name: "blog",
    url: "//blog.hegaztiescuelabosque.com",
  },
];

export default menu;
