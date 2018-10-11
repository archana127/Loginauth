import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Footer from './Footer';
import Dashboard from './components/Dashboard';
import Testinput from './components/propsstates/Testinput';
import ChildParentinvoke from './components/Intercomp/ChildParentinvoke';

class App extends Component {
  render() {
    return (
      <div className="text-center bg-secondary">
       
        <Heading name="Murthy"/>
        <Footer/>
        <Dashboard/>
       <Testinput/>
       <ChildParentinvoke/>
 
      </div>
    );
  }
}

export default App;
