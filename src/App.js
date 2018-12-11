import React, { Component } from 'react';
import {GetLainsaadantoData} from './serviceClient';

class App extends Component {
  constructor (props){
    super (props);
    this.state={};
  }
  UpdateState = data =>{
    console.log(data);
    this.setState(this.state);
  }
  GetData = () =>{
    GetLainsaadantoData(this.UpdateState);
  }

  render() {
    return (
      <div>
        <p>Ministeridata</p>
        <button onClick={this.GetData}>Hae Kohteet</button>
      </div>
    );
  }
}

export default App;
