import React, { useState } from 'react';
import axios from 'axios';
import '../Form.css';

const DiabetesForm = () => {
    const [glucose, setGlucose] = useState('');
    const [bmi, setBMI] = useState('');
    const [age, setAge] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/diabetes/v1/predict', {
                Glucose: glucose,
                BMI: bmi,
                Age: age,
            });
            setResult(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Diabetes Prediction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Glucose"
                    value={glucose}
                    onChange={(e) => setGlucose(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="BMI"
                    value={bmi}
                    onChange={(e) => setBMI(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div className="result-popup">
                    <p>Prediction: {result.prediction === 1 ? 'Diabetic' : 'Not Diabetic'}</p>
                    <p>Confidence: {result.confidence}%</p>
                </div>
            )}
        </div>
    );
};

export default DiabetesForm;
