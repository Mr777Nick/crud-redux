import React, { Component, Fragment } from 'react';
import PostForm from './PostFormComponent';
import AllPost from './AllPostComponent';
import Header from './Header';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={PostForm} />
                    <Route path="/posts" component={AllPost} posts={this.props.posts}/>
                    <Redirect to="/home" />
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));