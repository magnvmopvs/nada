import React, { Component } from 'react';
import './App.css';

var andre = 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmobizoo.com.br%2Fwp-content%2Fuploads%2F2016%2F01%2F11120.1333.jpg&f=1';
var azul = '#3300ff';
var vermelho = '#ff0000';


class Baladinha extends Component{
  constructor(props){
    super(props);
    this.state = {corFundo: vermelho};
    this.state = {cont: 0}

    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(event){
    this.setState({corFundo: azul});
    this.setState({corLetra: vermelho});

    this.setState({cont: this.state.cont + 1});

    if (this.state.corFundo == azul) {
      this.setState({corFundo: vermelho});
      this.setState({corLetra: azul});
    }
  }

  render(){
    return(
      <div className="App">
        <div className="Balada" style={{background: this.state.corFundo}}>
          <h1 style={{color: this.state.corLetra}}>BALADINHA MONSTRA</h1>
          <p style={{color: this.state.corLetra}}>cont: {this.state.cont}</p>
          <img src={andre} height='280px'/>
          <br/>
          <br/>
          <button onClick={this.handleChangeColor}>TUTS TUTS TUTS</button>
        </div>
      </div>
    );
  }
}

module.exports = Baladinha;
