import React, { Component } from 'react';
import Hero from './Components/layout/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';


class App extends Component {
  render() {
    return (
      <Router>


        <Navbar />
        <Hero />



       
        <Footer />

      </Router>
    );
  }
}

export default App;