import React, { useState } from 'react';
import axios from 'axios';
import '../Form.css';

const GradeForm = () => {
    const [inputData, setInputData] = useState({
        '10%': '',
        '20%_1': '',
        '20%_2': ''
    });
    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/diemthi/v1/predict', inputData);
            setResult(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Predict Grade</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="10%"
                    placeholder="10%"
                    value={inputData['10%']}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="20%_1"
                    placeholder="20%_1"
                    value={inputData['20%_1']}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="20%_2"
                    placeholder="20%_2"
                    value={inputData['20%_2']}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div className="result-popup">
                    <p>Predicted Grade: {result.prediction}</p>
                </div>
            )}
        </div>
    );
};

export default GradeForm;
