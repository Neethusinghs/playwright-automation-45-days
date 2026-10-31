/*
Declare these 7 variables (you choose sensible names):

The URL "https://www.saucedemo.com" (string)
A retry count of 3 (number)
A headless flag set to true (boolean)
A big ID with the value 9007199254740993 (BigInt)
A session token created with Symbol("session") (symbol)
A last-error variable that is declared but not given a value
A due date set to null
*/
const url = "https://www.saucedemo.com";
const retryCount = 3;
const flag = true;
const bigId = 9007199254740993n;
const sessionToken = Symbol("session");
let lastError;
const dueDate = null;

console.log("url: "+url+" -> "+typeof url);
console.log("retry count: "+retryCount+" -> "+typeof retryCount);
console.log("flag: "+flag+" -> "+typeof flag);
console.log("bigId: "+bigId+" -> "+typeof bigId);
console.log("lastError: "+lastError+" -> "+typeof lastError);
console.log("dueDate: "+dueDate+" -> "+typeof dueDate);
console.log("sessionToken: ", sessionToken, "->", typeof sessionToken);//we cannot use + operator with symbol data type, so we are using , operator to print the value of symbol data type
