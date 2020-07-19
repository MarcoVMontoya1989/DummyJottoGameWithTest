import React from 'react';
import CongratsComponent from "./components/Congrats.component";
import './App.css';

function App() {
  return (
    <div className="App">
      <CongratsComponent success={false}/>
    </div>
  );
}

export default App;
