//IN JS --> an Object is a collection of key value pairs

const students= {
    firstName: "Ashok",
    courseName: "Automation Testing",
    courseDuration: 40
}

console.log(students);

//Print only first name
console.log(students.firstName);

//Prints only the course name
console.log(students.courseName);

//If the given key does not exist in JS Object, it will print undefined
//It is because the default value for any variable in JS is undefined
console.log(students.fees);

//Since Object is a mutable data type, we can add the attributes later also
students.fees=10000;
console.log(students);

students.courseDuration=70;
console.log(students);

//Deleting the attributes from the object
delete students.fees;

console.log(students);

//We cannot delete the object at all
//delete students;

// students={
//     sampleInfo:"Hello"
// };

// console.log(students);

//Array of Objects:

console.log("************************************************************************************************************");

let listOfStudents = [
    {
        firstName: "Ashok",
        courseName: "Automation Testing",
        courseDuration: 40,
        gender:"Male"
    },

    {
        firstName: "Rosalyn",
        courseName: "Performance Testing",
        courseDuration: 50,
        gender:"Female"
    },

    {
        firstName: "Rini",
        courseName: "Security Testing",
        courseDuration: 30,
        gender:"Female"
    },

    {
        firstName: "Satya",
        courseName: "ETL Testing",
        courseDuration: 20,
        gender:"Male"
    }
];

console.log(listOfStudents);

//Fetch the list of Students who are doing automation testing
let listOfStudents_Automation = listOfStudents.filter(s=> s.courseName == 'Automation Testing');

console.log(listOfStudents_Automation);

let listOfStudents_CourseDuration = listOfStudents.filter(s => s.courseDuration>30)
            .map(s=> s.courseDuration=s.courseDuration+20);

console.log(listOfStudents_CourseDuration);

//We want to check that every student is taking automation testing or not
//If anyone of the student course is not automation testing, then it will return false else it returns true
console.log(listOfStudents.every(s=> s.courseName == 'Automation Testing'));

console.log("****************************************************************************************************************************");

let informations = [

    {
        firstName:"Rini",
        profession: "QA"
    },

    {
        firstName:"Avisha",
        profession: "Developer"
    },

    {
        firstName:"Mohit",
        profession:"Devops"
    }

];

//Removes the profession field from the first object
//delete informations[0].profession;
//console.log(informations);

informations.forEach(s=> delete s.profession);

console.log(informations);

console.log("*****************************************************************************************");

let cricketers = {
    playerName : "Sachin Tendulkar",
    country: "India"
};

//Convert the JS Object to JSON
let jsonStrings=JSON.stringify(cricketers);
console.log(jsonStrings);

//JSON is the lightweight version of JS object which does not consume much memory and easy to process the information

//Convert the JSON to JS Object
cricketers=JSON.parse(jsonStrings);
console.log(cricketers);