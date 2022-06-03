
import React from 'react'
import Contetnt from './components/Contetnt';
import Hedaer from './components/Hedaer';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">

        <Hedaer/>

        <Contetnt/>
    
    </div>
    </div>
  );
}

export default App;
