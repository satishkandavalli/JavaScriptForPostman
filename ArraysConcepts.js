//Arrays : 
//Set of Values 
//Collection of Homogenous set of data
//Fixed size in nature

//Except set of values all the other things are wrong in JS

//Arrays is one of the most dynamic data structure where size increases automatically
//Stores heterogenous set of data

let arr1=[4,23,"False",false,undefined,5.234];

console.log(arr1);

//Prints the size of the array
console.log(arr1.length);

//Adds the data to the existing array
console.log(arr1.concat(500,200,"Worlds","Data",null,undefined));
arr1=arr1.concat(500,200,"Worlds","Data",null,undefined);

//Checks if the array contains the value 'false'
//Returns true if the above condition is satisfied else false
console.log(arr1.includes(false));

//Prints the first occurence of the value 500 in the given array
//Returns -1 if the given value does not exist
console.log(arr1.indexOf(500));

//Prints the last occurence of the value undefined in the given array
//Returns -1 if the given value does not exist
console.log(arr1.lastIndexOf(undefined));

//Reverses the order of data stored in the array
console.log(arr1.reverse());

//Prints the value that is present at 7th index position
console.log(arr1.at(7));

//Creating an array whose size is 10 initially
arr1=new Array(10);

//Filling the complete array with value as 400
arr1.fill(400);

console.log(arr1);

//adds the value at the end of the array
arr1.push(900,800,700,"false",true);

console.log(arr1);

//Prints the value at 9th index position
console.log(arr1[9]);
console.log(arr1[900]); //Prints undefined if we are trying to access the index position which is greater than the size of the array

arr1[800]=980;

console.log(arr1);

//Prints the position of the value 700
//console.log(arr1.find(700));

//Adds the values at the start of the array
arr1.unshift(892);

console.log(arr1);

//Removes the value at the start of the array
arr1.shift();

console.log(arr1);

//Removes the value at the end of the array
arr1.pop();

console.log(arr1);

console.log("***************************************************************************************");

//Filter: 
//It is used to filter the data based on the given condition

let arr10=[4,2,10,5,99];

let filterOddNumbers = function (s) {
    return s%2!=0
}


let filteredArray=arr10.filter(filterOddNumbers);
console.log(filteredArray);

//Map: 
//It is used to transform the data from one form to another form

arr10=[4,2,10,5,99];

let transformedArray = arr10.map(s => s*2);
console.log(transformedArray);

transformedArray = arr10.map(s => s*s);
console.log(transformedArray);

//Reduce:
//It is used to reduce the data to a single value

//Sum of all the numbers present in the array
arr10=[90,100,20,30];
let sumOfData=arr10.reduce((a,b) => a+b);
console.log(sumOfData);