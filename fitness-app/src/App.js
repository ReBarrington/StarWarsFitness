import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Components/header";
import Welcome from "./Components/Welcome";
import ClassList from './Components/ClassList';
import SignIn from './Components/SignIn';
import CreateAcct from './Components/CreateAcct';
import styled from "styled-components";

const NoLinkStyle = styled(Link) `
  text-decoration: none;
  color: black;
`

function App() {
  return (
    <div className="App">
      <NoLinkStyle to="/">
        <Header />
      </NoLinkStyle>
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
