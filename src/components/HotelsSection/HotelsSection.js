import "./HotelsSection.css";
import SearchHotelsForm from "../SearchHotelsForm/SearchHotelsForm";
import FoundHotels from "../FoundHotels/FoundHotels";
import { useState } from "react";
import FavouritesHotels from "../FavouritesHotels/FavouritesHotels";

export default function HotelsSection(props) {
  const [favouritesHotels, setFavouritesHotels] = useState([]);

  function onHotelLikeButtonClick(hotel, isHotelLiked, setIsHotelLiked) {
    if (!isHotelLiked) {
      setFavouritesHotels([hotel, ...favouritesHotels]);
      setIsHotelLiked(true);
    } else {
      setFavouritesHotels((state) =>
        state.filter((c) => c.hotelId !== hotel.hotelId)
      );
      setIsHotelLiked(false);
    }
  }

  return (
    <section className="hotels">
      <div className="hotels__grid-container">
        <div className="hotels__grid-item">
          <SearchHotelsForm onSearchHotels={props.onSearchHotels} />
        </div>
        <div className="hotels__grid-item">
          <FavouritesHotels
            favouritesHotels={favouritesHotels}
            onHotelLikeButtonClick={onHotelLikeButtonClick}
          />
        </div>
        <div className="hotels__grid-item">
          <FoundHotels
            searchingLocation={props.searchingLocation}
            searchingDate={props.searchingDate}
            searchingDays={props.searchingDays}
            onHotelLikeButtonClick={onHotelLikeButtonClick}
            hotelsToShow={props.hotelsToShow}
            favouritesHotels={favouritesHotels}
          />
        </div>
      </div>
    </section>
  );
}
