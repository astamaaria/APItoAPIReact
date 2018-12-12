import React, {Fragment} from 'react';
import {RadialChart} from 'react-vis';

const Donut = (props) =>{

    return(
        <Fragment>
            <RadialChart
                width={300}
                height={300}
                innerRadius={70}
                radius={140}
                    data={[
                        {angle: 2},
                        {angle: 6},
                        {angle: 2},
                        {angle: 3},
                        {angle: 1}
                        ]}
                padAngle={0.03}
            />
        </Fragment>
    )
}

export default Donut;