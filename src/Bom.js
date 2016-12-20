import React, { Component } from 'react';
import './App.css';


class Bom extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});

    if(event.target.value == 'sim'){
      this.setState({resp: 'Que bom :)'});
    }else if(event.target.value == 'nao'){
      this.setState({resp: 'Que pena :('});
    }
  }


  render(){
    return(
      <div className="App">
      <label>
      td bem:
      </label>
      <br/>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value=""></option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
      </select>
      <h3>resposta: {this.state.resp}</h3>
      </div>
    );
  }
}

module.exports = Bom;
