import React from 'react';
import {RadialChart} from 'react-vis';
import './Donut.css';

const Donut = (props) =>{
    console.log(props.data)
    return(
        <div className ="Donut">
            <RadialChart
                width={310}
                height={310}
                innerRadius={70}
                radius={140}
                    data={props.data}
                padAngle={0.03}
                showLabels={true}
            />
        </div>
    )
}

export default Donut;