import './App.css';

import React, { useEffect, useState } from 'react';

const API_ENDPOINT = 'https://git.heroku.com/heroku-back-3000.git/users';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINT, {
      mode: 'no-cors', // 'cors' by default
    })
      .then((res) => res.json())
      .then((parsedData) => { setData(parsedData); setLoading(false); });
  }, []);
  console.log(data);

  if (loading) return <h1>loading</h1>;

  return (
    <table>
      <tr>
        {Object.keys(data[0]).map(
          (key) => (<th key={ Math.random() }>{key}</th>),
        )}
      </tr>
      <tbody>
        {data.map((rowInfo) => (
          <tr key={ Math.random() }>
            {
              Object.values(rowInfo).map(
                (cellInfo) => (<td key={ Math.random() }>{cellInfo}</td>),
              )
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
