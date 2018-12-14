import React from 'react';
import {XYPlot,XAxis,YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import './Histogram.css'
import {Jumbotron} from 'react-bootstrap';

const Histogram = (props) =>{
    const koordinaattiLista=[];
    
    for(let i=0; i < props.data.length; i++){
        koordinaattiLista.unshift({x: props.data[i][0].vastuuministeri.lastName, y: props.data[i].length})
    }

    return(
        <div>
            <XYPlot
                xType="ordinal"
                className="rotationalText"
                width={1000}
                height={300}>
                <HorizontalGridLines />
                <VerticalBarSeries 
                data={koordinaattiLista}
                />
                <YAxis/>
                <XAxis />
            </XYPlot>
            <Jumbotron className="Jumbotron">
                <h3>Käynnissä olevat lakihankkeet per ministeri</h3>
                <p>Lakihankkeita käynnissä ilman nimettyä vastuuministeriä: {}</p>
            </Jumbotron>
            
        </div>);
}

export default Histogram;