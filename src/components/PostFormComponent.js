import React, { Component } from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        // boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
    },
    button: {
        marginTop: 16,
    }
});

class PostForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Post: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit = (e) => {
        
        const title = this.state.Title;
        const message =  this.state.Post;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.setState({
            Title: '',
            Post: '',
        });
        alert("Post has been posted succesfully!");
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
        const { classes } = this.props;

        return (
            <Container maxWidth="sm" className={classes.root}>
                
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" color="textPrimary" display="block" gutterBottom>
                            Create Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="Title" required ref={(input) => this.getTitle = input} 
                                                placeholder="Enter Post Title" 
                                                variant="filled" margin="normal"
                                                label="Title" fullWidth 
                                                onChange={this.handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="Post" ref={(input)=>this.getMessage = input} multiline
                                                rows={5} placeholder="Enter Post" 
                                                variant="filled"
                                                label="Post" fullWidth 
                                                onChange={this.handleInputChange}/>
                    </Grid>
                    <Grid item xs={3} >
                        <Button className={classes.button} variant="contained" color="primary" onClick={this.handleSubmit}>
                            <span className="fa fa-pencil"></span> Post
                        </Button>
                    </Grid>
                </Grid>
                
                
            </Container>
        );
    }
}
export default connect()(withStyles(styles, { withTheme: true })(PostForm));