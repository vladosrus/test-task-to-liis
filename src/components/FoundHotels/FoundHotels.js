import "./FoundHotels.css";
import Hotel from "../Hotel/Hotel";
import { hotelsWrite, convertDate, PhotosContext } from "../../utils/constants";
import { useContext } from "react";

export default function FoundHotels(props) {
  const photos = useContext(PhotosContext);

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
      <ul className="found-hotels__photo-container">
        {photos?.map((photo, index) => {
          return (
            <li className="found-hotels__photo-container-item" key={index}>
              <img src={photo} alt="Лес" className="found-hotels__photo" />
            </li>
          );
        })}
      </ul>
      <p className="found-hotels__favourites-text">
        Добавлено в Избранное:
        <span className="found-hotels__favourites-count">
          {props.favouritesHotels.length}
        </span>
        {hotelsWrite[props.favouritesHotels.length % 20]}
      </p>
      <ul className="found-hotels__hotels-list">
        {props.hotelsToShow?.map((newHotel) => {
          return (
            <li
              className="found-hotels__hotels-list-item"
              key={newHotel.hotelId}
            >
              <Hotel
                isFavourites={false}
                onHotelLikeButtonClick={props.onHotelLikeButtonClick}
                favouritesHotels={props.favouritesHotels}
                hotel={newHotel}
                hotelName={newHotel.hotelName}
                stars={newHotel.stars}
                price={newHotel.priceAvg}
                date={convertDate(props.searchingDate)}
                days={props.searchingDays}
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
