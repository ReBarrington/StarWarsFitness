import React from "react";
import "./Components.css";
import SignIn from "./SignIn";
import CreateAcct from "./CreateAcct";

export default function Header() {
  return (
    <header>
        <div className="button-container">
            <SignIn />
            <CreateAcct />
        </div>
      <h1>Anywhere Fitness!</h1>
      <img className="header-img" src="https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1735&q=80"></img>
    </header>
  );
}