let ageCalculator = function(name, yearOfBirth, currentYear){
  let calculator = currentYear - yearOfBirth;

  return `${name} is ${calculator} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));