import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class FootNav extends Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center',marginTop:600 }}>Ant Design ©2018 Created by Ant UED</Footer>
    );
  }
}
