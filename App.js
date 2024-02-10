import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppBar  from './Appbar';
import Pages  from './Pages';
import BasicModal from './popup'
import StickyFooter from './footer';

function App() {
 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <marquee scrollamount="14" bgcolor="red">COUNSELLING AND VISTORS MANAGEMENT</marquee>
      
      <AppBar/>
      </header>
      <div className="App-body">
 
        <Pages/>
        
             </div>  
             <div>
              <BasicModal/>
             </div>
             <div>
              <StickyFooter/>
             </div>
             
             
             
    </div>
    
  );
}

export default App;

