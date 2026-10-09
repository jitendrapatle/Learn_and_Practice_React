let tasktitle = "Learning react";
const preority = "High";

// preority = "Low"; // Not work, because we cannot change the value for const
console.log(tasktitle);
console.log(preority);


if(true){
  var message = "Hello"
}
console.log(message);

const user = {
  myName : "Jitendra",
  age : 30
}
user.myName = "Aakash"
console.log(user);


const input = "250";
const amount = Number(input);

if (input.trim() !== "" && Number.isFinite(amount)) {
  console.log("Valid amount:", amount);
} else {
  console.log("Please enter a valid amount");
}

function calculateTotal(amount , quantity){
  return amount * quantity;
}

const total = calculateTotal(15,4)
console.log(total);


function greet(name){
  return `Hello Mr. ${name}`
}

const greetUser = (name)=>{
  return `Hello again Mr. ${name}`
}

console.log(greet("jitendraP"));
console.log(greetUser("Jeet"));

const double = (num)=> num * 2; // No return keyword is required
console.log(double(7));


// const name1 = "Rahul";
// function showName(){
//   console.log(name1);
//   const name1 = "Ajay"
// }

// showName(); //TDZ


// sayHello(); // ReferenceError
// const sayHello = () => {
//   console.log("Hello!");
// };