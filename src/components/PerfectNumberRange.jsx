import React, { useState } from 'react';
import './PerfectNumberForm.css'


function PerfectNumberRange() {

    const [number1Value, setNumber1Value] = useState();
    const [number2Value, setNumber2Value] = useState();
    const [result, setResult] = useState();


    function handleNumber1Change(event) {
        setNumber1Value(event.target.value);
    }    
    
    function handleNumber2Change(event) {
        setNumber2Value(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();

        fetch(`${import.meta.env.VITE_SERVER_URL}/numbers/range`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                    number1: {
                        perfectNumber: number1Value
                    },
                    number2: {
                        perfectNumber: number2Value
                    }
                })
        })
            .then(response => response.json())
            .then(data => {
                setResult(data.map((value)=> 
                <li>{value}</li>
                ));
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
                Number 1:
                <input type="number" value={number1Value} onChange={handleNumber1Change} />
            </label>
            <label>
                Number 2:
                <input type="number" value={number2Value} onChange={handleNumber2Change} />
            </label>
            <button type="submit">Submit</button>
            {(result == undefined || result.length <= 0 ) && 
                <h2>There are no perfect numbers in this range</h2>
            }
            {result != undefined && result.length > 0 &&
            <div>
                <h2>The perfect numbers that are between the range are these:</h2>
                <ul>{result}</ul>
            </div>
            }
            </form>
        </div>
    );
}
  
export default PerfectNumberRange;