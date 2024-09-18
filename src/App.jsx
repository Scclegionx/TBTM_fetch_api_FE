import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import DiabetesForm from './components/Diabetes/DiabetesForm.jsx';
import AirQualityForm from './components/Air/AirQualityForm.jsx';
import GradeForm from './components/Grade/GradeForm.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/diabetes" element={<DiabetesForm />} />
                <Route path="/air-quality" element={<AirQualityForm />} />
                <Route path="/grade" element={<GradeForm />} />
            </Routes>
        </Router>
    );
};

export default App;
