import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(0)
  // let counter = 35

  function addValue(){
    console.log("value added :",Math.floor((Math.random()*9000+1000)));
    if(counter === 20){
        setCounter(counter = 20)
    }else{
      setCounter(counter +1)
    }
   
  }

  function removeValue(){
    if(counter === 0){
      setCounter(counter = 0)
    }else{
      setCounter(counter -1)
    }
    
  }

  return (
     <>
        <h1>Learning react : {counter}</h1>
        <h2>counter value :{counter}</h2>
        <button onClick={addValue}>add value :{counter}</button><br />
        <button onClick={removeValue}>remove value :{counter}</button>
     </>
  )
}

export default App
