import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)

  // let counter=10

  const addValue=()=>{
    // let value=Math.floor(Math.random()*10)
    // console.log(value)
    // counter+=1
    if(counter<20){

      setCounter(counter+1)
    }
  }
  const decreaseValue=()=>{
    if(counter!=0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value :{counter}</h2>

      <button
      onClick={addValue}
      >Add Value to {counter}</button><br></br>
      <button
      onClick={decreaseValue}
      >decrease Value to {counter}</button>
    </>
  )
}

export default App