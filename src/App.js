import React, { Component } from 'react';
import {GetLainsaadantoData} from './serviceClient';
import Histogram from './PresentationalComponents/Histogram';
import Donut from './PresentationalComponents/Donut';

var dataFromAPI=[];

class App extends Component {
  constructor (props){
    super (props);
    this.state={};
  }
 
  UpdateState = data =>{
    dataFromAPI = data;
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
