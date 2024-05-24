// functions
///... rest / spread operator means more than the one arguments
function calculatePrice(...num1){
    return num1
}
//output will be in the format of an array

console.log(calculatePrice(200, 300, 500));

const user = {
    username: "aryan",
    price : 999
}
function handleObject(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`);     
}

handleObject(user)
//directly passing object through the function
handleObject({
    username: "aryan",
    price : 999
})

//array can be passed the same way as the object                      


// Global Scope and local scope in JavaScript

// inside the function it is block scope and outside the function in the main code it is global scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

// this cannot work as a b and c are defined inside the function 

//nested function can use the variables from the parent function 
if(true){
    const userName = "aryan"
    if(userName === "aryan"){
        const website = "youtube"
        console.log(userName + website)
    }
}

// this is the proper example of scope rest everywhere if we use that variable then it will always show an console.error

function addOne(num){
    return num + 1
}

const addTwo = function (num){
    return num + 2
}

console.log(addTwo(5))

//arrow functions

//this is used if we are using current context for example in this case this refers to the data members inside the object
const user = {
    userName : "aryan",
    prince : 999,
    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`)
        //current context is this object or the variable
        console.log(this)
    }
}

user.welcomeMessage()
//changing the value of the username or the changing the object so the context will also change
user.userName = "sam"
user.welcomeMessage()

// in node environment this keyword refers to a empty object
//in side the browser this doesn't refers to a empty object but refers to varous properties in the browser
console.log(this);

function aryan(){
    //now this won't give a empty object but give a boject with various properties
    console.log(this)
}

aryan()

//this is a arrow function () => {} this can be holded inside a name or a variable 
const func = () => {
    console.log("hello world")
}

func()

//implicit return arrow function
//if we dont' use {} then there is no need to write return statement
const addTwo = (n1, n2) => (n1 + n2)

console.log(addTwo(3,5))

//immedately invoked function expression

(function cash(){
    console.log(`aryan sharma`);
})();

(() => {
    console.log(`sharma aryan`);
})();

((name) => {
    console.log(`name is ${name}`)
})("aryan")

// java script execution context 
// first global execution context is made in the variable 'this' 
// java script is single thread 
// the other execution context is function execution context 
// then evan execution context 
// first the memory is created in the memory creation phase (creation phase) 
// the memroy stored inside memroy creation phase in each variable and is undefined and for the function the function definiton is stored as memory
// the other is execution phase 
// ->execution phase
// the values assigned to the varibales 
// for each function a different execution phase is created which consists of a new variable environment and a new execution thread
// after the program is over the global execution context is deleted

// call stack
// the lowermost item in the stack is global execution context
// then all the functions are added and once they are done then they go out
// if function is call inside another function then the first function that is removed is the last one in 
// Working on the principle of LIFO

//control flow
//case statement
 const month = 3;
 switch(month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Last 9 Months");
 }
