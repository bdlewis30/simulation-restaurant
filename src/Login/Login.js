import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

export default class Login extends Component {

    
    render() {
        return (
            <div className="loginContainer">
                <section className="auth-container">  {/* 54D */}
                    <div className="logo">
                        <img src="../assets/logo.svg" height="200px" width="200px" alt="logo" />
                            <h1>Welcome to</h1> {/* 54I */}
                            <h2>Good Eats</h2> {/* 54I */}
                    </div>
                        <div className="login">
                            <div>
                                <label for="username">Username: </label> {/* 54J */}
                                <input type="text" /> {/* 54G */}
                            </div>
                            <div>
                                <label for="login">Password: </label>
                                <input type="text" />
                            </div>
                            <div className="auth-buttons">
                                <Link to="/Menu" ><button type="submit">Login</button></Link> {/* 42E */}
                                <Link to="/Register" ><button type="submit" >Register</button></Link>
                            </div>
                        </div>
                </section>
            </div>
        )
    }
}