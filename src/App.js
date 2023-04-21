import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import GradientLineChart from './Components/GradientLineChart'
import React from 'react';
import StackedChart from './Components/StackedChart';
import ConsumerCategoriesBar from './Components/ConsumerCategoriesBar';


function App() {
  
  return (
    <div className="App">
    {/* <GradientLineChart/> */}
    <StackedChart/>
    <ConsumerCategoriesBar/>
    </div>
  );
}

export default App;
