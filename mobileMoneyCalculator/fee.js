function estimateTransactionFee(amountToSend) {
  const basicPercentage = 0.015;
  const minimumFee = 10;
  const maximumFee = 70; 


  let calculatedFee = amountToSend * basicPercentage;
  // minimum fee
  calculatedFee = Math.max(calculatedFee, minimumFee);
  //maximum fee
  calculatedFee = Math.min(calculatedFee, maximumFee);

  const totalAmountDebited = amountToSend + calculatedFee;

  console.log(`Amount to send: KES ${amountToSend.toFixed(2)}`);
  console.log(`Transaction fee: KES ${calculatedFee.toFixed(2)}`);
  console.log(`Total amount to be debited: KES ${totalAmountDebited.toFixed(2)}`);
}

const userInput = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(userInput); 
if (isNaN(amount) || amount < 0) {
  console.log("Invalid input. Please enter a valid positive amount.");
} else {
 
  estimateTransactionFee(amount);
  
}