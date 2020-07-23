import React from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
 		<div>
          <Header/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
