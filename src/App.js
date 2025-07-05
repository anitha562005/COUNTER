
import logo from './logo.svg';
import './App.css';
import Counter from "./counter";
import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false); 
  const[name, setName]=useState("");

  return (
    <div className={darkMode ? "container darkMode" : "container"}>
      <h1>Click Counter App</h1>
      <input 
      type="text"
      placeholder="enter your name"
      value={name}
      onChange={(e)=> setName(e.target.value)}/><p>Hello,{name?name:"User"}</p>
      <button className="btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <button className="btn" onClick={() => setShowParagraph(!showParagraph)}>
        {showParagraph ? "Hide Paragraph" : "Show Paragraph"}
      </button>
        <Counter/>
      {showParagraph && (
        <p>The counter keeps track of how many times you click the button.</p>
      )}
    </div>
  );
}

export default App;
