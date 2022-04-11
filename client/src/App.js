import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./features/authSlice";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);
  

  return (
    <div >
      <Router>
       <Nav/>
        <div className="container">
          <Routes>
          <Route path='/'element={<Home/>} />
            <Route path="/cart" exact element={<Cart/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
     
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
