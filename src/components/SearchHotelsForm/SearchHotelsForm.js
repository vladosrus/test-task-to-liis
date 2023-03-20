import { useEffect } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { getTodayData } from "../../utils/constants";
import "./SearchHotelsForm.css";

export default function SearchHotelsForm(props) {
  const { values, handleChange } = useFormWithValidation({});

  useEffect(() => {
    values.location = "Москва";
    values.date = getTodayData();
    values.days = 1;
  }, [values]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearchHotels(values);
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
          value={values.location || "Москва"}
          onChange={handleChange}
        />
      </div>
      <div className="search-form__input-container">
        <h3 className="search-form__input-title">Дата заселения</h3>
        <input
          name="date"
          className="search-form__input"
          type="date"
          required
          value={values.date}
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </div>
      <button className="search-form__submit-button" type="submit">
        Найти
      </button>
    </form>
  );
}
