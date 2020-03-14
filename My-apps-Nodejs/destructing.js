let students= {
    firstName:"Jagan",
    lastName:"Rajagopal",
    Age:30,
    Hobbies:["Reading","programming"],
    email:"jaganrajagopalme@gmail.com"
}

/* console.log(students.firstName);
console.log(students.lastName); */
let {firstName, lastName,MYAge:NN="Not provided",...details} =students;
/* console.log(firstName);
console.log(lastName);
console.log(NN);
console.log(details); */

let arry= [2,3,4,5,8,9,4,5,2,78];
let [num1,num2, , num4,num5,...numbers] = arry;
console.log(num1);
console.log(num2);
console.log(num4);
console.log(num5);
console.log(numbers);

