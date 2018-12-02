export default class DistrictRepository {
  constructor(data) {
    this.stats = data.reduce((obj, currentElement) => {
      let upperLoc = currentElement.Location.toUpperCase()
      if(!obj[upperLoc]) {
        obj[upperLoc] = {}
      }
      let value;
      if(!isNaN(currentElement.Data)) {
        value = Math.round(1000*currentElement.Data)/1000
      } else {
        value = 0 
      }
      obj[upperLoc].stats = {...obj[upperLoc].stats, [currentElement.TimeFrame] : value};
      obj[upperLoc].location = upperLoc;
      obj[upperLoc].selected = false
      return obj;
    },{})
  }

  findByName = (location) => {
    if(!location) {
      return
    }
   return this.stats[location.toUpperCase()]
  }

  findAllMatches = (search) => {
    let keys = Object.keys(this.stats)
    if(!search) {
      return keys
    } else {
      return keys.filter(currentElement => {
        return currentElement.includes(search.toUpperCase())
      })
    }
  }
  
  findAverage = (location) => {
    const values = Object.values(this.stats[location.toUpperCase()].stats)
    const average = values.reduce((sum, value) => {
      sum += value
      return sum
    },0)/values.length
    return Math.round(1000*average)/1000
  }

  compareDistrictAverages = (loc1, loc2) => {
    const avr1 = this.findAverage(loc1)
    const avr2 = this.findAverage(loc2)
    const result = {}
    result[loc1.toUpperCase()]= avr1
    result[loc2.toUpperCase()]= avr2 
    result.compared = Math.round(1000*avr1/avr2)/1000
    return result
  }
}
