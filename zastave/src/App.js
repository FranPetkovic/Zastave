import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let rezultati1=[]
  const [rezulti, setRezultati] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.com/v3.1/all',
      )
      rezultati1=[result.data]
      setRezultati(rezultati1[0])
    }
    fetchData()
  },[])


  return (
    <div>
        <div className='header'>
          <h1>Drzave svijeta</h1>
        </div>
        <div className='trazilica'>
          <input type="text"></input>
          <div>
            <select className='option'>
              <option> Ime: A - Z </option>
              <option> Ime: Z - A </option>
              <option> Populacija: silazno </option>
              <option> Populacija: uzlazno </option>
            </select>
            <select className='option'>
              <option> Europa </option>
              <option> Afrika </option>
              <option> Sjeverna Amerika </option>
              <option> Juzna Amerika </option>
              <option> Azika </option>
              <option> Oceania </option>
            </select>
          </div>
        </div>
        <div className='grid'>
          {rezulti.map((item)=>{
              return (
                <div className='drzava'>
                  <img src={item.flags.svg} className='slikaZastave'></img>
                  <div className='podatki'>
                    <h2>{item.name.common}</h2>
                    <p>Populacija: {item.population}</p>
                    <p>Regija: {item.region}</p>
                    <p>Glavni grad: {item.capital}</p>
                  </div>
                </div>
              )
          })}
        </div>
    </div>
);
}

export default App;
// function App() {

//   let rezultati1=[]
//   const [rezulti, setRezultati] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         'https://restcountries.com/v3.1/all',
//       )
//       rezultati1=[result.data]
//       setRezultati(rezultati1[0])
//     }
//     fetchData()
//   },[])
