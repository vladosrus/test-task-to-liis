import Header from "../Header/Header";
import HotelsSection from "../HotelsSection/HotelsSection";
import "./MainPage.css";

export default function MainPage(props) {
  return (
    <>
      <Header onLogout={props.onLogout} />
      <main>
        <HotelsSection />
      </main>
    </>
  );
}
