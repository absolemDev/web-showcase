import { categories } from "./categories.api";

const products = [
  {
    _id: "67rdca3eeb7f6fgeed4718151",
    name: "Хлеб",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.food,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718151",
    rate: 2.5,
    comments: [
      {
        userId: "id",
        date: "date",
        grade: "5",
        comment: "comment",
        reply: { date: "date", comment: "comment" },
        history: []
      }
    ]
  },
  {
    _id: "67rdca3eeb7f6fgeed4718152",
    name: "Молоко",
    about: "Описание продукции.",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.food,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718151",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718153",
    name: "Ленолиум",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.repair,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718152",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718154",
    name: "Фанера",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.repair,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718152",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718155",
    name: "Асперин",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.medicines,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718153",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718156",
    name: "Анальгин",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.medicines,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718153",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718157",
    name: "Ручка",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.stationery,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718150",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718158",
    name: "Карандаш",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.stationery,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718150",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718159",
    name: "Подключение розетки",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.electrician_services,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718111",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718150",
    name: "Замена лампочки",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.electrician_services,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718111",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718111",
    name: "Замена смесителя",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.plumbing_services,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718156",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718112",
    name: "Прочистка канализации",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.plumbing_services,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718156",
    rate: 2.5,
    comments: []
  },
  {
    _id: "67rdca3eeb7f6fgeed4718113",
    name: "Колбаса",
    about:
      "Описание продукции. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, dicta!",
    price: 100,
    img: "https://fornax55.ru/image/catalog/bread_catalog/pshenich_1000.jpg",
    category: categories.food,
    region: "Samara",
    showcase: "67rdca3eeb7f6fgeed4718151",
    rate: 2.5,
    comments: []
  }
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("products")));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const productIndex = products.findIndex((prod) => prod._id === id);
    products[productIndex] = {
      ...products[productIndex],
      ...data
    };
    localStorage.setItem("products", JSON.stringify(products));
    resolve(products[productIndex]);
  });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("products")).find(
          (prod) => prod._id === id
        )
      );
    }, 1000);
  });
const getByShowcase = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("products")).filter(
          (prod) => prod.showcase === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById,
  getByShowcase,
  update
};
