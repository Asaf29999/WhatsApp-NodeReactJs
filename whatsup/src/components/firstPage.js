import React from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Appbar from './Appbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";



function firstPage() {
    return (
        <div>
            <Appbar>
            </Appbar>
            <Router>
                <Switch>
                    <Route exact path="/" > <SignIn /></Route>
                    <Route path="/signup" > <SignUp /></Route>
                </Switch>
            </Router>
        </div>
    );
}


export default firstPage;
