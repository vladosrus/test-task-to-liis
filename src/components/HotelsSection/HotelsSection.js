import "./HotelsSection.css";
import SearchHotelsForm from "../SearchHotelsForm/SearchHotelsForm";
import FoundHotels from "../FoundHotels/FoundHotels";
import { useState } from "react";

export default function HotelsSection(props) {
  const [selectedHotels, setSelectedHotels] = useState([]);

  return (
    <section className="hotels">
      <div className="hotels__grid-container">
        <div className="hotels__grid-item">
          <SearchHotelsForm onSearchHotels={props.onSearchHotels} />
        </div>
        <div className="hotels__grid-item"></div>
        <div className="hotels__grid-item">
          <FoundHotels
            searchingLocation={props.searchingLocation}
            searchingDate={props.searchingDate}
            searchingDays={props.searchingDays}
            selectedHotels={selectedHotels}
            setSelectedHotels={setSelectedHotels}
            hotelsToShow={props.hotelsToShow}
          />
        </div>
      </div>
    </section>
  );
}
