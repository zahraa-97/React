import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const plus = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult + inputValue);
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult - inputValue);
  };

  const times = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult * inputValue);
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult / inputValue);
  };

  const resetInput = (e) => {
    e.preventDefault();
    setInputValue(0);
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div>
      <h2>Build a Calculator using React</h2>
      <form>
        <p>{result}</p>
        <input
          type='number'
          placeholder='Type a number'
          value={inputValue}
          onChange={handleInputChange}
        />
        <br />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Times</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput} className='btn1'>Reset Input</button>
        <button onClick={resetResult} className='btn2'>Reset Result</button>
      </form>
    </div>
  );
};

export default Calculator;
