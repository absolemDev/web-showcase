import { categories } from "./categories.api";

const showcases = [
  {
    _id: "67rdca3eeb7f6fgeed4718151",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.food._id, categories.repair._id],
    products: [
      "67rdca3eeb7f6fgeed4718151",
      "67rdca3eeb7f6fgeed4718152",
      "67rdca3eeb7f6fgeed4718113"
    ],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718152",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [
      categories.repair._id,
      categories.medicines._id,
      categories.stationery._id
    ],
    products: ["67rdca3eeb7f6fgeed4718153", "67rdca3eeb7f6fgeed4718154"],
    rate: 2
  },
  {
    _id: "67rdca3eeb7f6fgeed4718153",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.medicines._id],
    products: ["67rdca3eeb7f6fgeed4718155", "67rdca3eeb7f6fgeed4718156"],
    rate: 2
  },
  {
    _id: "67rdca3eeb7f6fgeed4718154",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.stationery._id],
    products: ["67rdca3eeb7f6fgeed4718157", "67rdca3eeb7f6fgeed4718158"],
    rate: 5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718155",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.electrician_services._id],
    products: ["67rdca3eeb7f6fgeed4718159", "67rdca3eeb7f6fgeed4718150"],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718156",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.plumbing_services._id],
    products: ["67rdca3eeb7f6fgeed4718111", "67rdca3eeb7f6fgeed4718112"],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718157",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.food._id],
    products: [],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718158",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.repair._id],
    products: [],
    rate: 2
  },
  {
    _id: "67rdca3eeb7f6fgeed4718159",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.medicines._id],
    products: [],
    rate: 5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718150",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.stationery._id],
    products: [],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718111",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.electrician_services._id],
    products: [],
    rate: 2.5
  },
  {
    _id: "67rdca3eeb7f6fgeed4718112",
    name: "Искра",
    about:
      "Описание витрины, продоваемых товаров и предоставляемых услуг. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis, ratione aliquam quos, dolor animi qui aperiam sed minima labore tempore ea ad odio placeat ipsa dolorum pariatur illo sapiente, tempora iste totam! Aliquam iste officiis, quod exercitationem, quos tempora soluta doloribus magnam provident tenetur alias totam, corporis cum velit?",
    img: "https://cdn.forbes.ru/files/750x510/story_images/thumbnail.jpeg__1570463130__20641.jpeg",
    owner: "user ID",
    region: "Samara",
    address: "г. Нефтегорск, ул. Школьная-12",
    contacts: "8-(800)-000-00-00",
    categories: [categories.plumbing_services._id],
    products: [],
    rate: 2.5
  }
];

if (!localStorage.getItem("showcases")) {
  localStorage.setItem("showcases", JSON.stringify(showcases));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("showcases")));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const showcases = JSON.parse(localStorage.getItem("showcases"));
    const showcasIndex = showcases.findIndex((s) => s === id);
    showcases[showcasIndex] = { ...showcases[showcasIndex], ...data };
    localStorage.setItem("showcases", JSON.stringify(showcases));
    resolve(showcases[showcasIndex]);
  });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("showcases")).find(
          (showcas) => showcas === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById,
  update
};
