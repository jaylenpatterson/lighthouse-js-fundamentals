const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let a = 0;
  let b = 0;
  let parade = [a,b];

  for(let i = 0; i < moves.length; i++){
    if(moves[i] === "west"){
      parade[0] = parade[0] - 1
    } else if(moves[i] === "east"){
      parade[0] = parade[0] + 1
    } else if(moves[i] === "north"){
      parade[1] = parade[1] + 1
    } else {
      parade[1] = parade[1] - 1
    }
  }

 return parade
}

console.log(finalPosition(moves))
