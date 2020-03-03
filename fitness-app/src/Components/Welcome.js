import React from "react";
import { Link } from "react-router-dom";
import ClassList from "./ClassList";
import "./Components.css";

function Welcome() {
    return (
        <div className="welcome-container">
            <img src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"></img>
            <h1>Welcome to Anywhere Fitness!</h1>
            <h4>Our mission is to make fitness easily available to you, no matter your location or schedule.</h4>
            <Link to="/classes">
                <div>
                    <button>Click Here to See Our Class List!</button>
                </div>
            </Link>
        </div>
    )
}

export default Welcome; 