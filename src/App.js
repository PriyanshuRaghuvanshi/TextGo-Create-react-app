
import './App.css';
import About from './components/About';
import Box from './components/Box';

import Navbar from './components/Navbar';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
          msg:message,
          type:type
      })
  }
   setTimeout(() => {
     setAlert(null);
   },5000);
  const toggleMode=()=>{
    if(mode==='light'){
    
      setMode('dark')
     // document.body.style.backgroundColor='grey';
     document.body.style = 'background: grey;';
     showAlert("Dark mode on","success");
      }
      else{
   setMode('light')
   document.body.style.backgroundColor='white';
   showAlert("light mode on","success");
        }
    }
  return ( <>
     <Router>
    
<Navbar title="TextGO" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">

        <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route  exact path="/" element={<Box heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
 
 
</Router>
</>
  );
}

export default App;
