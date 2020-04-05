import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {isAuthenticated() ?
                        <>
                            <li>
                                <Link to="/Profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            {/* <li>
                                <Link to="/private">Private</Link>
                            </li> */}
                        </> : <li />}
                    {/* <li>
                        <Link to="/public">Public</Link>
                    </li> */}

                    <li>
                        <Link to="/GitHubCard">GitHub_User_Search</Link>
                    </li>
                    <li>
                        <Link to="/StarMatch">Game</Link>
                    </li>
                    <li>
                        <button onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? "Log Out" : "Log In"}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
