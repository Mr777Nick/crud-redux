import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Post from './PostComponent';
import EditComponent from './EditComponent';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


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

class AllPost extends Component {
    
    render() {
        const { classes } = this.props;
        console.log(this.props);

        return (
            <Container maxWidth="sm" className={classes.root}>
                <Grid container alignItems="center" justify="center" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" color="textPrimary" display="block" gutterBottom>
                            All Posts
                        </Typography>
                    </Grid>
                    {this.props.posts.posts.map((post) => (
                        <Grid item xs={12} key={post.id}>
                                {post.editing ? <EditComponent post={post} key={post.id} /> :
                                    <Post key={post.id} post={post} />}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(AllPost));