import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Card, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

class Post extends Component {
    render() {
        return (
            <div>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                    <CardBody>
                        <CardTitle><h2>{this.props.post.title}</h2></CardTitle>
                        <CardText>{this.props.post.message}</CardText>
                        <Button onClick={()=>this.props.dispatch({
                                                            type: 'EDIT_POST',
                                                            id: this.props.post.id})}
                                                            className="mx-2"
                                                            color="info">
                            Edit
                        </Button>
                        <Button onClick={()=>this.props.dispatch({
                                                            type: 'DELETE_POST',
                                                            id: this.props.post.id})}
                                                            className="mx-2"
                                                            color="danger">
                            Delete
                        </Button>
                    </CardBody>
                    
                </Card>
            </div>
        );
    }
}
export default connect()(Post);