import React from 'react';
import { Layout } from 'antd';

import './styles.less';

function AboutPage() {
  const { Content } = Layout;

  return (
    <Content className="about-content-wrapper">
      <div className="about-content">
        <span className="">About under construction</span>
      </div>
    </Content>
  );
}

export default AboutPage;
