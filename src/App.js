import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';

// const URL = 'https://swapi.co/api/species';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { data: {},
                    URL: 'https://swapi.co/api/species'}
    // console.log("constructor done")
  }

  componentDidMount(){
    axios.get(this.state.URL)
        .then(response => {
          this.setState({data: response.data})
    });
  }

  handlechange(URL){
    axios.get(URL)
        .then(response => {
          this.setState({data: response.data})
    });
  }

  previousPage = () => {
    var URL = this.state.data.previous;
    this.setState({URL});
    this.handlechange(URL);
  }

  nextPage = () => {
    var URL = this.state.data.next;
    this.setState({URL});
    this.handlechange(URL);  
  }

  renderData() {
    // console.log(this.state.data)
    return _.map(this.state.data.results, elem => {
      return (
        <li>
          <h3>name: {elem.name}</h3> 
          classification: {elem.classification}<br/>
          designation: {elem.designation}<br/>
          elem.average_height: {elem.average_height}<br/>
          skin_color: {elem.skin_colors}<br/>
          hair_colors: {elem.hair_colors}<br/>
          eye_colors: {elem.eye_colors} <br/>
          average_lifespan: {elem.average_lifespan} <br/>
          language: {elem.language}
        </li>
      )
    })
  }


  render() {
    console.log('render done')
    return (
      <div className="App">
        <h1>Star war species</h1>
        {this.state.data.previous? (<button onClick={this.previousPage}>previous</button>) : ""}
        {this.state.data.next? (<button onClick={this.nextPage}>next</button>) : ""}
        <ul>
          {this.renderData()}
        </ul>
        {this.state.data.previous? 'prev' : ""}
        {this.state.data.next? 'next' : ""}
      </div>
    );
  }
}

export default App;
