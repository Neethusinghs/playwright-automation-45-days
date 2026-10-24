//-------------Exercise-----------
//Scenario: you’re preparing data for a login test on saucedemo.com.
const baseUrl = "https://www.saucedemo.com/";
console.log(`Base URL: ${baseUrl} (${typeof baseUrl})`);
const userName = "standard_user";
console.log(`Username: ${userName} (${typeof userName})`);
const timeoutInSeconds = 25;
console.log(`Timeout : ${timeoutInSeconds} (${typeof timeoutInSeconds})`);

let loginAttempts = 0;
console.log(`Login Attempts: ${loginAttempts} (${typeof loginAttempts})`);
loginAttempts = 1; //reassigning the value of loginAttempts
console.log(`Login Attempts: ${loginAttempts} (${typeof loginAttempts})`);

let isLoggedIn = false;
console.log(`Is Logged In: ${isLoggedIn} (${typeof isLoggedIn})`);

console.log(`Attempt ${loginAttempts}: logging in as ${userName} at ${baseUrl}`);

