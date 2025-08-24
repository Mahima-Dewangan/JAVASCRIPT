//  QUES 1: for a given array with marks of students as [85 . 94 , 44 , 37 , 76 , 60],
// find the average marks of the entire class

let marks_s = [85 , 97 ,44 ,37 , 76 ,60];
let sum =0;
for(let i =0; i<marks.length;i++)
{
    sum+=marks_s[i];
    
}

let avg = sum/marks_s.length;
console.log("the average marks of the entire class is" , avg);
console.log(`the average marks of the entire class is ${avg}`);



//QUES 2:  given an array with prices of 5 items as [250 , 645 , 300 , 900, 50]
// all items has an offer of 10% off  on them . 
// change the array to store the final price after applying the offer;


let prices = [250 , 645 , 300 , 900 , 50];

// applying the offer
for(let i=0;i<prices.length;i++)
{
    prices[i]=prices[i] - (0.10 * prices[i]);
}

// printing the array after applying the offer
console.log(prices);



// QUES 3 : Create an array to store companies  : "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(companies);


// remove the first company from the array

let rem = companies.shift();
console.log(rem);
console.log(companies);

// Remove uber and add ola in its place
companies.splice(1,1,"ola");
console.log(companies);


// add amazon at the end of the array
companies.push("Amazon");
console.log(companies);

