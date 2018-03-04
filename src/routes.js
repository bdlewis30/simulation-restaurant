import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import Menu from './Menu/Menu';
import Register from './Register/Register';
import AddItemView from './AddItem/AddItemView';

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/Menu' component={Menu}/>
        <Route path='/Register' component={Register}/>
        <Route path='/AddItemView' component={AddItemView}/>
    </Switch>
)