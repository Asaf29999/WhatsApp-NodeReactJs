import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import SignIn from '../Components/Registration+Login/SignIn'
import SignUp from '../Components/Registration+Login/SignUp'
import HomePage from '../Components/HomePage/HomePage'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100vw',
        minhHeight: '100vh',
    }
}));

const RegiLogin = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signed" component={HomePage} />
                </Switch>
            </Router>
        </div>
    );
}

export default RegiLogin;
