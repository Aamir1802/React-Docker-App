
import React from 'react';
import './styles.css'; // Import your styles

const Login = () => {
    return (
        <div className="container">
            <form className="login-form">
                <h1>Login To Aamir CSE World</h1>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
                <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
            </form>
        </div>
    );
};

export default Login;
