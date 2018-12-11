import React, { Component } from 'react';
import {GetLainsaadantoData} from './serviceClient';
import Histogram from './Components/Histogram';
import Donut from './Components/Donut';

var dataFromAPI=[];

class App extends Component {
  constructor (props){
    super (props);
    this.state={};
  }
  /* Siivoa! */
  UpdateState = data =>{
    dataFromAPI = data;
    console.log(data[0].length)
    console.log(data);
    console.log(dataFromAPI);
    this.setState(this.state);
  }
  componentDidMount (){
    GetLainsaadantoData(this.UpdateState);
  }

  render() {
    return (
      <div>
        <Histogram data={dataFromAPI}/>
        <Donut data = {dataFromAPI}/>
      </div>
    );
  }
}

export default App;
