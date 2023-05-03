import React, { createContext } from 'react';
import ChildB from './ChildB';

const data1 = createContext();
const data2 = createContext();

const ChildA = () => {
  const name = 'Rahul';
  const age = 20;

  return (
    <data1.Provider value={name}>
      <data2.Provider value={age}>
        <ChildB />
      </data2.Provider>
    </data1.Provider>
  );
};

export default ChildA;
export { data1, data2 };

