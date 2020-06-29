import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Post It
                </Typography>
                <MenuItem>
                    <Link to='/home'><Icon className="fa fa-edit" style={{ color: grey[50] }}/></Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/posts'><Icon className="fa fa-sticky-note-o" style={{ color: grey[50] }}/></Link>
                </MenuItem>
                <Typography color="inherit">
                    Bagas Naufal Insani
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

}