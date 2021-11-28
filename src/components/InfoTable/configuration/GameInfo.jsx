import React, { memo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import '../styles.less';

const GameInfo = ({ startTime, endTime, duration }) => {
  return (
    <div className="game-date-wrapper">
      <span>
        <span className="bold">Game start: </span>
        {moment(startTime).format('MMMM Do YYYY, h:mm:ss a')}
      </span>
      {endTime && (
        <span>
          <span className="bold">Game end: </span>
          {moment(endTime).format('MMMM Do YYYY, h:mm:ss a')}
        </span>
      )}
      {duration.hours && (
        <span>
          <span className="bold">Duration: </span>
          {`${duration.hours}h ${duration.minutes}m`}
        </span>
      )}
    </div>
  );
};

GameInfo.defaultProps = {
  endTime: '',
};

GameInfo.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string,
  duration: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default memo(GameInfo);
