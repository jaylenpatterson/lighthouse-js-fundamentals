let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 10, 'community centre']
]

let chooseStations = function(stations){
  let validStations = [];
  for(let i = 0; i < stations.length; i++){
    if((stations[i][1] >= 20) && ((stations[i][2] === "school") || (stations[i][2] === "community centre"))){
      validStations.push(stations[i][0].toString())
    }
  }
  return validStations
} 

console.log(chooseStations(stations))














