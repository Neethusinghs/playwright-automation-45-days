//***********var*************** */
/*scope:Global + functional scope
Redeclaration and reassignement is allowed
var is hoisted (before declaration of variable we can use it)
*/
//console.log(x); //hoisted variable x is undefined
var x = 200; //older way of declaring a variable
console.log(x);
x=300; //reassigning the value of x
console.log(x);
var x = 400; //redeclaring the variable x
console.log(x);

//***********let*************** */
/*scope:Global + block scope
Redeclaration is not allowed but reassignement is allowed
let is  hoisted  but due to temporal dead zone  if we access/call variable before the decalaration it will throw an error 
*/

let age = 25; //used for mutable data
console.log(age);
 //let age = 30; //redeclaring the variable age is not allowed
 age = 30; //reassigning the value of age is allowed
 console.log(age);

 //***********const*************** */
 /*scope:Global + block scope
 Redeclaration and reassignement is not allowed
 const is  hoisted  but due to temporal dead zone  if we access/call variable before the decalaration it will throw an error 
 */
const name = "Neethu"; //used for immutable data
console.log(name);
// const name = "John"; //redeclaring the variable name is not allowed
// name = "John"; //reassigning the value of name is not allowed

console.log(a);   // before the declaration
var a = 10;
console.log(a);

//console.log(b);   // before the declaration -> ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);