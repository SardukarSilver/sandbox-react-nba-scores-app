import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { ScoreNavigation, InfoTable, Spinner } from '../index';
import { useRootStore } from '../../store/RootStateContext';

import './styles.less';

function HomeContentSection() {
  const { getTeamsData, isLoading } = useRootStore();

  useEffect(() => {
    getTeamsData();
  }, [getTeamsData]);

  return (
    <div className="site-layout-content">
      <ScoreNavigation />
      {isLoading ? <Spinner /> : <InfoTable />}
    </div>
  );
}

export default observer(HomeContentSection);
