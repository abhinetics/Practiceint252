import React, { useState, useEffect } from 'react';

function Life() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    
    if (count !== 0) {
      console.log("Count value updated");
      console.log("Component did update");
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Life;
