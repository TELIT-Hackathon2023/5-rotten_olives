import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Intro from "./components/layouts/Intro";
import Default from "./components/layouts/Default";
import Login from "./components/layouts/Login";
import Register from "./components/layouts/Register";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro key={`route-/`}/>}/>
          <Route path="/login" element={<Login key={`route-/login`}/>}/>
          <Route path="/register" element={<Register key={`route-/register`}/>}/>
          <Route path="/reserve" element={<Default key={`route-/reserve`}/>}/>
          {/*<Route path="/product/:id" element={<Default aaa={"product"} key={`route-/product`}/>}/>*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
