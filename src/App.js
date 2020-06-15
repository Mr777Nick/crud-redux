import React, { Component, Fragment } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PostForm />
                <hr/>
                <AllPost />
            </Fragment>
        );
    }
}
export default App;
