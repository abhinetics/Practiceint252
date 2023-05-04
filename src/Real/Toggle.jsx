import React, { useState } from "react";

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); //sets the opposite of the current state
  };

  return (
    <div>
      <div onClick={toggleAccordion}>
        <h2>Accordion Header</h2>
      </div>
      {isOpen && (
        <div>
          <p>Accordion Content</p>
        </div>
      )}
    </div>
  );
}

export default Toggle;
