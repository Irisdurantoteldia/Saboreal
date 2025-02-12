import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  CoffeeOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import './App.css';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <VideoCameraOutlined />,
              label: 'Videos to Edit',
            },
            {
              key: '2',
              icon: <TeamOutlined />,
              label: 'Reviwers',
            },
            {
              key: '3',
              icon: <CoffeeOutlined />,
              label: 'Restaurants',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className="custom-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="menu-toggle-button"
          />
        </Header>
        <Content className="custom-content">
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
