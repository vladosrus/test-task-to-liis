import "./HotelsSection.css";
import SearchHotelsForm from "../SearchHotelsForm/SearchHotelsForm";
import FoundHotels from "../FoundHotels/FoundHotels";
import { useState } from "react";
import FavouritesHotels from "../FavouritesHotels/FavouritesHotels";

export default function HotelsSection(props) {
  const [favouritesHotels, setFavouritesHotels] = useState([]);

  return (
    <section className="hotels">
      <div className="hotels__grid-container">
        <div className="hotels__grid-item">
          <SearchHotelsForm onSearchHotels={props.onSearchHotels} />
        </div>
        <div className="hotels__grid-item">
          <FavouritesHotels favouritesHotels={favouritesHotels} />
        </div>
        <div className="hotels__grid-item">
          <FoundHotels
            searchingLocation={props.searchingLocation}
            searchingDate={props.searchingDate}
            searchingDays={props.searchingDays}
            favouritesHotels={favouritesHotels}
            setFavouritesHotels={setFavouritesHotels}
            hotelsToShow={props.hotelsToShow}
          />
        </div>
      </div>
    </section>
  );
}
