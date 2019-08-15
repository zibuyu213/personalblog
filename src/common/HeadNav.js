import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default class HeadNav extends Component {
  render() {
    return (
        <Header>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
            >
                <Icon type="home" style={{marginLeft: 20 }} />
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="aboutme">
                    <Icon type="user" />
                    关于我
                </Menu.Item>
                <Menu.Item key="article">
                    <Icon type="share-alt" />
                    文章分享
                </Menu.Item>
                <Menu.Item key="resource">
                    <Icon type="cloud-upload" />
                    资源共享
                </Menu.Item>
            </Menu>
        </Header>
    );
  }
}
