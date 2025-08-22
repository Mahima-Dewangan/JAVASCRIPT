//ques 1 : get user to input a number using prompt("Enter a number:").Check if the number is a multiple if 5 or not.

// alert : it just displays the pop up message on our website
// prompt : it displays the pop up message on our website
//  as well as gives the input box to enter an input 
// prompt is a way to take input from the user
let num = prompt("Enter a number");
if(num%5 === 0)
{
    alert("number is a multiple of 5");
}
else
{
    alert("number is not a multiple of 5");
}



// write a code to give grades to students based on their marks

let marks = prompt("Enter the marks");

if(marks >=90 && marks <= 100)
{
    alert("A");
}
 else if(marks >=70  && marks <= 89)
{
    alert("A");
}
if(marks >= 60 && marks <= 69)
{
    alert("A");
}
if(marks >=50 && marks <= 59)
{
    alert("A");
}
else
{
    alert("F");
}
