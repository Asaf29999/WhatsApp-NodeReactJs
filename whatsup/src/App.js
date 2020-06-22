import React from 'react';
import Firstpage from './components/firstPage'
import Secondpage from './components/secondPage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
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
