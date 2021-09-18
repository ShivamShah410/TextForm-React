import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#002259';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      {/* <div className="container my-3"> */}
        <TextForm
          ipHeading="Enter your Text to analyse"
          opHeading="This is your output text"
          mode={mode}
        />
        {/* <About /> */}
      {/* </div> */}
    </>
  );
}

export default App;
