import React from "react";
import { Routes,Route,useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Container/Home";
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route/>
    </Routes>
    </div>
  );
}

export default App;
