import React from "react";
import forest1 from "../images/forest1.jpg";
import forest2 from "../images/forest2.jpg";
import forest3 from "../images/forest3.jpg";

const PhotosContext = React.createContext();
const photosArray = [forest1, forest2, forest3, forest1, forest2, forest3];

const emailValidationErrorMessage = "Некорректный email";
const passwordValidationErrorMessage =
  "Пароль должен содержать 8 символов без кириллицы";
const siteName = "Simple Hotel Check";

function returnTrueDate(date) {
  if (date.getMonth() + 1 > 9) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  } else {
    return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  }
}

function getTodayDate() {
  return returnTrueDate(new Date());
}

function getCheckOutDate(checkIn, days) {
  const checkOutDate = new Date(checkIn);
  checkOutDate.setDate(checkOutDate.getDate() + days);
  return returnTrueDate(checkOutDate);
}

function convertDate(date) {
  return new Date(date)
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
  PhotosContext,
  photosArray,
  getTodayDate,
  getCheckOutDate,
  convertDate,
  ratingSortRules,
  priceSortRules,
};
