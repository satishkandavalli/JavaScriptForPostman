//let variable: 
//ES stands for ECMA Script

//1. Introduced since ES6 onwards
//2. Allows Reassignment of data
//3. Does not allow redeclartion of variables
//4. It is a block scoped variable

let a1=500-300;
a1=false;

a1="Let Variable";
console.log(a1);

//Throws a compilation error when we are trying to redeclare using the let variable
//let a1="Hello";

function display()
{
    let b="Herro";

    if(b == 'Herro')
    {
        console.log(b);
        let c=1000;
        console.log(c);
    }

    console.log(b);
}

display();

//console.log(b);