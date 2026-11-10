//Simple Interest = (Principal × Rate × Time) ÷ 100

const principal = Number("10000"); 
const rate = Number("5");
const time = Number("3");
const simpleInterest = (principal * rate * time) / 100;
let simpleInterestRounded = simpleInterest.toFixed(2);
console.log("principal: " + principal + " rate: " + rate + " time: " + time + " Simple Interest: " + simpleInterestRounded);
let totalAmount = principal + simpleInterest;
let totalAmountRounded = totalAmount.toFixed(2);
console.log("Total Amount: " + totalAmountRounded)

console.log(Number("12.5kg"));
console.log(parseFloat("12.5kg"));