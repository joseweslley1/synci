import React, { Component } from 'react';
import '../css/BotoesInicial.css';

class BotoesInicial extends Component {
  render() {
    return (
      <div >
        
        <button type="button" class="btn btn-cn">Circunstâcia Notificável</button>
        <button type="button" class="btn btn-CN"></button>
        <button type="button" class="btn btn-NM"></button>
        <button type="button" class="btn btn-ISD"></button>
        <button type="button" class="btn btn-EA"></button>
       
      </div>
    );
  }
}

export default BotoesInicial;