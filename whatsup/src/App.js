import React from 'react';
import Firstpage from './components/firstPage'
import Secondpage from './components/secondPage'
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
          <Route exact path="/" > <Firstpage /></Route>
          <Route exact path="/signed" > <Secondpage /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
