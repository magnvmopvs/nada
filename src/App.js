import React, { Component } from 'react';
import './App.css';
import Bom from './Bom';
import Baladinha from './Baladinha';
import Nicolas from './Nicolas';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {value : ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h1>Oi {this.state.value}, tudo certo?</h1>
          <h2>{this.state.bom}</h2>
          <br/>
          <form className="form-group">
          <label>
            Nome:
            <br/>
            <input type='text' nameClass="input-group" value={this.state.value} onChange={this.handleChange}/>
          </label>
          </form>
          <Bom/>
      </div>
      <Baladinha/>
      <Nicolas/>
      </div>
    );
  }
}

module.exports = App;
