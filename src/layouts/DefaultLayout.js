import React,{ Component } from 'react';
import HeadNav from '../common/HeadNav';
import FootNav from '../common/FootNav';
import { Layout } from 'antd';
import {Route} from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import Article from '../routes/Article';
import Resource from '../routes/Resource';

export default class DefaultLayout extends Component{
    render(){
        return (
            <div id='DefaultLayout'>
                <Layout className="layout" style={{ margin: 0, width: "100%", minHeight:document.body.clientHeight, overflow: "auto" }}>
                    <HeadNav />
                    <div className="content-wrap" >
                        <Route path ={this.props.match.url+'/'} component={Home} exact />
                        <Route path ={this.props.match.url+'/about'} component={About} />
                        <Route path ={this.props.match.url+'/article'} component={Article} />
                        <Route path ={this.props.match.url+'/resource'} component={Resource} />
                    </div>
                    <FootNav />
                </Layout>
            </div>
        )
    }
}
