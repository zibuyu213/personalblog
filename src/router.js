import React,{ Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import LoginUser from './layouts/LoginUser';

export default class RouterWrap extends Component{
    render(){
        return (
            <div id='router'>
                <HashRouter>
                    <Switch>
                        <Route path='/' component={LoginUser} exact />
                        <Route path='/home' component={DefaultLayout}  />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}
