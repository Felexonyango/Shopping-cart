import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div >
      <Router>
       <Nav/>
        <div className="container">
          <Routes>
          <Route path='/'element={<Home/>} />
            <Route path="/cart" exact element={<Cart/>}/>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
     
      </Router>
    </div>
  );
}

export default App;
