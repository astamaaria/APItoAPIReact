import React, {Component} from 'react';
import {XYPlot, XAxis,HorizontalGridLines, VerticalBarSeries} from 'react-vis';

class Histogram extends Component {
     /* Siivoa! */
    render (){
        console.log(this.props.data.lenght)
        var koordinaattiLista=[];
        for(var i=1; i < this.props.data.length; i++){
            console.log(this.props.data[i][0].vastuuministeri)
            koordinaattiLista.unshift({x: i, y: this.props.data[i].length})
        }
       /* this.props.data.forEach(element => {
            console.log(element);
        }); */
        return(
            <XYPlot
                width={800}
                height={300}>
                <HorizontalGridLines />
                <VerticalBarSeries
                data={koordinaattiLista}
                />
                <XAxis />
            </XYPlot>
        );
    }

}

export default Histogram;