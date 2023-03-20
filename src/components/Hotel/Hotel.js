import "./Hotel.css";

export default function Hotel(props) {
  return (
    <article className="hotel">
      <div className="hotel__info">
        <div className="hotel__img" />
        <div className="hotel__info-container">
          <h3 className="hotel__name">Moscow Marriott Grand Hotel</h3>
          <div className="hotel__date-container">
            <p className="hotel__date">7 июля 2020</p>
            <div className="hotel__dash" />
            <p className="hotel__date">1 день</p>
          </div>
          <ul className="hotel__stars-list">
            <li className="hotel__star hotel__star_active" />
            <li className="hotel__star hotel__star_active" />
            <li className="hotel__star hotel__star_active" />
            <li className="hotel__star" />
            <li className="hotel__star" />
          </ul>
        </div>
      </div>
      <div className="hotel__like-button" />
      <div className="hotel__price-container">
        <p className="hotel__price-text">Price:</p>
        <span className="hotel__price-count">23 924 ₽</span>
      </div>
    </article>
  );
}
