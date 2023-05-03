import React, { useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    // Simulate progress by incrementing the progress state by 10 every second
    const intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  return (
    <div>
      <h2>Progress Bar</h2>
      {/* Display progress bar */}
      <div style={{ border: "1px solid black", width: "300px" }}>
        <div style={{ backgroundColor: "blue", height: "20px", width: `${progress}%` }}></div>
      </div>
      {/* Button to start updating progress */}
      <button onClick={updateProgress}>Start Progress</button>
    </div>
  );
}

export default ProgressBar;
