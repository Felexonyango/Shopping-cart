import React from "react";
import './components/Style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
// import Footer from "./components/Footer";

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
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
