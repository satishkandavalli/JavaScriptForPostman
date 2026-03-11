let arr = [201,492,291,false,492,928];

//Criteria is to fetch the odd numbers from this array without using loops

//.filter will accept a callback function which will help us filter the data
//.filter will return an array based on the condition satisfied
let filteredArray=arr.filter(s=> s%2!=0)
console.log(filteredArray);

//.map()
//It is used to transform the data from one form to another form
//.map() will accept a callback function which will help us transform the data
//.map() will return the transformed array

arr = [201,492,291,false,492,928];

//Print the Square of each and every number
let transformedArray=arr.map(s=> s*s);
console.log(transformedArray);

//Filter the odd numbers and double each and every value
let filteredAndDoubledData=arr.filter(s=>s%2!=0).map(s => s+s);
console.log(filteredAndDoubledData);

console.log("******************************************************************************************************");

//.reduce()
//Reduces the data to a single entity
//.reduce() will accept a callback function which will lead to a single value

arr = [201,492,291,false,492,928];

//find the product of the numbers in the array
let productOfValues=arr.reduce((a,b) => a*b);
console.log(productOfValues);