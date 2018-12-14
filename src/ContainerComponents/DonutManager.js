import React, { Component } from 'react';
import Donut from '../PresentationalComponents/Donut';
import { Jumbotron } from 'react-bootstrap';

class DonutManager extends Component {

    render() {
        console.log("Keskusta")
        this.donutList = [];
        this.partieFlatList = [];

        if (this.props.data.length > 0) {
            this.partieFlatList = this.props.data.reduce(function (a, b) { return a.concat(b); });
            let partiesTotal = []
            for (let i = 0; i < 3; i++) {
                let party = this.partieFlatList.filter(function (item) { return item.vastuuministeri.partyIndex === i });
                partiesTotal.push({ angle: party.length, label: party[0].vastuuministeri.party, subLabel: party.length.toString() })
            }
            this.donutList = ([
                <Donut data={partiesTotal} key={"key1"} />
            ]);

        }

        return (
            <div>

                <Jumbotron className="centered">
                    <h3>Lakihankkeet per puolue</h3>
                    <p>Puolueilla lakihankkeita yhteensä: {this.partieFlatList.length}</p>
                    {this.donutList}
                    <div className="clearfix"></div>
                </Jumbotron>
            </div>
        );
    }
};


export default DonutManager;