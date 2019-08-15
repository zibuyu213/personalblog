import React,{ Component } from 'react';
import HeadNav from '../common/HeadNav';
import FootNav from '../common/FootNav';
import ContentNav from '../common/ContentNav';
import { Layout } from 'antd';


export default class DefaultLayout extends Component{
    render(){
        return (
            <div id='DefaultLayout'>
                <Layout className="layout" style={{ margin: 0, width: "100%", minHeight:document.body.clientHeight, overflow: "auto" }}>
                    <HeadNav />
                    <FootNav />
                </Layout>
            </div>
        )
    }
}
