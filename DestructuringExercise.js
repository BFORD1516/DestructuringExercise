let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?
  {
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  }
  
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}));
  // Output: Your name is Alejandro and you like purple
  
  console.log(getUserData({firstName: "Melissa"}));
  // Output: Your name is Melissa and you like green
  
  console.log(getUserData({}));
  // Output: Your name is undefined and you like green

  let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first);
// Output: Maya

console.log(second);
// Output: Marisa

console.log(third);
// Output: Chi

//let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    //"Raindrops on roses",
   // "whiskers on kittens",
    //"Bright copper kettles",
    //"warm woolen mittens",
    //"Brown paper packages tied up with strings"
  //]
  
  //console.log(raindrops); // ?
  //console.log(whiskers); // ?
  //console.log(aFewOfMyFavoriteThings); // ?
  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    ""];

    let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers);
// Output: [10, 30, 20]

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  // Destructuring assignment
  const { a, b } = obj.numbers;
  
  // Now, 'a' and 'b' variables hold the values of obj.numbers.a and obj.numbers.b respectively.


  //var arr = [1, 2];
  //var temp = arr[0];
  //arr[0] = arr[1];
  //arr[1] = temp;

  let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

function raceResults(arr) {
    if (!Array.isArray(arr) || arr.length < 3) {
      // Ensure the input is a valid array with at least three elements
      throw new Error('Input should be an array with at least three elements.');
    }
  
    const [first, second, third, ...rest] = arr;
  
    return {
      first,
      second,
      third,
      rest,
    };
  }
  
  // Example usage:
  const result = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
  console.log(result);

  const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

const result = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
console.log(result);


