import React, { useState } from 'react';
import './PerfectNumberForm.css'


function PerfectNumberForm() {

    const [numberValue, setNumberValue] = useState();
    const [resultValue, setResultValue] = useState();
    const [result, setResult] = useState();


    function handleNumberChange(event) {
        setNumberValue(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_SERVER_URL}/numbers/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: numberValue
        })
            .then(response => response.json())
            .then(data => {
                setResult(data);
                setResultValue(numberValue);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Number:
                <input type="number" value={numberValue} onChange={handleNumberChange} />
            </label>
            <button type="submit">Submit</button>
            {result == true &&
            <h2>The number {resultValue} is a perfect number</h2>
            }
            {result == false &&
            <h2>The number {resultValue} is not a perfect number</h2>
            }
            </form>
        </div>
    );
}
  
export default PerfectNumberForm;