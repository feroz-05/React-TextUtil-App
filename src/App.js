
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  //changing mode;

  function changemode(){
    if(mode === "dark"){
      setmode( "light");
      document.body.style.backgroundColor ='white';
      document.body.style.color='black';
    }else{
      setmode('dark');
      document.body.style.backgroundColor ='#082122';
      document.body.style.color='white';
    
    } 
  }


  return (
    <div>
    <Navbar title="Feroz's" first ="Home" second="About" mode={mode} changemode={changemode}/>
    <div className='container'>
      <TextBox text="Enter your Text Below" mode={mode} />
    </div>
  
    </div>
  );
}

export default App;
