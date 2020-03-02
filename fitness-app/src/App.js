import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Welcome from "./Components/Welcome";
import './App.css';

function App() {
  return (
    <div className="App">
      APP HERE
      {/* <Link to="/">
        Henry's homepage here
      </Link> */}
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
