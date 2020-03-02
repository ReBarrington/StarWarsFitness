import React from "react";
import { Link } from "react-router-dom";
import ClassList from "./ClassList";

function Welcome() {
    return (
        <div className="welcome-container">
            <h1>Welcome to Anytime Fitness!</h1>
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