import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if(seconds==0){
          console.log("stop")
          reset()
        }
      }, 1000);
    } 
    else if (!isActive && seconds !== 0) {
      clearInterval(interval); 
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
