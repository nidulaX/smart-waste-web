import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Waste Management System</h1>
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    );
};

export default HomePage;
