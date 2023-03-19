const emailValidationErrorMessage = "Некорректный email";
const passwordValidationErrorMessage =
  "Пароль должен содержать 8 символов без кириллицы";
const siteName = "Simple Hotel Check";
const getTodayData = () =>
  `${new Date().getFullYear()}-0${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

export {
  passwordValidationErrorMessage,
  emailValidationErrorMessage,
  siteName,
  getTodayData,
};
