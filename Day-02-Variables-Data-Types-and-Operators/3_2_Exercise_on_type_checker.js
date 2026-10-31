/* Type Checker Exercise */
/* "Login" (a string)
42 (a number)
["chrome", "firefox"] (an array)
{ browser: "chrome" } (an object)
null */

const login = "Login";
let label;
if(login === null){
    label = "null";
}
else if(Array.isArray(login)){  
    label = "array";
}
else{
    label = typeof login;
}
console.log(login, "->", label);

const number = 42;
let numberLabel;
if(number === null){
    numberLabel = "null";
}
else if(Array.isArray(number)){  
    numberLabel = "array";
}
else{
    numberLabel = typeof number;
}
console.log(number, "->", numberLabel);

const browsers = ["chrome", "firefox"];
let browsersLabel;
if(browsers === null){
    browsersLabel = "null";
}
else if(Array.isArray(browsers)){
    browsersLabel = "array";
}
else{
    browsersLabel = typeof browsers;
}
console.log(browsers, "->", browsersLabel);

const browserObject = {browser: "chrome"};
let browserObjectLabel;
if(browserObject === null){
    browserObjectLabel = "null";
}
else if(Array.isArray(browserObject)){
    browserObjectLabel = "array";
}
else{
    browserObjectLabel = typeof browserObject;
}
console.log(browserObject, "->", browserObjectLabel);

const nullValue = null;
let nullValueLabel;
if(nullValue === null){
    nullValueLabel = "null";
}
else if(Array.isArray(nullValue)){
    nullValueLabel = "array";
}
else{
    nullValueLabel = typeof nullValue;
}
console.log(nullValue, "->", nullValueLabel);