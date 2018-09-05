import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BotoesInicial from './components/BotoesInicial';


class App extends Component {
  render() {
    return (
      <div >
        <div class="container-fluid">

          <BotoesInicial/>
          
        </div>
       
      </div>
    );
  }
}

export default App;
