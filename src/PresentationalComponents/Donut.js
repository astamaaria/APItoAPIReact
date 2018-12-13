import React, {Fragment} from 'react';
import {RadialChart} from 'react-vis';

const Donut = (props) =>{
    console.log(props.data)
    return(
        <Fragment>
            <RadialChart
                width={300}
                height={300}
                innerRadius={70}
                radius={140}
                    data={props.data}
                padAngle={0.03}
            />
        </Fragment>
    )
}

export default Donut;