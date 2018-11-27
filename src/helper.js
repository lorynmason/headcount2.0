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
        if(currentElement.includes(search.toUpperCase())) {
          return currentElement
        }
      })
    }
  }
}
