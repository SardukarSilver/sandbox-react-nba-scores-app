/* eslint-disable react/prop-types  */
import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import * as NBAIcons from 'react-nba-logos';

import { useRootStore } from '../../../store/RootStateContext';
import isWinner from '../../../utils';

import '../styles.less';

const TeamsVersus = ({ hostTeam, visitorTeam }) => {
  const { fetchFullTeamName } = useRootStore();

  const hTeamStatus = isWinner(hostTeam.score, visitorTeam.score);
  const vTeamStatus = isWinner(visitorTeam.score, hostTeam.score);
  const vTeamTricode = hostTeam.triCode;
  const hTeamTricode = visitorTeam.triCode;
  const HTeamLogo = NBAIcons[hTeamTricode];
  const VTeamLogo = NBAIcons[vTeamTricode];
  const hTeamFullName = fetchFullTeamName(hTeamTricode);
  const vTeamFullName = fetchFullTeamName(vTeamTricode);

  return (
    <>
      <div className={`${hTeamStatus} team-label-wrapper`}>
        <HTeamLogo size={30} />
        <span>
          {`${hTeamFullName} (${hTeamTricode})${
            hTeamStatus === 'win' ? ' - WIN' : ''
          }`}
        </span>
      </div>
      <div className={`${vTeamStatus} team-label-wrapper`}>
        <VTeamLogo size={30} />
        <span>
          {`${vTeamFullName} (${vTeamTricode})${
            vTeamStatus === 'win' ? ' - WIN' : ''
          }`}
        </span>
      </div>
    </>
  );
};

TeamsVersus.propTypes = {
  hostTeam: PropTypes.objectOf(PropTypes.any).isRequired,
  visitorTeam: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default observer(TeamsVersus);
