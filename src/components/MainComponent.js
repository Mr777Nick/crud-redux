import React, { Component, Fragment } from 'react';
import PostForm from './PostFormComponent';
import AllPost from './AllPostComponent';
import Header from './Header';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={PostForm} />
                    <Route path="/posts" component={AllPost} />
                    <Redirect to="/home" />
                </Switch>
            </Fragment>
        )
    }
}

export default Main;