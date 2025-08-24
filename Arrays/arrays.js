// In javascript , we can create an array which can contain
// either similar types of elements or can contain different types of elements

// properties : gives just a value
// methods : does some work

let marks = [22 , 24 , 80 , 70];
console.log(marks[3]);
console.log(marks);

console.log(typeof marks);   //object

console.log(marks.length);

let heroes = ["ironman","hulk", "thor","batman"];
console.log(heroes[2]);


// array containing different collection of items
let array =["Rahul" , 89 ,"Delhi"];
console.log(array[0]);


// changing the value at the particular index of the array
heroes[1] = "superman";
console.log(heroes);


// Strings are immutable , we cannot change the indices of the string 
// arrays are mutable , we can change the indices of the array.


// looping of an array
for(let i=0 ; i<heroes.length;i++)
    {

        console.log(heroes[i]);
    }


for(let hero of heroes)
{
    console.log(hero);
}



// printing the array items in the uppercase
let cities = ["Delhi" , "Mumbai" , "Udaipur" , "Kokata"];
for(city of cities)
{
    console.log(city.toUpperCase());
    
}
