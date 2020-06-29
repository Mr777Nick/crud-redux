import React, { Component, Fragment } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PostForm />
                <hr/>
                <AllPost />
            </Fragment>
        )
    }
}

export default Main;