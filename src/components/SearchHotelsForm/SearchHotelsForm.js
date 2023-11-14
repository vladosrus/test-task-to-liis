import "./SearchHotelsForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { getTodayDate } from "../../utils/constants";

export default function SearchHotelsForm(props) {
  const { values, handleChange } = useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearchHotels(
      values.location ? values.location : "Москва",
      values.date ? values.date : getTodayDate(),
      values.days ? values.days : 1
    );
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__input-container">
        <h3 className="search-form__input-title">Локация</h3>
        <input
          name="location"
          className="search-form__input"
          type="text"
          required
          value={values.location}
          defaultValue={"Москва"}
          onChange={handleChange}
        />
      </div>
      <div className="search-form__input-container">
        <h3 className="search-form__input-title">Дата заселения</h3>
        <input
          type="date"
          name="date"
          className="search-form__input"
          required
          value={values.date}
          defaultValue={getTodayDate()}
          onChange={handleChange}
          min={getTodayDate()}
        />
      </div>
      <div className="search-form__input-container">
        <h3 className="search-form__input-title">Количество дней</h3>
        <input
          name="days"
          className="search-form__input"
          type="number"
          required
          value={values.days}
          defaultValue={1}
          min={1}
          onChange={handleChange}
        />
      </div>
      <button className="search-form__submit-button" type="submit">
        Найти
      </button>
    </form>
  );
}
