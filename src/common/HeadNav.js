import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

export default class HeadNav extends Component {
  state={
       current: 'home',
  };
  handleClick = (e) => {
      this.setState({
          current:e.key,
      });
  }
  render() {
    const { current } =this.state;
    return (
        <Header style={{width:'100%'}}>
            <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            style={{textAlign:'center'}}
            onClick={this.handleClick}
            >
                <Icon type="global" style={{marginRight:20,}} />
                <Menu.Item key="home">
                    <Link to='/home'>首页</Link>
                </Menu.Item>
                <Menu.Item key="aboutme">
                    <Link to='/home/about'>关于我</Link>
                </Menu.Item>
                <Menu.Item key="article">
                    <Link to='/home/article'>文章分享</Link>
                </Menu.Item>
                <Menu.Item key="resource">
                    <Link to='/home/resource'>资源共享</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
  }
}
