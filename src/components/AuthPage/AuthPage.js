import "./AuthPage.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import {
  passwordValidationErrorMessage,
  emailValidationErrorMessage,
  siteName,
} from "../../utils/constants";

export default function AuthPage(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    resetForm();
    props.onLogin();
  }

  return (
    <main>
      <section className="auth-page">
        <div className="auth-page__popup">
          <form className="auth-page__form" onSubmit={handleSubmit} noValidate>
            <h1 className="auth-page__form-title">{siteName}</h1>
            <div className="auth-page__input-container">
              <h3
                className={`auth-page__input-title ${
                  errors.email && "auth-page__input-title_type_error"
                }`}
              >
                Логин
              </h3>
              <input
                name="email"
                className={`auth-page__input ${
                  errors.email && "auth-page__input_type_error"
                }`}
                type="email"
                required
                pattern=".+@.+\..+"
                value={values.email || ""}
                onChange={handleChange}
              />
              <span
                className={`auth-page__error-message ${
                  errors.email && "auth-page__error-message_visible"
                }`}
              >
                {emailValidationErrorMessage}
              </span>
            </div>
            <div className="auth-page__input-container">
              <h3
                className={`auth-page__input-title ${
                  errors.password && "auth-page__input-title_type_error"
                }`}
              >
                Пароль
              </h3>
              <input
                name="password"
                className={`auth-page__input ${
                  errors.password && "auth-page__input_type_error"
                }`}
                type="password"
                required
                pattern="^(?!.*[А-Я а-я]).{8,50}"
                value={values.password || ""}
                onChange={handleChange}
              />
              <span
                className={`auth-page__error-message ${
                  errors.password && "auth-page__error-message_visible"
                }`}
              >
                {passwordValidationErrorMessage}
              </span>
            </div>
            <button
              className="auth-page__submit-button"
              type="submit"
              disabled={!isValid}
            >
              Войти
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
