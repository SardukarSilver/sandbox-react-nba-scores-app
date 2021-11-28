/* eslint-disable react/prop-types  */
import React from 'react';
import PropTypes from 'prop-types';

import '../styles.less';

const GameLocation = ({ city, country, name }) => {
  return (
    <div className="game-location-wrapper">
      <span>
        <span className="bold">Arena: </span>
        {name}
      </span>
      <span>
        <span className="bold">Country: </span>
        {`${city} (${country})`}
      </span>
    </div>
  );
};

GameLocation.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default GameLocation;
