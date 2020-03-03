import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Components/header";
import Welcome from "./Components/Welcome";
import ClassList from './Components/ClassList';
import SignIn from './Components/SignIn';
import CreateAcct from './Components/CreateAcct';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Switch>
        <Route path="/log-in">
          <SignIn />
        </Route>
        <Route path="/new-account">
          <CreateAcct />
        </Route>
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
