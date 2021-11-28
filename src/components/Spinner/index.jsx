import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './styles.less';

const Spinner = () => {
  const antIcon = <LoadingOutlined className="spinner-icon" spin />;

  return (
    <div className="spinner-wrapper">
      <Spin indicator={antIcon} size="large" />
    </div>
  );
};

export default Spinner;
