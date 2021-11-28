import React from 'react';
import { Layout } from 'antd';

import './styles.less';

function SettingsPage() {
  const { Content } = Layout;

  return (
    <Content className="settings-content-wrapper">
      <div className="settings-content">
        <span className="">Settings under construction</span>
      </div>
    </Content>
  );
}

export default SettingsPage;
