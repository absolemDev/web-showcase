export const categories = {
  food: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Продкуты питания"
  },
  repair: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Всё для ремонта"
  },
  medicines: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "Медикоменты"
  },
  stationery: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Канцелярские товары"
  },
  electrician_services: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Услуги электрика"
  },
  plumbing_services: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Услуги сантехника"
  }
};
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categories);
    }, 2000);
  });

export default {
  fetchAll
};
