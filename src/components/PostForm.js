import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Col, Row, Form, Button } from 'reactstrap';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    render() {
        return (
            <div className="container">
                <Row className="row-content">
                    <Col md={12} className="text-center">
                        <h1>Create Post</h1>
                    </Col>
                    <Col md={12}>
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <input required type="text" ref={(input) => this.getTitle = input} 
                                        placeholder="Enter Post Title" 
                                        className="form-control" />
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <textarea required rows="5"  ref={(input)=>this.getMessage = input} 
                                        cols="28" placeholder="Enter Post" 
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12} className="text-center">
                                    <Button size="lg">
                                        <span className="fa fa-pencil"></span> Post
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default connect()(PostForm);