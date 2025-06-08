function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; 
  const milkPerCup = 50; 
  const teaLeavesPerCup = 1; 
  const sugarPerCup = 2; 

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
}

const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCupsToMake = parseInt(userInput);

if (isNaN(numberOfCupsToMake) || numberOfCupsToMake <= 0) {
  console.log("Invalid input. Please enter a positive number for the cups of chai.");
} else {
  calculateChaiIngredients(numberOfCupsToMake);
}