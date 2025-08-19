// number type 
age = 24;
console.log(age);

// string type
fullName = "Tony Stark";
console.log(fullName);

// decimal type
price = 130.78;
console.log(price);

// boolean value : true or false
isfollow = true;
console.log(isfollow);

// null
x=null;
console.log(x);

// undefined  
y=undefined
console.log(y);

/* Difference between null and undefined value
 null : when we know the value stored is empty
 undefined : when we don't know what the actual value is
*/

/*JAVASCRIPT is a dynamically typed language  i.e we need 
not to pre defined the data to predefined the data type of the 
variable . We can change the type of value stored in the variable */

firstName = "Mahima";   // string
console.log(firstName);
firstName = 25;         //number
console.log(firstName);


// ------------------------------------------------------------------------------------------------------------------------------------------//

// var , let , const 

// var : the variable can be re-declared and updated.A global scope variable  : we don't use var anymore in JS

var age =24;
var age = 56;
var age = 89;
console.log(age);

var age = " Mahima";
console.log(age);

// let : the variable cannot be re-declared but updated. A block scope variable

let agge = 24;

// let agge =54 // error

agge=59;
agge=86;
console.log(agge);


// const : the variable cannot be re-declared or updated . A block scope variable

const agee = 24;
// agee = 90;     //error 


/* const variable must be initialized with a value . 
   let variable when not initialized by a value contains undefined.*/

   const a = 10;
   console.log(a);
   let b;
   console.log(b);



