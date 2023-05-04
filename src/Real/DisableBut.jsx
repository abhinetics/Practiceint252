import { useState } from "react";

function DisableBut() {
  const [value, setValue] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
    setDisableButton(!event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <button disabled={disableButton}>Submit</button>
    </div>
  );
}

export default DisableBut;
