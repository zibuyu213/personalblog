import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default class ContentNav extends Component {
  render() {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24,}}>Content</div>
        </Content>
    );
  }
}
