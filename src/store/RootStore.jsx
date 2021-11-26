import { makeObservable, observable, action } from 'mobx';
import axios from 'axios';

export default class RootStore {
  constructor() {
    makeObservable(this, {
      isLoading: observable,
      score: observable,
      getScore: action,
    });
  }

  isLoading = true;

  score = [];

  getScore = () => {
    axios
      .get('https://data.nba.net/prod/v1/20211118/scoreboard.json')
      .then(({ data }) => {
        this.score = data;
        console.log(data);
      })
      .catch((error) => console.warn(error));
  };
}
