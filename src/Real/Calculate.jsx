import { useState } from "react";

function Calculate() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(value1 + value2);
  };

  const handleSubtraction = () => {
    setResult(value1 - value2);
  };

  const handleMultiplication = () => {
    setResult(value1 * value2);
  };

  const handleDivision = () => {
    setResult(value1 / value2);
  };

  return (
    <div className="App">
      <input type="number" value={value1} onChange={(e) => setValue1(+e.target.value)} />
      <input type="number" value={value2} onChange={(e) => setValue2(+e.target.value)} />
      <br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <br />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculate;
