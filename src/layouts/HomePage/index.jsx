import React from 'react';
import { Layout } from 'antd';

import { HomeContentSection } from '../../components';

import './styles.less';

function HomePage() {
  const { Content } = Layout;

  return (
    <Content className="homepage-content-wrapper">
      <HomeContentSection />
    </Content>
  );
}

export default HomePage;
