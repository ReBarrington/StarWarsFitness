import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Welcome from "./Components/Welcome";
import './App.css';
import ClassList from './Components/ClassList';

function App() {
  return (
    <div className="App">
      APP HERE
      {/* <Link to="/">
        Henry's homepage here
      </Link> */}
      <Switch>
        <Route path="/classes">
          <ClassList />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
