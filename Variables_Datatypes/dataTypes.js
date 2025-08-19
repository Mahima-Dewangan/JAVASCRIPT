// 7 PRIMITIVE DATATYPES IN JAVASCRIPT 
/* Number , String , Boolean , Undefined , Null , BigInt , Symbol */

age =90; //to check the data type of age , type on console : typeof age  o/p : 'Number'
fullName ="Mahima Dewangan"; // typeof fullName  o/p : 'string'
isFollow = false;   //  typeof isFollow  o/p : 'boolean'
x = undefined;      // typeof  x  o/p : 'undefined'
let v;              //typeof v o/p : 'undefined'


// ------------------------------------------------------------------------------------//

// non- premitive data type : objects -collection of values (key : value)

const student = {                     
    fullName : "Mahima Dewangan",
    age      : 24,
    cgpa     : 8.25,
    isPass   : true
}                              //typeof student : object

console.log(student);    
console.log(student.age);
console.log(student["age"]);


// typeof
console.log(typeof student);
console.log(typeof student.age);


// changing and assigning the value of variable in the object

student["age"] = student["age"] +1;
console.log(student["age"]);


student["fullName"] = "Rahul kumar";
console.log(student.fullName);



/*POINTS TO REMEMBER 
let : updated
const : cannot be updated
object : inside object value of keys can be updated
*/




