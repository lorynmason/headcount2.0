import React, { Component } from 'react';
import './App.css';
import data from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import CardContainer from './CardContainer.js';
import './styles/main.scss';
import Search from './Search.js';
import ComparedContainer from './ComparedContainer.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {},
      compared1: null,
      compared2: null,
      compareCard: {}
    }
  }
  componentDidMount = () => {
    const districtRepository = new DistrictRepository(data)
    this.setState({
      data: districtRepository.stats
    })
  }
  
  displaySearch = (search) => {
    const districtRepository = new DistrictRepository(data)
    const matchedNames = districtRepository.findAllMatches(search)
    const matchedObj = matchedNames.reduce((obj, match) => {
      obj[match]= districtRepository.stats[match]
      return obj
    },{})
    this.setState({
      data: matchedObj
    })
  }

  displaySelected = (clickedCard) => {
    const districtRepository = new DistrictRepository(data)
    const clickedCompare = districtRepository.findByName(clickedCard.location)
    clickedCompare.selected = true
    clickedCard.selected = true 
    if(!this.state.compared1){
      this.setState({
        compared1: clickedCompare
      },() => this.displayComparison())
    } else {
      this.setState({
        compared2: clickedCompare
      },() => this.displayComparison())
    }
  }

  // updateSelected = () => {
  //   if(this.state.compared1) {
  //     Object.keys(this.state.data).map(card => {
  //       console.log(this.state.data[card])
  //       if(this.state.data[card] === this.state.compared1 || this.state.data[card] === this.state.compared2) {
  //         this.state.data[card].selected = true
  //       } else {
  //         this.state.data[card].selected = false
  //       }
  //     })
  //   }
  //   this.displayComparison()
  // }

  displayComparison = () => {
    if(this.state.compared1 && this.state.compared2) {
      const districtRepository = new DistrictRepository(data)
      const comparison = districtRepository.compareDistrictAverages(this.state.compared1.location, this.state.compared2.location)
      this.setState({
        compareCard: comparison
      })
    }
  }

  resetComparison = () => {
    const districtRepository = new DistrictRepository(data)
    this.setState({
      compared1: null,
      compared2: null,
      compareCard: {},
      data: districtRepository.stats
    })
  }
   
  render() {
    return (
      <div>
      <header>
       <h1>Headcount2.0</h1> 
        <Search displaySearch={this.displaySearch}/>
      </header>
      <ComparedContainer appState={this.state} 
                         resetComparison={this.resetComparison}
                         displaySelected={this.displaySelected}/>
      <CardContainer data={this.state.data} 
                     displaySelected={this.displaySelected}/>
      </div>
    );
  }
}

export default App;
