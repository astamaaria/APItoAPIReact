import React, {Component} from 'react';
import Donut from '../PresentationalComponents/Donut';


class DonutManager extends Component {
    
    render(){
        console.log("Keskusta")
        this.donutList=[];
        console.log(this.props.data)
        if(this.props.data.length >0){
            let partieFlatList = this.props.data.reduce(function(a,b) {return a.concat(b);});
            let Keskusta = partieFlatList.filter(function(item) {return item.vastuuministeri.party===0});   
            let Kokoomus = partieFlatList.filter(function(item) {return item.vastuuministeri.party===1});
            let Siniset = partieFlatList.filter(function(item) {return item.vastuuministeri.party===2});
            let partiesTotal = [{angle: Keskusta.length}, {angle:Kokoomus.length}, {angle: Siniset.length}]
            
            this.donutList =(
                <Donut data ={partiesTotal}/>
            );

        }

        return(
            <div>
                {this.donutList}
            </div>
        );
    }
};


export default DonutManager;