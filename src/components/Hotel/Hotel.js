import { daysWrite } from "../../utils/constants";
import "./Hotel.css";

export default function Hotel(props) {
  return (
    <article className="hotel">
      <div className="hotel__info">
        <div className="hotel__img" />
        <div className="hotel__info-container">
          <h3 className="hotel__name">{props.hotelName}</h3>
          <div className="hotel__date-container">
            <p className="hotel__date">{props.date}</p>
            <div className="hotel__dash" />
            <p className="hotel__date">
              {props.days} {daysWrite[props.days]}
            </p>
          </div>
          <ul className="hotel__stars-list">
            <li
              className={`hotel__star ${
                props.stars >= 1 && "hotel__star_active"
              }`}
            />
            <li
              className={`hotel__star ${
                props.stars >= 2 && "hotel__star_active"
              }`}
            />
            <li
              className={`hotel__star ${
                props.stars >= 3 && "hotel__star_active"
              }`}
            />
            <li
              className={`hotel__star ${
                props.stars >= 4 && "hotel__star_active"
              }`}
            />
            <li
              className={`hotel__star ${
                props.stars === 5 && "hotel__star_active"
              }`}
            />
          </ul>
        </div>
      </div>
      <div className="hotel__like-button" />
      <div className="hotel__price-container">
        <p className="hotel__price-text">Price:</p>
        <span className="hotel__price-count">{props.price} ₽</span>
      </div>
    </article>
  );
}
