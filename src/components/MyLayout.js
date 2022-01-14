import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
  
  const { Header, Sider, Content } = Layout;
  
const MyLayout = ({ children }) => {
    return (
        <Layout>
        <Sider trigger={null}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/form">Form</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/table">Table</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            { children }
          </Content>
        </Layout>
      </Layout>
    )
}

export default MyLayout
