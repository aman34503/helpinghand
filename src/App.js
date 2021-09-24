import React, { Component } from 'react';
import Hero from './Components/layout/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/layout/Footer';
import Navbarmenu from './Components/layout/Navbarmenu';
import Home from './Components/pages/Home';
import About from './Components/pages/About'
import Charity from './Components/pages/Charity';
import DonateForm from './Components/pages/DonateForm';
import Donate from './Components/pages/Donate';
import Search from './Components/pages/Search';
import News from './Components/pages/News';
import Blog from './Components/pages/Blog';
import Combine from './Components/pages/Combine';
{/* import Contact from './Components/pages/Contact'; */}



class App extends Component {
  render() {
    return (
      <Router>


        <Navbarmenu />

        <Hero />
        <Switch>
        <Route path="/" exact={true} component={Home} />
                <Route path="/about" exact={true} component={About} />
                <Route path="/donateform" exact={true} component={DonateForm} />
                <Route path="/donate" exact={true} component={Donate} />
                <Route path="/News" exact={true} component={News} />
                <Route path="/Charity" exact={true} component={Charity} />
                <Route path="/Search" exact={true} component={Search} />
                <Route path="/Blog" exact={true} component={Blog} />
  
             {  /*  <Route path="/contact" exact={true} component={Contact} />  */ }
           
      
                <Route path="/Map" exact={true} component={Map} />
                <Route path="/Combine" exact={true} component={Combine} />
          </Switch>


       
        <Footer />

      </Router>
    );
  }
}

export default App;