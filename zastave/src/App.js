import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let rezultati1=[]
  let rezultati3=[]
  let rezultati2=[]
  const [rezulti, setRezultati] = useState([])
  const [currentValue, setCurrentValue] = useState("")
  const [currentValue2, setCurrentValue2] = useState("")
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
        // rezultati3=rezultati2
        // rezultati3=rezultati2
        setRezultati(rezultati1[0])
      }
    fetchData()
  },[])
  
  const [currentFruit, setCurrentFruit] = useState("0")
  const [currentFruit2, setCurrentFruit2] = useState("")
      
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }

  const changeFruit2 = (newFruit) => {
    setCurrentFruit2(newFruit)
    rezultati2=rezultati3
    if(newFruit==="All"){
        setRezultati(rezultati2)
    }
    
    if(newFruit==="Eu"){
      setRezultati(rezultati2.filter(word => word.region === "Europe"))
      
    }
    // if(newFruit==="Af"){
    //   setRezultati(rezultati2.filter(word => word.region === "Africa"))
    // }
  }

  if(currentFruit==="0"){
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0));
  }
  else if(currentFruit==="1"){
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0));
    rezultati2.reverse();
  }
  else if(currentFruit==="2"){
    rezultati2=rezulti
    
    rezultati2.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0));
    rezultati2.reverse();
  }
  else if(currentFruit==="3"){
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
          <button onClick={()=>{
            console.log(rezultati1)
            console.log(rezultati2)
            console.log(rezultati3)
            console.log(rezulti)
          }}></button>
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
            <select className='option'
            onChange={(event) => changeFruit2(event.target.value)}
            value={currentFruit2}
            >
              <option value={"All"}> Sve </option>
              <option value={"Eu"}> Europa </option>
              <option value={"Af"}> Afrika </option>
              <option value={"Sa"}> Sjeverna Amerika </option>
              <option value={"Ja"}> Juzna Amerika </option>
              <option value={"Az"}> Azika </option>
              <option value={"Oc"}> Oceania </option>
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
