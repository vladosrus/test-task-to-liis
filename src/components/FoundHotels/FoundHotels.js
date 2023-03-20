import "./FoundHotels.css";
import forest1 from "../../images/forest1.jpg";
import forest2 from "../../images/forest2.jpg";
import forest3 from "../../images/forest3.jpg";
import Hotel from "../Hotel/Hotel";

export default function FoundHotels(props) {
  const convertDate = (date) =>
    new Date(date)
      .toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      .slice(0, -3);

  return (
    <>
      <div className="found-hotels__info-container">
        <div className="found-hotels__info-title-container">
          <h2 className="found-hotels__info-title">Отели</h2>
          <div className="found-hotels__arrow" />
          <h2 className="found-hotels__info-title">
            {props.searchingLocation}
          </h2>
        </div>
        <p className="found-hotels__date">{convertDate(props.searchingDate)}</p>
      </div>
      <div className="found-hotels__photo-container">
        <img src={forest1} className="found-hotels__photo" />
        <img src={forest2} className="found-hotels__photo" />
        <img src={forest3} className="found-hotels__photo" />
        <img src={forest1} className="found-hotels__photo" />
        <img src={forest2} className="found-hotels__photo" />
        <img src={forest3} className="found-hotels__photo" />
      </div>
      <p className="found-hotels__favourites-text">
        Добавлено в Избранное:
        <span className="found-hotels__favourites-count">
          {/* количество отелей */}3
        </span>
        отеля
      </p>
      <div className="found-hotels__hotels-container">
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </>
  );
}
