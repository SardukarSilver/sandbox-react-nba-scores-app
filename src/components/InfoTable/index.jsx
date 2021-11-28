import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';

import { useRootStore } from '../../store/RootStateContext';
import settings from './configuration/settings';

import './styles.less';

const InfoTable = () => {
  const { score } = useRootStore();

  return (
    <Table
      className="info-table"
      pagination={false}
      columns={settings}
      dataSource={score}
      rowKey="gameId"
    />
  );
};

export default observer(InfoTable);
