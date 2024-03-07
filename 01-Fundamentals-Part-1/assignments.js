/* Assignment 01 - declare, atribute a value and log them in the console
 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
 2. Log their values to the console 
*/

let country = "Brazil";
let continent = "South America";
let populationInMillions = "214.3";

//console.log(country, "-", continent, populationInMillions);

/* Assignment 02 - declare a boolean and an undefined and log the type of all of the values inside the variables in the console
 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
 2.Log the types of isIsland, population, country and language to the console.
 */

let isIsland = false;
let language;

console.log(
    `Country: ${typeof country} \nContinent: ${typeof continent} \nPopulation: ${typeof populationInMillions} \nIs island: ${typeof isIsland} \nLanguage: ${typeof language}`
);
