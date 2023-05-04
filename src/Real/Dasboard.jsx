import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Fake API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
