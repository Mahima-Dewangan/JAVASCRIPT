// Push : add item at the end of the array
let food = ["potato", "tomato","guava" , "orange"];
food.push("brinjal");

console.log(food);

food.push("maggie" , "milk" , "eggs");
console.log(food);

// pop : delete the items from the end of the array and return the deleted value

let deletedfood = food.pop();
console.log(deletedfood);
console.log(food);


// toString : to convert an arry to string
console.log(food.toString());


// concat() : join multiple  arrays and return results
let marvelHeroes =["thor" , "spiderman" , "ironman"];
let dcHeroes = ["superman" , "batman"];

let heroes1 = marvelHeroes.concat(dcHeroes);
console.log(heroes1);




// unshift : add to the start of the array
food.unshift("grapes");
console.log(food);




// shift() : add to the start of the array and return
let del = food.shift();
console.log(del);
console.log(food);



// slice() : return the piece of the array : includes the start index but excludes the end index
let sl =  food.slice(2,5);
  console.log(sl);


// spslice() : it changes the original array : we give three parameters
// 1. the start index
// 2. the number of elements right from the start index to be deleted/removed
// 3. the elements that ou want to add in place of the removed index

food.splice(1 , 4 , "onion" , "capsicum" , "butter" , "garlic");
console.log(food);


// splice can be used to add element at a particular index 
food.splice(5 , 0 , "ketchup");
console.log(food);


// splice can be used to delete an element from a particular index
food.splice(4,1);
console.log(food);


// splice can be used to replace  a particualr element in the arry
food.splice(7,1, "carrots");
console.log(food);
