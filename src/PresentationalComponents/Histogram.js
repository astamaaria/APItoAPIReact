import React from 'react';
import {XYPlot,XAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis';

const Histogram = (props) =>{
     /* Siivoa! */
    var koordinaattiLista=[];
    
    for(var i=1; i < props.data.length; i++){
        console.dir(props.data[i])
        /* console.log(props.data[i][0].vastuuministeri) */
        koordinaattiLista.unshift({x: i, y: props.data[i].length})
    }

    return(<XYPlot
        width={800}
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