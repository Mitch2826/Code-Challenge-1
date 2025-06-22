const prompt = require('prompt-sync')(); //imports prompt-sync

//prompts user to enter distance
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?: ");
const distanceInKm = Number(input); //converts string input to a number

//function to calculate fare
function calculateBodaFare(distance){
    const baseFare = 50;
    const chargePerKm= 15;

    let charge= distance * chargePerKm;// calculates the total charge per kilometre
    let totalFare = baseFare + (distance * chargePerKm);// calculates the total fare
    //logs console output
    console.log(`Uko kwote? Io ni ${distance} km: `);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${charge}`); 
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!")
}
//validates user inputs using if else
if(isNaN(distanceInKm) || distanceInKm <= 0){
    console.log("Tafadhali andika nambari sahihi!")//logs if at least one of the conditions is true
}else{
calculateBodaFare(distanceInKm); // calls the calculateBodaFare function with distanceInKm as the argument
}
