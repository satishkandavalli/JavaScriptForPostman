//Function:
//To perform any particular task
//For Reusability purpose
//Set of lines written inside a block to perform the required operations at different points

//Named Function:
function display()
{
    console.log("Displaying the new set of informations");
}

display();

function performAdditionOfNumbers(a,b)
{
    return a+b;
}

console.log(performAdditionOfNumbers(40,20));

//2. Unnamed Function or Function Expression:
const productOfNumbers= function (a,b) {
    return a*b;
}

//When we are trying to print the function, it prints the name of the function along with the data type
console.log(productOfNumbers);

console.log(productOfNumbers(40,10));

//3. Arrow Function: Short Hand form of Function Expressions

const quotientOfNumbers = (a,b) => a/b;
console.log(quotientOfNumbers(40,20));

//4. Default Parameters 

function displayInformations(name, age=29)
{
    console.log(`Name of the person is: ${name} and the age of the person is: ${age}`);
}

displayInformations("Rini",30);

//5. Callback Function
//Calling a function inside another function

function mathematicalOperations(a,b,op)
{
    return op(a,b);
}

let additionOfNumbers = (a,b) => a+b;
let additionOfThreeNumbers = (a,b,c) => a+b+c;
let subractionOfNumbers = (a,b) => a-b;
let multiplicationOfNumbers = (a,b) => a*b;
let divisionOfNumbers = (a,b) => a/b;

let data=mathematicalOperations("50","30",additionOfThreeNumbers);
console.log(data+" from call back function");

//Whenever we perform arithmetic operations with undefined values, it returns NaN
//console.log(40-30+undefined);

//Whenever we are performing any subraction operation between two strings
//It automatically tries to convert those values into Number Data type
//And performs the subraction
console.log("50"-"30");

//Whenever we are performing any multiplication operation between two strings
//It automatically tries to convert those values into Number Data type
//And performs the multiplication
console.log("50"*"30");

//Whenever we are performing any division operation between two strings
//It automatically tries to convert those values into Number Data type
//And performs the division
console.log("50"/"30");

console.log("******************************************************************************************");

let sampleInfo = mathematicalOperations(40,50,(a,b) => (a*b)-(a-b));
console.log(sampleInfo);

//Callback Hell --> When we use a concept of nested functions

let sampleInfoTwo = mathematicalOperations(30,20, (a,b)=> {

    function formulateData(a)
    {
        return a+10;
    }

    return formulateData(a)+b;
})