import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Ginus";
import Software from "./Pages/Software";
import System from "./Pages/System";
import Testing from "./Pages/Testing";
import SystemTesting from "./Pages/SystemTesting";

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/software" element={<Software/>} />
          <Route path="/testing" element={<Testing/>}>
          <Route path="system" element={<System/>} />    
          <Route path="systemtesting" element={<SystemTesting/>} /> 
          <Route path="systemtesting" element={<SystemTesting/>} />        
        </Route>    
      </Routes>
    </>
  );
} 

export default App;
