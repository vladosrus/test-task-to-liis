import "./HotelsSection.css";
import SearchHotelsForm from "../SearchHotelsForm/SearchHotelsForm";

export default function HotelsSection(props) {
  return (
    <section className="hotels">
      <div className="hotels__grid-container">
        <div className="hotels__grid-item">
          <SearchHotelsForm />
        </div>
        <div className="hotels__grid-item"></div>
        <div className="hotels__grid-item"></div>
      </div>
    </section>
  );
}
