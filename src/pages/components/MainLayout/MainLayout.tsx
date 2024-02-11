import { Layout } from 'antd';
import React, { useState } from 'react';
import Sider from './Sider/Sider';

import './MainLayout.css';
import { Content, Header } from 'antd/lib/layout/layout';


export const MainLayout: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider/>
      
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <button>Главная</button>
          {/* {React.createElement(collapsed ?  : , {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })} */}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};