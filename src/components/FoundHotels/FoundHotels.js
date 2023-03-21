import "./FoundHotels.css";
import forest1 from "../../images/forest1.jpg";
import forest2 from "../../images/forest2.jpg";
import forest3 from "../../images/forest3.jpg";
import Hotel from "../Hotel/Hotel";
import { hotelsWrite, convertDate } from "../../utils/constants";

export default function FoundHotels(props) {
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
        <img src={forest1} alt="Лес" className="found-hotels__photo" />
        <img src={forest2} alt="Лес" className="found-hotels__photo" />
        <img src={forest3} alt="Лес" className="found-hotels__photo" />
        <img src={forest1} alt="Лес" className="found-hotels__photo" />
        <img src={forest2} alt="Лес" className="found-hotels__photo" />
        <img src={forest3} alt="Лес" className="found-hotels__photo" />
      </div>
      <p className="found-hotels__favourites-text">
        Добавлено в Избранное:
        <span className="found-hotels__favourites-count">
          {props.favouritesHotels.length}
        </span>
        {hotelsWrite[props.favouritesHotels.length]}
      </p>
      <ul className="found-hotels__hotels-list">
        {props.hotelsToShow?.map((newHotel) => {
          return (
            <li
              className="found-hotels__hotels-list-item"
              key={newHotel.hotelId}
            >
              <Hotel
                setFavouritesHotels={props.setFavouritesHotels}
                hotel={newHotel}
                hotelName={newHotel.hotelName}
                stars={newHotel.stars}
                price={newHotel.priceAvg}
                date={convertDate(props.searchingDate)}
                days={props.searchingDays}
                onHotelLike={props.onHotelLike}
              />
            </li>
          );
        })}
      </ul>
      {props.hotelsToShow.length === 0 && (
        <p className="found-hotels__not-found">Ничего не найдено</p>
      )}
    </>
  );
}
