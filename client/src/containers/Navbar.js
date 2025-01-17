import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { logout } from "../store/actions/auth";
import Logo from "../images/logo.png";
import {logout} from "../store/actions/auth";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    };
    render() {
        return (
            <nav className="navbar navbar-expand">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Warbler Home"/>
                </Link>
                {this.props.currentUser.isAuthenticated ? (
                    <ul className="nav navbar-nav ml-auto">
                        <li>
                            <Link to={`/users/${this.props.currentUser.user.id}/tweets/new`}>
                                New Tweet
                            </Link>
                        </li>
                        <li>
                            <a onClick={this.logout}>Logout</a>
                        </li>
                    </ul>
                )
                : (
                    <ul className="nav navbar-nav ml-auto">
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/signin">Log in</Link>
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {logout})(Navbar);