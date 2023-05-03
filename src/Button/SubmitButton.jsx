import React, { useState } from "react";

function SubmitButton() {
  const [buttonColor, setButtonColor] = useState("blue");
  const [buttonText, setButtonText] = useState("Submit");

  // Function to handle button click
  function handleClick() {
    // Change button color and text when clicked
    setButtonColor("green");
    setButtonText("Submitted!");
  }

  return (
    <div>
      <h2>Submit Button</h2>
      {/* Display button */}
      <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default SubmitButton;
