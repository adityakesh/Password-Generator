//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { UC, LC, NC, SC } from "./data/PassChar";

function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [numbers,setNumbers]=useState(false)
  let [symbols,setSymbols]=useState(false)
  let [passlength,setPasslength]=useState()
  let [fPass,setPass]=useState('')

  let createPassword=()=>{
    let finalPass=''
    let charSet = ''
    if(uppercase || lowercase || numbers || symbols){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(numbers) charSet+=NC;
      if(symbols) charSet+=SC;
      for(let i = 0;i<passlength;i++){
        finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalPass)

    }else {
      alert('Please select atleast one CheckBox!....')
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }


  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" value={fPass} readOnly /> <button 
          onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <lable>Password Length</lable>
          <input type="number" max={20} min={4} value={passlength} 
          onChange={(event)=>setPasslength(event.target.value)}/>
        </div>
        <div className="passLength">
          <lable>Include uppercase letters</lable>
          <input type="checkbox" checked={uppercase} 
          onChange={()=>setUppercase(!uppercase)}/>
        </div>
        <div className="passLength">
          <lable>Include lowercase letters</lable>
          <input type="checkbox" checked={lowercase} 
          onChange={()=>setLowercase(!lowercase)}/>
        </div>
        <div className="passLength">
          <lable>Include Numbers</lable>
          <input type="checkbox" checked={numbers} 
          onChange={()=>setNumbers(!numbers)}/>
        </div>
        <div className="passLength">
          <lable>Include Symbols</lable>
          <input type="checkbox" checked={symbols} 
          onChange={()=>setSymbols(!symbols)}/>
        </div>
        <button className='btn' onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
