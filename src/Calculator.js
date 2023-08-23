import React, { useState } from 'react';
import './Calculator.css'; 

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  
  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };
  
  const handleClear = () => {
    setDisplayValue('');
  };
  
  const handleCalculate = () => {
    try {
      const result = eval(displayValue); // Важно: Использование eval не рекомендуется в production коде из-за потенциальных уязвимостей. Используйте библиотеки для безопасной математической оценки.
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };
  
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
