const prompt = require('prompt-sync')(); //defines prompt

// prompt the user:
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input); //ensures the string input is converted to number

//function to calculate chai ingredients 
function calculateChaiIngredients(numberOfCups){
    const water = 200 * numberOfCups; //ml
    const milk = 50 * numberOfCups;//ml
    const teaLeaves = 1 * numberOfCups; //tablespoons
    const sugar = 2 * numberOfCups; //teaspoons

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
    console.log(`Enjoy your Chai Bora!`);
}

//validation of the user input using if else
if (numberOfCups <= 0 || isNaN(numberOfCups)){
    console.log("Please enter valid number of cups!"); //logs this if one of the conditions is true
} else {
    calculateChaiIngredients(numberOfCups); //calls the function if both conditions are false
}