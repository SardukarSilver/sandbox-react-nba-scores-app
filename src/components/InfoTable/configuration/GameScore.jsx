import React from 'react';
import PropTypes from 'prop-types';

import isWinner from '../../../utils';

import '../styles.less';

const GameScore = ({ hostTeam, visitorTeam }) => {
  return (
    <>
      <div className={isWinner(hostTeam.score, visitorTeam.score)}>
        <span>{`${hostTeam.score}`}</span>
      </div>
      <div className={isWinner(visitorTeam.score, hostTeam.score)}>
        <span>{`${visitorTeam.score}`}</span>
      </div>
    </>
  );
};

GameScore.propTypes = {
  hostTeam: PropTypes.objectOf(PropTypes.any).isRequired,
  visitorTeam: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GameScore;
