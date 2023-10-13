import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-cyan-800'>React with TailWind</h1>
      <Card username={'Azhar Hossain'} btntext="clickMe"/>
      <Card username={'Aman'} btntext="pressMe"/>
    </>
  )
}

export default App
