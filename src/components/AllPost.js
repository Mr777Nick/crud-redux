import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
import { Col, Row } from 'reactstrap';

class AllPost extends Component {
    render() {
        return (
            <div className="container">
                <Row className="row-content">
                    <Col md={12} className="text-center">
                        <h1>All Posts</h1>
                    </Col>

                    <Col md={12}>
                        {this.props.posts.map((post) => (
                            <div key={post.id} className="text-center">
                                {post.editing ? <EditComponent post={post} key={post.id} /> :
                                    <Post key={post.id} post={post} />}
                            </div>
                        ))}
                    </Col>
                
                
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);