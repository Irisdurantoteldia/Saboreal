import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  CoffeeOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Typography } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Reviewers from './pages/Reviewers';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

// Component to display the page title based on the current route
const PageTitle = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/videos':
        setTitle('Videos to Edit');
        break;
      case '/reviewers':
        setTitle('Reviewers Management');
        break;
      case '/restaurants':
        setTitle('Restaurants');
        break;
      default:
        setTitle('Dashboard');
    }
  }, [location]);

  return <Title level={4} style={{ margin: 0 }}>{title}</Title>;
};

// Main app layout that handles navigation state
const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('1');

  // Update selected key whenever location changes
  useEffect(() => {
    if (location.pathname === '/videos') {
      setSelectedKey('1');
    } else if (location.pathname === '/reviewers') {
      setSelectedKey('2');
    } else if (location.pathname === '/restaurants') {
      setSelectedKey('3');
    } else {
      setSelectedKey('1'); // Default to videos
    }
  }, [location]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          mode="inline" 
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key="1" icon={<VideoCameraOutlined />}>
            <Link to="/videos">Videos to Edit</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link to="/reviewers">Reviewers</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CoffeeOutlined />}>
            <Link to="/restaurants">Restaurants</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="custom-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="menu-toggle-button"
          />
          <PageTitle />
        </Header>
        <Content className="custom-content">
          <Routes>
            <Route path="/reviewers" element={<Reviewers />} />
            <Route path="/videos" element={<h2>Videos to Edit</h2>} />
            <Route path="/restaurants" element={<h2>Restaurants</h2>} />
            <Route path="/" element={<h2>Dashboard</h2>} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

// Main App component with router
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;