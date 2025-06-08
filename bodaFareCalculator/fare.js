function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15; 
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${totalFare - baseFare}`); 
  console.log(`Total: KES ${totalFare}`);
  console.log(`Panda Pikipiki!`);
}

const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = parseFloat(userInput); 

if (isNaN(distance) || distance < 0) {
  console.log("Invalid input. Please enter a valid distance in kilometers.");
} else {

  calculateBodaFare(distance);
}