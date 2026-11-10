//Age in days
const ageInYears = 1;
const ageInDays = ageInYears * 365;
const ageinweeks = ageInDays / 7;
const ageinweeksrounded = Math.floor(ageinweeks);//math.floor() rounds down to the nearest integer
console.log("Age in years: " + ageInYears);
console.log("Age in days (approx): " + ageInDays);
console.log("Age in weeks (approx): " + ageinweeksrounded);