//String --> Collection of letters, numbers, special characters in a sentence

//Different data types in JS:
//Primitive Data Type
//1. Number
//2. String
//3. null
//4. Boolean
//5. undefined
//6. Symbol which is popularly used since ES6 Onwards (Used in Objects)
//7. BigInt which is present since ES20 onwards which is used to store larger than integer value

//Non Primitive Data Type:
//1. Object
//2. Array
//3. Function
//4. Set, Map
//5. Date and Reg exp.....

//In JS,
let s3="Understanding the new set of information that is strings";

//Prints the total number of letters, numbers, special characters, white spaces in the string
console.log(s3.length);

//Converts the whole string into Capital letters
console.log(s3.toUpperCase());

//Converts the whole string into Small letters
console.log(s3.toLowerCase());

//.concat() is used to join/combine the data
console.log(s3.concat(" Yes It is!!!"));

console.log(s3);

//Checks if the string contains the word "new"
//If the above condition is satisfied then it returns true else false
//Case Sensitivity also matters here
console.log(s3.includes("new"));
console.log(s3.includes("THAT"));

console.log("Original String: "+s3);
//Prints the character that is present at 40th index position
console.log(s3.charAt(40));
console.log(s3.charAt(25));

//Prints an empty space if we are trying to acccess a character that is greater than length of string
console.log(s3.charAt(900));

//Prints an empty space if we are trying to acccess a character of -ve index position
console.log(s3.charAt(-67));

console.log(s3);

//repeats the same string for six times
//console.log(s3.repeat(6));

//IN JS, it will replace the first occurence of 'a' with 'u'
console.log(s3.replace('a','u'));

//IN JS, it will replace all the occurences of 'a' with 'z'
console.log(s3.replaceAll('a','z'));

console.log(s3);
//Prints the string starting from 6th index position till the end
console.log(s3.substring(6));
console.log(s3.substring(14));

//Prints an empty string if we are trying to access something that is beyond the length of the string
console.log(s3.substring(500));

//Prints the string starting from 4th index position till 10th index position
//Inclusive of starting index position and exclusive of end index position
console.log(s3.substring(4,10));
console.log(s3.substring(35,45));

s3="Understanding the new set of information that is strings";

//IN JS, whenever the start index position is greater than end position
//It Reads the string in a reverse order
//then we start counting the string from one
console.log(s3.substring(4,2));

//Since we have passed -ve index positions then the substring will print an empty space
console.log(s3.substring(-10,-2));

s3="Understanding the new set of information that is strings";

//Prints the index position of the first occurence of 'i'
console.log(s3.indexOf('i'));

//Prints -1 if the given letter or word does not exist in the string
console.log(s3.indexOf('z'));
console.log(s3.indexOf('that'));
console.log(s3.indexOf(' that'));

s3="Understanding the new set of information that is strings";

//Prints the index position of the last occurence of the letter 's'
console.log(s3.lastIndexOf('s'));
console.log(s3.lastIndexOf("gs"));
console.log(s3.lastIndexOf("and"));

s3="                     Sample Sets of Data                          ";

//Removes the white spaces that is present at the start and at the end of the string
console.log(s3.trim());

//Removes the white spaces that is present at the start of the string
console.log(s3.trimStart());

//Removes the white spaces that is present at the end of the string
console.log(s3.trimEnd());

s3="Examples Of Informations"

//Returns the value that is present at the 10th index position
//It is similar to .charAt() function but it supports UTF-16 characters
console.log(s3.at(10));

s3="Bärbel";

console.log(s3.charAt(1));