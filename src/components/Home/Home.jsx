import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Health Prediction App</h1>
            <div className="button-container">
                <Link to="/diabetes">
                    <button className="home-button">Predict Diabetes</button>
                </Link>
                <Link to="/air-quality">
                    <button className="home-button">Predict Air Quality Impact</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
