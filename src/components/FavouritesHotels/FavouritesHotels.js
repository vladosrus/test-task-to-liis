import Hotel from "../Hotel/Hotel";
import "./FavouritesHotels.css";

import { convertDate } from "../../utils/constants";

export default function FavouritesHotels(props) {
  return (
    <>
      <h2 className="favourites-hotels__title">Избранное</h2>
      <ul className="favourites-hotels__categories-list">
        <li className="favourites-hotels__categories-list-item">
          <p className="favourites-hotels__category-title">Рейтинг</p>
        </li>
        <li className="favourites-hotels__categories-list-item">
          <p className="favourites-hotels__category-title">Цена</p>
        </li>
      </ul>
      <ul className="favourites-hotels__list">
        {props.favouritesHotels?.map((newHotel) => {
          return (
            <li
              className="found-hotels__hotels-list-item"
              key={newHotel.hotelId}
            >
              <Hotel
                isFavourites={true}
                hotel={newHotel}
                hotelName={newHotel.hotelName}
                stars={newHotel.stars}
                price={newHotel.priceAvg}
                date={convertDate(props.searchingDate)}
                days={props.searchingDays}
                onHotelLikeButtonClick={props.onHotelLikeButtonClick}
                favouritesHotels={props.favouritesHotels}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
