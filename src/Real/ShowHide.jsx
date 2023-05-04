import { useState } from "react";

function ShowHide() {
  const [showElement, setShowElement] = useState(true);

  const handleClick = () => {
    setShowElement(!showElement);
  };

  return (
    <div className="App">
      {showElement && <p>This element will be hidden when the button is clicked.</p>}
      <br />
      <button onClick={handleClick}>Hide Element</button>
    </div>
  );
}

export default ShowHide;
