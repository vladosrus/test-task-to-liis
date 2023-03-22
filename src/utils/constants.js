const emailValidationErrorMessage = "Некорректный email";
const passwordValidationErrorMessage =
  "Пароль должен содержать 8 символов без кириллицы";
const siteName = "Simple Hotel Check";

function getTodayDate() {
  return `${new Date().getFullYear()}-0${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
}

function getCheckOutDate(checkIn, days) {
  const checkOutDate = new Date(checkIn);
  checkOutDate.setDate(checkOutDate.getDate() + days);
  return `${checkOutDate.getFullYear()}-0${
    checkOutDate.getMonth() + 1
  }-${checkOutDate.getDate()}`;
}

function convertDate(date) {
  new Date(date)
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -3);
}

const hotelsWrite = [
  "отелей",
  "отель",
  "отеля",
  "отеля",
  "отеля",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отелей",
  "отель",
  "отеля",
];
const daysWrite = [
  "дней",
  "день",
  "дня",
  "дня",
  "дня",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "дней",
  "день",
  "дня",
];

function ratingSortRules(a, b) {
  if (a.stars < b.stars) return 1;
  if (a.stars === b.stars) return 0;
  if (a.stars > b.stars) return -1;
}
function priceSortRules(a, b) {
  if (a.priceAvg < b.priceAvg) return 1;
  if (a.priceAvg === b.priceAvg) return 0;
  if (a.priceAvg > b.priceAvg) return -1;
}

export {
  passwordValidationErrorMessage,
  emailValidationErrorMessage,
  siteName,
  hotelsWrite,
  daysWrite,
  getTodayDate,
  getCheckOutDate,
  convertDate,
  ratingSortRules,
  priceSortRules,
};
