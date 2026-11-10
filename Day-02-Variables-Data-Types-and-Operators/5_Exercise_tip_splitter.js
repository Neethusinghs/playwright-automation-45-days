const billAmount = 1200;
const tipPercent = 10;
const numberOfPeople = 4;
const tipAmount = (billAmount * tipPercent) / 100;
const tipAmountRounded = tipAmount.toFixed(2);

const totalBillAmount = billAmount + tipAmount;
const totalBillAmountRounded = totalBillAmount.toFixed(2);

const totalBillPerPerson = totalBillAmount / numberOfPeople;
const totalBillPerPersonRounded = totalBillPerPerson.toFixed(2);

console.log("Bill Amount: " + billAmount);
console.log("Tip Percent: " + tipPercent);
console.log("Number Of People: " + numberOfPeople);
console.log("Tip: " + tipAmountRounded);
console.log("Total Bill Amount: " + totalBillAmountRounded);
console.log("Total Bill per Person: " + totalBillPerPersonRounded);