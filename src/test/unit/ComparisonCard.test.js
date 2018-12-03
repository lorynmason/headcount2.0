import ComparisonCard from '../../../src/ComparisonCard.js';
import ComparedContainer from '../../../src/ComparedContainer.js';
import {shallow, mount} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';


describe('ComparedCard', () => {
  let wrapper;
  let card1;
  let card2;
  let card3;
  let init;
  let resetComparison;
  beforeEach(() => {
    resetComparison = jest.fn()
    card1 = {
      location: "ADAMS COUNTY 14",
      selected: false,
      stats:
      {2004: 0.228,
      2005: 0.3,
      2006: 0.293,
      2007: 0.306,
      2008: 0.673,
      2009: 1,
      2010: 1,
      2011: 1,
      2012: 1,
      2013: 0.998,
      2014: 1}
      }
      card2 = {
        location: "ADAMS COUNTY 14",
        selected: false,
        stats:
        {2004: 0.228,
        2005: 0.3,
        2006: 0.293,
        2007: 0.306,
        2008: 0.673,
        2009: 1,
        2010: 1,
        2011: 1,
        2012: 1,
        2013: 0.998,
        2014: 1}
        }
        card3 = {'ADAMS COUNTY 14': 0.709,
        COLORADO: 0.53,
        compared: 0.748}
        
        init = {
          compared1: card1,
          compared2: card2,
          compareCard: card3
        }

    wrapper = shallow(
      <ComparisonCard appState={init} resetComparison={resetComparison}/>
    ); 

  })
  it('should match the snapshot with all data passed  in correctly', () => {
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should call resetComparison on button click', () => {
    const button = wrapper.find('button')
    

    button.simulate('click')

    expect(resetComparison).toHaveBeenCalled()

  })
})