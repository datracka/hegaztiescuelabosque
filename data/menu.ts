type menuType = {
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
