import React from "react";
import { Link } from "react-router-dom";
import "./Components.css";
import styled from "styled-components";

const NoLinkStyle = styled(Link) `
  text-decoration: none;
  color: black;
`

export default function Header() {
  return (
    <header className="Header">
        <div className="button-container">
            <Link to="/log-in">
                <button>Log In</button>
            </Link>
            <Link to="/new-account">
                <button>Create a New Account</button>
            </Link>
        </div>
        <NoLinkStyle to="/">
            <h1>Anywhere Fitness!</h1>
        </NoLinkStyle>
      {/* <img className="header-img" src="https://images.unsplash.com/photo-1504025468847-0e438279542c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1735&q=80"></img> */}
    </header>
  );
}