import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DribbbleOutlined } from '@ant-design/icons';

import './styles.less';

function HeaderSection() {
  const { Header } = Layout;

  return (
    <Header>
      <div className="logo">
        <DribbbleOutlined className="logo-icon" />
      </div>
      <Menu
        theme="dark"
        className="header-navigation-menu"
        mode="horizontal"
        defaultSelectedKeys="Home"
      >
        <Menu.Item key="Home">
          <Link to="/">
            <span className="">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="Settings">
          <Link to="/settings">
            <span className="">Settings</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="About">
          <Link to="/about">
            <span className="">About</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderSection;
