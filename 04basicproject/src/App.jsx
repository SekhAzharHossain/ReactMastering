import { useState } from 'react'
import './App.css'


function App() {
  const [color,setColor]=useState('red')

  return (
    <>
      <div className=' w-full h-screen flex justify-center'
      style={{backgroundColor:color}}
      >
        <div className=' fixed flex flex-wrap bottom-7 justify-center w-3/5 bg-white h-12 rounded-lg p-1 gap-12'>
          <button className='bg-red-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('red')}>
            Red
          </button>
          <button className='bg-yellow-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('yellow')}>
            Yellow
          </button>
          <button className='bg-blue-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('blue')}>
            Blue
          </button>
          <button className='bg-green-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('green')}>
            Green
          </button>
          <button className='bg-black flex-wrap w-14 rounded-full border-white text-white' onClick={()=>setColor('black')}>
            Black
          </button>
          <button className='bg-pink-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('pink')}>
            Pink
          </button>
          <button className='bg-purple-600 flex-wrap w-14 rounded-full border-white' onClick={()=>setColor('purple')}>
            Purple
          </button>
        </div>
      </div>
    </>
  )
}

export default App
