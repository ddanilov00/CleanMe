export const sortType = [
  {
    value: "",
    name: ""
  },
  { value: "price_asc", name: "Цена по возрастанию" },
  { value: "price_desc", name: "Цена по убыванию" },
  { value: "rating_asc", name: "Рейтинг по возрастанию" },
  { value: "rating_desc", name: "Рейтинг по убыванию" },
  { value: "popularity_asc", name: "Популярность по возрастанию" },
  { value: "popularity_desc", name: "Популярность по убыванию" }
];

export const selectCity = [
  { value: "", name: "Все города" },
  { value: "Красноярск", name: "Красноярск" },
  { value: "Москва", name: "Москва" },
  { value: "Гродно", name: "Гродно" },
  { value: "Ачинск", name: "Ачинск" },
  { value: "Гомель", name: "Гомель" },
  { value: "Брест", name: "Брест" }
];

export const selectService = [
  { value: "", name: "", _id: 0 },
  { value: "Standart", name: "Стандарт", _id: 1 },
  { value: "Total", name: "Общая", _id: 2 },
  { value: "After_repair", name: "После ремонта", _id: 3 },
  { value: "Chemical_for_carpets", name: "Чистка ковров", _id: 4 },
  { value: "Office", name: "Офис", _id: 5 },
  { value: "Chemical_for_furniture", name: "Чистка мебели", _id: 6 },
  { value: "Pool", name: "Бассейн", _id: 7 }
];

export const selectRegularity = [
  { value: "", name: "", key: 0 },
  { value: "one_time", name: "Разовая", key: 1 },
  { value: "every_week", name: "Каждую неделю", key: 2 },
  { value: "every_two_weeks", name: "Каждые две недели", key: 3 },
  { value: "every_month", name: "Каждый месяц", key: 4 }
];

export const selectStatus = [
  { value: "", name: "" },
  { value: "pending", name: "В ожидании" },
  { value: "canceled", name: "Отменено" },
  { value: "accepted", name: "Подтверждено" }
];
