const whereCanIPark = function (spots, vehicle) {
  let location = false;

  for(let i = 0; i < spots.length; i++){
    for(let j = 0; j < spots[i].length - 1; j++){
      if(vehicle === "regular"){
        if(spots[i][j] === "R"){
          location = [j,i];
        };
      } else if(vehicle === "small"){
          if(spots[i][j] === "R" || spots[i][j] === "S"){
            location = [j,i];
          };
      } else if(vehicle === "motorcycle"){
          if(spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M"){
          location = [j,i];
          };
      } 
    }
  }
  return location
};

