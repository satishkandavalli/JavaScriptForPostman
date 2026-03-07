//What is a variable??
//Variable is nothing but temporary storage of data
//Scope of a variable is during the execution time

//In JS we have three different types of variables:
//1. let
//2. var
//3. const

//var keyword:
//1. It is one of the age old keywords used since ES1
//2. It stores the value inside a variable
//3. Allows reassignment of data with any type of data
//4. It is a function scoped variable

//We do not require any data type to store the value inside a variable

var a=500;
console.log(a);

a=false;
console.log(a);

a="Sample Informations of data";
console.log(a);

//Disadvantage of using var:
//It allows redeclaration of values

var b=1000;
console.log(b);

var b=true;
console.log(b);

function samples()
{
    var b=4000;
    console.log(b);
}

samples();

//Throws a Reference Error stating that "b" is not defined
console.log(b);