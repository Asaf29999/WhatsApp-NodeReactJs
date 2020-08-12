import React from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import HomePage from '../HomePage/HomePage'
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100vw',
        minhHeight: '100vh',
        backgroundColor: '#D7DBD7'
    }
}));


const FirstPage = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
         
            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route exact path="/signed" component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
}


export default FirstPage;
