const prompt = require('prompt-sync')(); //imports prompt-sync allow user input

//prompts user to enter amount to send
const input = prompt("Unatuma ngapi? (KES): ");
const amountToSend = Number(input); //converts the string input to a number

//function to estimate transaction fee
function estimateTransactionFee(amount){
    const percentage = 1.5;
    const fee = (amount/100)*percentage ; //calculates transaction fees

    let transactionFee;
    if(fee < 10){
        transactionFee = 10; //minimum fee
    } else if (fee > 70){
        transactionFee = 70; //maximum fee
    } else {
        transactionFee = fee;
    }

    const totalDebited = amount + transactionFee;
    //display results to user
    console.log(`Sending KES ${amount}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}\n`);
    console.log(`Send Money Securely!`);

}
estimateTransactionFee(amountToSend);//calls estimateTransactionFee function