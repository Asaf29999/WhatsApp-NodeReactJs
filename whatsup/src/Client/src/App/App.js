import React from 'react';
import RegiLogin from '../Components/Registration+Login/Registration+Login'
import { makeStyles } from '@material-ui/core/styles';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({

  background: {
    minWidth: '100vw',
    minhHeight: '190vh',
    backgroundColor: '#D7DBD7'
  }

}));




function App() {
  const classes = useStyles();
  
  return (
    <div  className={classes.background} >
      <Router>
        <Switch>
          <Route exact path="/" > <RegiLogin /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
