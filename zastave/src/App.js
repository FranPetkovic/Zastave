import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.com/v3.1/all',
      );
      console.log(result.data);
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
      <p>Fran</p>
      </header>
    </div>
  );
}

export default App;
