import React, { Component, Fragment } from 'react';
import {GetLainsaadantoData} from './serviceClient';
import Histogram from './PresentationalComponents/Histogram';
import DonutManager from './ContainerComponents/DonutManager';
import {Grid} from 'react-bootstrap';
import Navigation from './PresentationalComponents/Navigation';

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
      <Fragment>
        <Navigation/>
        <Grid>
          <Histogram data={dataFromAPI}/>
          <DonutManager data={dataFromAPI}/>
        </Grid>
      </Fragment>
    );
  }
}

export default App;
