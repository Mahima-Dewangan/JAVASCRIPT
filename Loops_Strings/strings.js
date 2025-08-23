// length of the string 
let str = " Mahima ";
console.log(str.length)

// position of the string : string index
console.log(str[3]);


// TEMPLATE LITERALS : embedded expressions in string
let specialString = `This is a template literal`;
console.log(specialString);

console.log(typeof specialString);


//need of template literal
let object = {
    item : "pen" ,
    price : 10
}

console.log("the price of the " , object.item , ' is ' , object.price , " rupees");

// usage of template literal
let output = `the price of the ${object.item} is ${object.price} rupees`;
console.log(output);


// String interpolation : ${expression} 


// escape sequences
console.log("Mahima \nDewangan")
console.log("Mahima\tDewangan")



// STRING METHODS : the string methods never changes the original string 

//  uppercase
let s = "mahima Dewangan";
console.log(s.toUpperCase());
console.log(s);

// lowercase
console.log(s.toLowerCase());

// trim() : it removes the whitespaces from the starting and end of the string


