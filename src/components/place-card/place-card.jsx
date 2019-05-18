import React from 'react';
import PropTypes from 'prop-types';


const PlaceCard = (props) => {
  const {
    offer,
    onClick,
    onMouseEnter,
    onMouseLeave,
    index
  } = props;

  const clickHandler = (evt) => {
    evt.preventDefault();
    if (onClick && index !== undefined) {
      onClick(index);
    }
  };

  const mouseEnterHandler = (evt) => {
    evt.preventDefault();
    if (onMouseEnter && index !== undefined) {
      onMouseEnter(index);
    }
  };

  const mouseLeaveHandler = (evt) => {
    evt.preventDefault();
    if (onMouseLeave && index !== undefined) {
      onMouseLeave(index);
    }
  };

  return <article className="cities__place-card place-card" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image"
          src={offer.photo}
          width="260"
          height="200"
          alt="Place image"
          onClick={clickHandler}
        />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon"
            width="18"
            height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${offer.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.header}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  index: PropTypes.number
};


export default PlaceCard;
