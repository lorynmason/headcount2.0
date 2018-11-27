import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import CardContainer from './CardContainer.js'



class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {}
    }
  }
  componentDidMount = () => {
    const districtRepository = new DistrictRepository(data)
    this.setState({
      data: districtRepository.stats
    })
  }

  render() {
    return (
      <div>
      <h1>Welcome To Headcount 2.0</h1>
      <CardContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
