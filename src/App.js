
import './App.css';
import {useState} from 'react';
import DataFetch from './DataFetch';
// const API = "https://api.nobelprize.org/v1/prize.json"
function App() {
  return (
    <div className="App">
      <DataFetch/>
    </div>
  );
}

export default App;
