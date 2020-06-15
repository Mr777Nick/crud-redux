import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <PostForm />
                <AllPost />
            </div>
        );
    }
}
export default App;
