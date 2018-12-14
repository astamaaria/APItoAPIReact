import React, {Component} from 'react';
import Donut from '../PresentationalComponents/Donut';

class DonutManager extends Component {
    
    render(){
        console.log("Keskusta")
        this.donutList=[];
        
        if(this.props.data.length >0){
            let partieFlatList = this.props.data.reduce(function(a,b) {return a.concat(b);});
            let partiesTotal = []
            for(let i =0; i<3; i++){
                let party = partieFlatList.filter(function(item) {return item.vastuuministeri.partyIndex===i});
                partiesTotal.push({angle: party.length, label: party[0].vastuuministeri.party})
            }
            this.donutList =([
                <Donut data ={partiesTotal} key={"key1"}/>
            ]);

        }

        return(
            <div>
                {this.donutList}              
            </div>
        );
    }
};


export default DonutManager;