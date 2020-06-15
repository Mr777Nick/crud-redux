import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class EditComponent extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Title: this.props.post.title,
            Post: this.props.post.title,
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.state.Title;
        const newMessage =  this.state.Post;
        const data = {
            newTitle,
            newMessage
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent style={{ textAlign: 'center' }}>
                        <Typography variant="h5" component="h2">
                            <TextField name="Title" required ref={(input) => this.getTitle = input} 
                                                defaultValue={this.props.post.title}
                                                placeholder="Enter Post Title" 
                                                variant="outlined" margin="normal"
                                                label="Title" fullWidth 
                                                onChange={this.handleInputChange} />
                            <TextField name="Post" ref={(input)=>this.getMessage = input} multiline
                                                defaultValue={this.props.post.message}
                                                rows={5} placeholder="Enter Post" 
                                                variant="outlined"
                                                label="Post" fullWidth 
                                                onChange={this.handleInputChange}/>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.handleEdit} className="mx-2" color="primary">
                            Edit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
export default connect()(EditComponent);