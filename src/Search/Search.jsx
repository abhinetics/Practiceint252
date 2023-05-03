import React, { useState } from "react";

const Search = () => {
  const data = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 },
    { id: 4, name: "Product D", price: 40 },
    { id: 5, name: "Product E", price: 50 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
