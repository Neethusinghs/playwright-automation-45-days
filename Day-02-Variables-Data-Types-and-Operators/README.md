# Day 2: Variables, Data Types and Operators

## What I learned
- the 7 primitive types: number,string,boolean,null,undefined,symbol,bigint. 
- non-primitive types: objects (arrays are one kind of object)
- primitive vs. non-primitive: how copying works -> primitive copy the variable value, non-primitive copy the object reference
- undefined means JavaScript has not given the variable a value. null means I set it to "no value" on purpose. eg: let a; will give undefined and let maturityDate=null; set on purpose.
- what const protects: const stops us from reassigning the variable, but the contents of an object or array can still be changed
- typeof operator, and typeof null and typeof an array will give result as object  
- we can compare null by ===null and array by Array.isArray()

## Exercises completed
- 3_1_Exercise_on_Datatypes.js: usage of typeof operator
- 3_2_Exercise_on_type_checker.js: it detects null and arrays correctly, which typeof alone gets wrong. using if else.

## Still to do
- Operators
- 5 mini scripts: BMI, temperature converter, simple interest, age in days, tip splitter