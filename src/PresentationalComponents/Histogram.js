import React from 'react';
import {XYPlot,XAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';
import './Histogram.css'

const Histogram = (props) =>{
     /* Siivoa! */
    const koordinaattiLista=[];
    
    for(let i=0; i < props.data.length; i++){
        console.log(props.data[i][0])
        koordinaattiLista.unshift({x: props.data[i][0].vastuuministeri.lastName, y: props.data[i].length})
    }

    return(<XYPlot
        xType="ordinal"

        width={1000}
        height={300}>
        <HorizontalGridLines />
        <VerticalBarSeries
        data={koordinaattiLista}
        />
        <XAxis />
    </XYPlot>);
}

/* class Histogram extends Component { */
     /* Siivoa! */
    /* render (){ */
        
       /* this.props.data.forEach(element => {
            console.log(element);
        }); */
        /* return(
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

} */

export default Histogram;