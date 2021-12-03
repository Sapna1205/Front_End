import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Form from './Form';
import HereForm from './HereForm';

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
              <Form/>
          </Route>
          <Route path="/HereForm" exact>
            <HereForm/>
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
