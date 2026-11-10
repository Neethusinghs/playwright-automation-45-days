# Day 2: Variables, Data Types and Operators

## What I learned
- the 7 primitive types: number,string,boolean,null,undefined,symbol,bigint. 
- non-primitive types: objects (arrays are one kind of object)
- primitive vs. non-primitive: how copying works -> primitive copy the variable value, non-primitive copy the object reference
- undefined means JavaScript has not given the variable a value. null means I set it to "no value" on purpose. eg: let a; will give undefined and let maturityDate=null; set on purpose.
- what const protects: const stops us from reassigning the variable, but the contents of an object or array can still be changed
- typeof operator, and typeof null and typeof an array will give result as object  
- we can compare null by ===null and array by Array.isArray()
- Operators in Javascript: Arithmetic, Relational, Logical Operators
- in Arithmetic Operators if we have string with the + operator then it will not add the value it will concatenate the values and % modulus operator gives remainder value
- Relational operator: <,>,<=,>=,==,===
- if we compare "100"==100 output will be true but if we use strict equality here "100"===100 output will be false.
- Logical Operators: AND,OR,NOT. AND : If any one of the value is false it return false, OR: If any one of the value is true it returns true. Not will give contradictory values eg for true: Not true means we will get false.
- Number() converts the entire value into the number if any one of the value is invalid it will return NaN. Empty strings and strings containing only spaces return 0
- parseFloat() extracts the number from the beginning of the string, if it encounters a invalid character stop parsing and return the valid character. Empty strings and strings containing only spaces return NaN
- precedence: * and / will run first before the + and - but if we have parenthesis the expression in the parenthesis will execute first.

## Exercises completed
- 3_Datatype.js: Basics practice program to understand all datatypes in javascript
- 3_1_Exercise_on_Datatypes.js: usage of typeof operator, it prints 7 datatypes values.
- 3_2_Exercise_on_type_checker.js: it detects null and arrays correctly, which typeof alone gets wrong. using if else.
- 1_Exercise_bmi_calculator.js: it calculates the Body Mass Index and based on that it categorize in to underweight, normal, overweight, obese.
- 2_Exercise_temperature_converter.js: it converts the fahrenheit To Celsius and Celsius To fahrenheit.
- 3_Exercise_simple_interest.js: based on the principal,time and rate it calculates the simple Interest.
- 4_Exercise_age_in_days.js: based on the age in years it calculate the age in days and age in weeks.
- 5_Exercise_tip_splitter.js: it split the restaurant bill among the friends. it also gives the amount each person pays


