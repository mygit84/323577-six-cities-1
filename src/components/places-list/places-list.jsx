import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';


class PlacesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this._onClick = this._onClick.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onClick(index) {
    this.setState({
      activeCard: index
    });
  }

  _onMouseEnter(index) {
    this.setState({
      activeCard: index
    });
  }

  _onMouseLeave() {
    this.setState({
      activeCard: -1
    });
  }

  render() {
    const {offers} = this.props;

    const listCards = offers.map((item, i) => (
      <PlaceCard
        offer={item}
        onClick={this._onClick}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        index={i}
        key={i}
      />
    ));

    return <div className="cities__places-list places__list tabs__content">
      {listCards}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};


export default PlacesList;
