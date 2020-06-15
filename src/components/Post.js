import React, { Component } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Post extends Component {

    render() {
        

        return (
            <div>
                <Card>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="h2">
                            {this.props.post.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.props.post.message}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={()=>this.props.dispatch({
                                                            type: 'EDIT_POST',
                                                            id: this.props.post.id})}
                                                            className="mx-2"
                                                            color="primary">
                            Edit
                        </Button>
                        <Button onClick={()=>this.props.dispatch({
                                                            type: 'DELETE_POST',
                                                            id: this.props.post.id})}
                                                            className="mx-2"
                                                            color="secondary">
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
export default connect()(Post);