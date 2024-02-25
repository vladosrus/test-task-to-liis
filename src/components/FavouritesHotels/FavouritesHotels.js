import Hotel from "../Hotel/Hotel";
import "./FavouritesHotels.css";

export default function FavouritesHotels(props) {
  const ratingCategoryItemClassList = `favourites-hotels__categories-list-item ${
    props.isSelectedRatingCategory &&
    "favourites-hotels__categories-list-item_active"
  }`;
  const ratingCategoryItemTitleClassList = `favourites-hotels__category-title ${
    props.isSelectedRatingCategory && "favourites-hotels__category-title_active"
  }`;
  const ratingCategoryIconClassList = `favourites-hotels__category-icon-active ${
    props.isSelectedRatingCategory &&
    "favourites-hotels__category-icon-active_visible"
  }`;
  const priceCategoryItemClassList = `favourites-hotels__categories-list-item ${
    !props.isSelectedRatingCategory &&
    "favourites-hotels__categories-list-item_active"
  }`;
  const priceCategoryItemTitleClassList = `favourites-hotels__category-title ${
    !props.isSelectedRatingCategory &&
    "favourites-hotels__category-title_active"
  }`;
  const priceCategoryIconClassList = `favourites-hotels__category-icon-active ${
    !props.isSelectedRatingCategory &&
    "favourites-hotels__category-icon-active_visible"
  }`;

  return (
    <>
      <h2 className="favourites-hotels__title">Избранное</h2>
      <ul className="favourites-hotels__categories-list">
        <li className={ratingCategoryItemClassList}>
          <p className={ratingCategoryItemTitleClassList}>Рейтинг</p>
          <div className="favourites-hotels__category-icon">
            <div className={ratingCategoryIconClassList} />
          </div>
          <div
            className="favourites-hotels__category-button"
            id="rating"
            onClick={props.onCategoryButtonClick}
          />
        </li>
        <li className={priceCategoryItemClassList}>
          <p className={priceCategoryItemTitleClassList}>Цена</p>
          <div className="favourites-hotels__category-icon">
            <div className={priceCategoryIconClassList} />
          </div>
          <div
            className="favourites-hotels__category-button"
            id="price"
            onClick={props.onCategoryButtonClick}
          />
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
                date={newHotel.date}
                days={newHotel.days}
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
