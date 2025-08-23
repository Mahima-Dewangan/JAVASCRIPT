// for loop
for(let i =0 ;i<5; i++)
{
    console.log("Mahima Dewangan");
}

// while loop
let i=1;
while(i<=5)
{
    console.log("Mahima Dewangan");
    i++;
}


// do while loop
let j=1;

do
{
    console.log("Mahima Dewangan");
    j++;
}while(j<=5);


// for of loop  : used for strings and arays

let string ="MahimaDewangan"; 
let size = 0;
for( let i of string)
{
    console.log("i=" , i);
    size++;
}

console.log("the length of the string is " , size);


// for-in loop  : used for objects

    // student object
    let student ={
   name:"Rahul",
   age: 24,
   cgpa: 8.25,
   isPass : true
    };

    for(let key in student)
    {
        console.log("key" , key , "value=" , student[key]);
    }