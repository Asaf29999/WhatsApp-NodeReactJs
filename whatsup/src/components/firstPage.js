import React from 'react';
import SignIn from './FirstPage/SignIn'
import SignUp from './FirstPage/SignUp'
import Secondpage from './secondPage'
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
                    <Route exact path="/signed" component={Secondpage} />
                </Switch>
            </Router>
        </div>
    );
}


export default FirstPage;
