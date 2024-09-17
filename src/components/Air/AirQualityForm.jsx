import React, { useState } from 'react';
import axios from 'axios';
import '../Form.css';

const AirQualityForm = () => {
    const [aqi, setAQI] = useState('');
    const [pm25, setPM25] = useState('');
    const [pm10, setPM10] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/air_quality/v1/predict', {
                AQI: aqi,
                PM2_5: pm25,
                PM10: pm10,
            });
            setResult(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Air Quality Impact Prediction</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="AQI"
                    value={aqi}
                    onChange={(e) => setAQI(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="PM2.5"
                    value={pm25}
                    onChange={(e) => setPM25(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="PM10"
                    value={pm10}
                    onChange={(e) => setPM10(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div className="result-popup">
                    <p>Predicted Score: {result.predicted_score}</p>
                    <p>Predicted Class: {result.predicted_class}</p>
                </div>
            )}
        </div>
    );
};

export default AirQualityForm;
