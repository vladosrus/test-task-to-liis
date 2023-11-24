import { useState, useEffect, useCallback } from "react";
import { daysWrite, returnNumberInArray } from "../../utils/constants";
import "./Hotel.css";

export default function Hotel(props) {
  const [isHotelLiked, setIsHotelLiked] = useState(false);

  useEffect(() => {
    setIsHotelLiked(
      props.favouritesHotels?.some(
        (favouritesHotel) => favouritesHotel.hotelId === props.hotel.hotelId
      )
    );
  }, [props.favouritesHotels, props.hotel]);

  const handleLikeButtonClick = useCallback(() => {
    const { onHotelLikeButtonClick, hotel } = props;
    hotel.date = props.date;
    hotel.days = props.days;
    onHotelLikeButtonClick(hotel, isHotelLiked, setIsHotelLiked);
  }, [isHotelLiked, props]);

  const hotelInfoClassName = `hotel__info ${
    props.isFavourites && "hotel__info_place_favourites"
  }`;
  const firstHotelStarClassName = `hotel__star ${
    props.stars >= 1 && "hotel__star_active"
  }`;
  const secondHotelStarClassName = `hotel__star ${
    props.stars >= 2 && "hotel__star_active"
  }`;
  const thirdHotelStarClassName = `hotel__star ${
    props.stars >= 3 && "hotel__star_active"
  }`;
  const fourthHotelStarClassName = `hotel__star ${
    props.stars >= 4 && "hotel__star_active"
  }`;
  const fifthHotelStarClassName = `hotel__star ${
    props.stars === 5 && "hotel__star_active"
  }`;
  const hotelLikeButtonClassName = `hotel__like-button ${
    isHotelLiked && "hotel__like-button_active"
  } ${props.isFavourites && "hotel__like-button_place_favourites"}`;
  const hotelPriceContainerClassName = `hotel__price-container ${
    props.isFavourites && "hotel__price-container_place_favourites"
  }`;

  return (
    <article className="hotel">
      <div className={hotelInfoClassName}>
        {!props.isFavourites && <div className="hotel__img" />}
        <div className="hotel__info-container">
          <h3 className="hotel__name">{props.hotelName}</h3>
          <div className="hotel__date-container">
            <p className="hotel__date">{props.date}</p>
            <div className="hotel__dash" />
            <p className="hotel__date">
              {props.days} {daysWrite[returnNumberInArray(props.days)]}
            </p>
          </div>
          <ul className="hotel__stars-list">
            <li className={firstHotelStarClassName} />
            <li className={secondHotelStarClassName} />
            <li className={thirdHotelStarClassName} />
            <li className={fourthHotelStarClassName} />
            <li className={fifthHotelStarClassName} />
          </ul>
        </div>
      </div>
      <div
        className={hotelLikeButtonClassName}
        onClick={handleLikeButtonClick}
      />
      <div className={hotelPriceContainerClassName}>
        <p className="hotel__price-text">Price:</p>
        <span className="hotel__price-count">{props.price} ₽</span>
      </div>
    </article>
  );
}
