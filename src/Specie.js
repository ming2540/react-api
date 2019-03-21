import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';

const URL = 'https://swapi.co/api/species';

class Specie extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Specie;
