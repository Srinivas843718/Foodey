import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu/Menu';
import Contact from './contact_us/Contact';
import Dishes from './Blog/Dishes';
import Home from './Home/Home';
import Head from './Home/Head';
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
import Cart from './menu/Cart';
import useMenuAPI from './menu/useMenuAPI'
const App = () => {
  
  return (
    <div >
       <Router>
        <Head></Head>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/Blog" component={Dishes}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        
        </Router> 
    </div>
  )
}

export default App;