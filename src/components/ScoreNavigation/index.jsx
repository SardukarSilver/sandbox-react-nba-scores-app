import React from 'react';
import { observer } from 'mobx-react';
import { Button, DatePicker } from 'antd';
import moment from 'moment';

import { useRootStore } from '../../store/RootStateContext';

import './styles.less';

const ScoreNavigation = () => {
  const {
    setNewDate,
    selectedDate,
    selectedDateLabel,
    getTodayData,
    getPreviousDayData,
    getNextDayData,
  } = useRootStore();

  const onChange = (date) => {
    setNewDate(date);
  };

  return (
    <>
      <div className="score-navigation-wrapper">
        <DatePicker
          className="score-navigation-date-picker"
          onChange={onChange}
          value={selectedDateLabel ? moment(selectedDateLabel) : null}
        />
        <div className="score-navigation-btns-wrapper">
          <Button onClick={getPreviousDayData} disabled={!selectedDate}>
            Previous Date
          </Button>
          <Button onClick={getTodayData}>Get Today Data</Button>
          <Button onClick={getNextDayData} disabled={!selectedDate}>
            Next Date
          </Button>
        </div>
      </div>
    </>
  );
};

export default observer(ScoreNavigation);
