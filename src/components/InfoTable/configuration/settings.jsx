/* eslint-disable react/prop-types */
import React from 'react';
import TeamsVersus from './TeamsVersus';
import GameScore from './GameScore';
import GameInfo from './GameInfo';
import GameLocation from './GameLocation';

import '../styles.less';

const InfoTableColumnsSettings = [
  {
    title: 'Teams (Host vs Visitor)',
    align: 'left',
    className: 'teams-versus-cell',
    editable: false,
    render: ({ hTeam, vTeam }) => (
      <TeamsVersus hostTeam={hTeam} visitorTeam={vTeam} />
    ),
  },
  {
    title: 'Game Score',
    align: 'center',
    editable: false,
    className: 'game-score-cell',
    render: ({ hTeam, vTeam }) => (
      <GameScore hostTeam={hTeam} visitorTeam={vTeam} />
    ),
  },
  {
    title: 'Game Info',
    align: 'center',
    editable: false,
    className: 'game-info-cell',
    render: ({ startTimeUTC, endTimeUTC, gameDuration }) => (
      <GameInfo
        startTime={startTimeUTC}
        endTime={endTimeUTC}
        duration={gameDuration}
      />
    ),
  },
  {
    title: 'Game Location',
    align: 'center',
    editable: false,
    className: 'game-location-cell',
    render: ({ arena }) => (
      <GameLocation
        city={arena.city}
        country={arena.country}
        name={arena.name}
      />
    ),
  },
];

export default InfoTableColumnsSettings;
