import React from 'react';
import './App.css';
import LaunchListContainer from './components/AllLaunches/index'
import LaunchDetailContainer from './components/LaunchDetails/index'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
          <LaunchListContainer />
        </Route>
        <Route exact path = '/details'>
          <LaunchDetailContainer />
        </Route>
     </Router>
    </div>
  );
}

export default App;
