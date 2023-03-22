import "./HotelsSection.css";
import SearchHotelsForm from "../SearchHotelsForm/SearchHotelsForm";
import FoundHotels from "../FoundHotels/FoundHotels";
import { useCallback, useState } from "react";
import FavouritesHotels from "../FavouritesHotels/FavouritesHotels";
import { priceSortRules, ratingSortRules } from "../../utils/constants";

export default function HotelsSection(props) {
  const [favouritesHotels, setFavouritesHotels] = useState([]);
  const [isSelectedRatingCategory, setIsSelectedRatingCategory] =
    useState(true);

  const onCategoryButtonClick = (evt) => {
    if (evt.target.id === "rating") {
      const newh = [...favouritesHotels].sort(ratingSortRules);
      setFavouritesHotels(newh);
      setIsSelectedRatingCategory(true);
    } else {
      const newh = [...favouritesHotels].sort(priceSortRules);
      setFavouritesHotels(newh);
      setIsSelectedRatingCategory(false);
    }
  };

  const onHotelLikeButtonClick = useCallback(
    (hotel, isHotelLiked, setIsHotelLiked) => {
      if (!isHotelLiked) {
        setFavouritesHotels([hotel, ...favouritesHotels].sort(ratingSortRules));
        setIsHotelLiked(true);
      } else {
        setFavouritesHotels((state) =>
          state.filter((c) => c.hotelId !== hotel.hotelId)
        );
        setIsHotelLiked(false);
      }
    },
    [favouritesHotels]
  );

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
            onCategoryButtonClick={onCategoryButtonClick}
            isSelectedRatingCategory={isSelectedRatingCategory}
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
