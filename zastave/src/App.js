import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let rezultati1=[]
  let rezultati2=[]
  const [rezulti, setRezultati] = useState([])
  const [rezulti2, setRezultati2] = useState([])
  const [currentValue, setCurrentValue] = useState("")
  const [currentValue2, setCurrentValue2] = useState("")
  const [valueState,setValueState] = useState("")

  function handleChange(evt) {
    changeFruit2("All")
    rezultati2=[]
    setCurrentValue(evt.currentTarget.value)
    rezulti2.map((item)=>{
      item.name.common=item.name.common.charAt(0).toLowerCase() + item.name.common.slice(1)
      console.log(item.name.common)
      if(item.name.common.startsWith(evt.currentTarget.value) || (item.name.common.includes(evt.currentTarget.value))){
        rezultati2.push(item)
      }
    })
    setRezultati(rezultati2)
    //  console.log(rezulti2)
}
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://restcountries.com/v3.1/all',
        )
        rezultati1=[result.data]
        setRezultati(rezultati1[0])
        setRezultati2(rezultati1[0])
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

    if(newFruit==="All"){
        setRezultati(rezulti2)
    }
    
    else if(newFruit==="Eu"){
        setRezultati(rezulti2.filter(word => word.region === "Europe"))
    }
    else if(newFruit==="Af"){
        setRezultati(rezulti2.filter(word => word.region === "Africa"))
    }
    else if(newFruit==="Sa"){
        setRezultati(rezulti2.filter(word => word.region === "Americas"))
    }
    else if(newFruit==="Az"){
        setRezultati(rezulti2.filter(word => word.region === "Asia"))
    }
    else if(newFruit==="Oc"){
        setRezultati(rezulti2.filter(word => word.region === "Oceania"))
    }
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
        <div className='header'>
          <h1>Drzave svijeta</h1>
        </div> 
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
            <select className='option'
            onChange={(event) => changeFruit2(event.target.value)}
            value={currentFruit2}
            >
              <option value={"All"}> Sve </option>
              <option value={"Eu"}> Europa </option>
              <option value={"Af"}> Afrika </option>
              <option value={"Sa"}> Amerika </option>
              <option value={"Az"}> Azija </option>
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
                    
                    <h2>{item.name.common=item.name.common.charAt(0).toUpperCase() + item.name.common.slice(1)}</h2>
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
