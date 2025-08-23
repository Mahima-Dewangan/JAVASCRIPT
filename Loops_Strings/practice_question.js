// ques 1 : print all the even numbers from 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


// ques 2: create a game where you start with any random game number.
// ask the user to keep guessing the game number until the user enters 
// the correct value.

// let gameNumber =25 ;

// let guessNumber = prompt("guess the number");

// while(guessNumber != gameNumber)
// {
//     guessNumber = prompt("keep guessing");
// }


// alert("congratulations , you guessed the correct number");


// PS: PROMPT ALWAYS RETURN THE STRING



// QUES 3 : prompt the user to enter their name. Generate a username for them based on the input.
// Start username with @ and then the name entered by the user , followed by the length of the name 
// entered by the user

let sr= prompt("enter your full name ");
let s1 = "@";
let s2 = s1.concat(sr);
let s3 = s2.concat(sr.length);
console.log(s3);