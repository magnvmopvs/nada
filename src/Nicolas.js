import React, { Component } from 'react';
import './App.css'

var nicCage = 'http://img.pandawhale.com/96231-wind-blowing-Nicolas-Cage-hair-GPA9.gif';
var bee = 'http://1.bp.blogspot.com/-sBDBp-FEQ-Y/Tecan7znouI/AAAAAAAADHU/oCCIqkCF74E/s1600/Bee.png'
var nicBee = 'http://big.assets.huffingtonpost.com/tumblr_lzdjy2aDiu1r2pxgdo1_400.gif'
var palmeta = 'http://www.plasticosbosch.com.ar/wp-content/uploads/wpclassifieds/2011/07/29/788-1.png'

class Nicolas extends Component{
  constructor(props){
    super(props);
    this.state = {src: nicCage};

    this.releaseTheBees = this.releaseTheBees.bind(this);
    this.killTheBee = this.killTheBee.bind(this);
  }

  releaseTheBees(event){
    this.setState({src: nicBee});
  }

  killTheBee(event){
    this.setState({src: nicCage});

  }

  render(){
    return (
      <div className="App">
        <h1>Watch out for the bee!</h1>
        <img src={this.state.src}/>
        <br/>
        <br/>
        <br/>
        <img src={bee} width='100px' onClick={this.releaseTheBees}/>
        <img src={palmeta} width='100px' onClick={this.killTheBee}/>
        <p>(dont click the bee)</p>
      </div>
    );
  }
}

module.exports = Nicolas;
