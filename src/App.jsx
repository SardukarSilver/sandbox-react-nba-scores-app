import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { HeaderSection, FooterSection } from './components';
import { AboutPage, SettingsPage, HomePage } from './layouts';

import './App.less';

function App() {
  return (
    <Layout className="layout">
      <HeaderSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <FooterSection />
    </Layout>
  );
}

export default App;
