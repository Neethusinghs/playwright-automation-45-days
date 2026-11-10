//Formula: BMI = weight in kg ÷ (height in metres × height in metres)
const weight = 119.8;
const height = 2;
const bmi = weight / (height * height);
let bmiRounded = bmi.toFixed(2);
console.log("BMI: "+bmiRounded);
console.log(typeof bmiRounded);//output will be string because of toFixed() method returns a string value. If we want to convert it to number we can use parseFloat() method.
//bmiRounded = parseFloat(bmiRounded);
let category;
if(bmi<18.5){
    category = "Underweight";
  
}
else if(bmi < 25){
    category = "Normal";
   
}
else if(bmi>=25 && bmi < 30){
    category = "Overweight";
    
}
else if(bmi >= 30){
    category = "Obese";
}

console.log("Category: "+category);