import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Card, CardText, CardBody,
    CardTitle, Button, Form
  } from 'reactstrap';

class EditComponent extends Component {
    
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    render() {
        return (
            <div>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                    <CardBody>
                        <Form onSubmit={this.handleEdit}>
                            <CardTitle>
                                <input required type="text" ref={(input) => this.getTitle = input}
                                    defaultValue={this.props.post.title} placeholder="Enter Post Title" 
                                    className="form-control" />
                            </CardTitle>
                            <CardText>
                                <textarea required rows="5" ref={(input) => this.getMessage = input}
                                    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" 
                                    className="form-control" />    
                            </CardText>
                            <Button color="info">Update</Button>
                        </Form>
                    </CardBody> 
                </Card>
            </div>
        );
    }
}
export default connect()(EditComponent);