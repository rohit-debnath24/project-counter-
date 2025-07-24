import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] =useState(5);
  
//let count =5;
const addValue=()=>{
  if(count>=20){
    count=20;
  }else if(count<20){
    setCount(++count);
  }
}
const remValue=()=>{
  if(count<0){
    count=0
  }else if(count>0){
    setCount(--count);
  }
 
}


  return (
    <>
     

      <h1>code aur chai</h1>
      <h2>Counter : {count} </h2>
      <button
       onClick={addValue}>
         add value: {count}</button>
      <br/>
      {/* limited to 20 */}
      <button
      onClick={remValue}>remove value :{count} </button>
      
      
    </>
  )
}

export default App
