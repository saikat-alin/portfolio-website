import React, { useEffect, useState } from "react";

const TestComp = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/contact-form.json`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  const tableData = Object.values(data).map((item) => ({
    email: item.email,
    name: `${item.firstName} ${item.lastName}`,
    message: item.message,
  }));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestComp;
