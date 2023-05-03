import React, { useContext } from 'react';
import { data1, data2 } from './ChildA';

const ChildC = () => {
  const name = useContext(data1);
  const age = useContext(data2);

  return (
    <h1>
      ChildC {name} {age}
    </h1>
  );
};

export default ChildC;
