/* eslint-disable no-console */
import { makeObservable, observable, action, computed } from 'mobx';
import axios from 'axios';
import moment from 'moment';

export default class RootStore {
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      score: observable,
      teamsData: observable,
      selectedDate: observable,
      numberOfGames: observable,
      selectedDateLabel: computed,
      getScore: action,
      getTeamsData: action,
      fetchFullTeamName: action,
      setNewDate: action,
      getTodayData: action,
      getPreviousDayData: action,
      getNextDayData: action,
    });
  }

  isLoading = false;

  score = [];

  teamsData = null;

  selectedDate = null;

  numberOfGames = 0;

  get selectedDateLabel() {
    if (!this.selectedDate) return null;

    return this.selectedDate.toString();
  }

  getScore = () => {
    this.isLoading = true;
    const URL = `https://data.nba.net/prod/v1/${this.selectedDate}/scoreboard.json`;
    axios
      .get(URL)
      .then(({ data }) => {
        this.score = data.games;
        this.numberOfGames = data.numGames;
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        this.isLoading = false;
      });
  };

  getTeamsData = () => {
    axios
      .get('http://data.nba.net/prod/v2/2021/teams.json')
      .then(({ data }) => {
        this.teamsData = data;
      })
      .catch((error) => console.warn(error));
  };

  fetchFullTeamName = (code) => {
    const leagueCollections = Object.entries(this.teamsData.league).map(
      (el) => el[1]
    );

    const fn = leagueCollections
      .find((league) => league.find((el) => el.tricode === code))
      .find((el) => el.tricode === code).fullName;

    return fn;
  };

  getTodayData = () => {
    this.selectedDate = +moment().format('YYYYMMDD');
    this.getScore();
  };

  getPreviousDayData = async () => {
    this.selectedDate -= 1;
    this.getScore();
  };

  getNextDayData = () => {
    this.selectedDate += 1;
    this.getScore();
  };

  setNewDate = (date) => {
    this.selectedDate = +moment(date).format('YYYYMMDD');
    this.getScore();
  };
}
