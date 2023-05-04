import React, { useState } from "react";

function Checkbox() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckChange = event => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, event.target.name]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== event.target.name));
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <ul>
        <li>
          <input type="checkbox" name="option1" onChange={handleCheckChange} />
          Option 1
        </li>
        <li>
          <input type="checkbox" name="option2" onChange={handleCheckChange} />
          Option 2
        </li>
        <li>
          <input type="checkbox" name="option3" onChange={handleCheckChange} />
          Option 3
        </li>
      </ul>
      <div>
        Selected options: {checkedItems.join(", ")}
      </div>
    </div>
  );
}

export default Checkbox;
