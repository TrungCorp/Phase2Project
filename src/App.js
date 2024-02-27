import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Characters from './Characters';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route path="/characters">
              <Characters></Characters>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
