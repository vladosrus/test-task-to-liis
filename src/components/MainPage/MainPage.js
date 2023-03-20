import "./MainPage.css";
import Header from "../Header/Header";
import HotelsSection from "../HotelsSection/HotelsSection";
import { useEffect } from "react";
import * as Api from "../../utils/Api";

export default function MainPage(props) {
  useEffect(() => {
    Api.getHotels(
      props.searchingLocation,
      props.searchingDate,
      props.searchingDays
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.searchingLocation, props.searchingDate, props.searchingDays]);

  return (
    <>
      <Header onLogout={props.onLogout} />
      <main>
        <HotelsSection
          onSearchHotels={props.onSearchHotels}
          searchingLocation={props.searchingLocation}
          searchingDate={props.searchingDate}
          searchingDays={props.searchingDays}
        />
      </main>
    </>
  );
}
