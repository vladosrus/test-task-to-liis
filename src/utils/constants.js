const emailValidationErrorMessage = "Некорректный email";
const passwordValidationErrorMessage =
  "Пароль должен содержать 8 символов без кириллицы";
const siteName = "Simple Hotel Check";
const getTodayDate = () =>
  `${new Date().getFullYear()}-0${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
const getCheckOutDate = (checkIn, days) => {
  const checkOutDate = new Date(checkIn);
  checkOutDate.setDate(checkOutDate.getDate() + days);
  return `${checkOutDate.getFullYear()}-0${
    checkOutDate.getMonth() + 1
  }-${checkOutDate.getDate()}`;
};

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

export {
  passwordValidationErrorMessage,
  emailValidationErrorMessage,
  siteName,
  hotelsWrite,
  daysWrite,
  getTodayDate,
  getCheckOutDate,
};
