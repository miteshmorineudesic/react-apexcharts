import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import GradientLineChart from './Components/GradientLineChart'
import React from 'react';
import StackedChart from './Components/StackedChart';


function App() {
  
  return (
    <div className="App">
    {/* <GradientLineChart/> */}
    <StackedChart/>
    </div>
  );
}

export default App;
