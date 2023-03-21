import "./MainPage.css";
import Header from "../Header/Header";
import HotelsSection from "../HotelsSection/HotelsSection";
import { useEffect, useState } from "react";
import * as Api from "../../utils/Api";
import { getTodayDate } from "../../utils/constants";

export default function MainPage(props) {
  const [searchingLocation, setSearchingLocation] = useState("Москва");
  const [searchingDate, setSearchingDate] = useState(getTodayDate());
  const [searchingDays, setSearchingDays] = useState(1);
  const [hotelsToShow, setHotelsToShow] = useState([]);

  useEffect(() => {
    Api.getHotels(searchingLocation, searchingDate, searchingDays)
      .then((res) => {
        setHotelsToShow(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchingLocation, searchingDate, searchingDays]);

  function searchHotels(location, date, days) {
    Api.getHotels(location, date, days)
      .then((res) => {
        setSearchingLocation(location);
        setSearchingDate(date);
        setSearchingDays(days);
        setHotelsToShow(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header onLogout={props.onLogout} />
      <main>
        <HotelsSection
          onSearchHotels={searchHotels}
          searchingLocation={searchingLocation}
          searchingDate={searchingDate}
          searchingDays={searchingDays}
          hotelsToShow={hotelsToShow}
        />
      </main>
    </>
  );
}
