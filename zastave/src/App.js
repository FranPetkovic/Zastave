import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let rezultati1=[]
  let rezultati2=[]
  const [rezulti, setRezultati] = useState([])
  const [currentValue, setCurrentValue] = useState("")
  const [valueState,setValueState] = useState("")

  function handleChange(evt) {
    setCurrentValue(evt.currentTarget.value)
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.com/v3.1/all',
        )
        rezultati1=[result.data]
        rezultati2=rezultati1[0]
        setRezultati(rezultati1[0])
      }
    fetchData()
  },[])
  
  const [currentFruit, setCurrentFruit] = useState("0")
      
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }

  if(currentFruit==="0"){
    rezultati1=rezulti
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0));
  }
  else if(currentFruit==="1"){
    rezultati1=rezulti
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0));
    rezultati2.reverse();
  }
  else if(currentFruit==="2"){
    rezultati1=rezulti
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
    rezultati2.reverse();
  }
  else if(currentFruit==="3"){
    rezultati1=rezulti
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
  }

  return (
    <div>
        {/* <div className='header'>
          <h1>Drzave svijeta</h1>
        </div> */}
        <div className='trazilica'>
          <input
            value={currentValue}
            onChange={(evt) => handleChange(evt)}
          />
          <div>
            <select className='option'
            onChange={(event) => changeFruit(event.target.value)}
            value={currentFruit}
            >
              <option value="0"> Ime: A - Z </option>
              <option value="1"> Ime: Z - A </option>
              <option value="2"> Populacija: silazno </option>
              <option value="3"> Populacija: uzlazno </option>
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
