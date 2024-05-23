//Object can be declared in two ways one as a constructor and other as a literal
//when objects are declared in literal ways then object is not singleton and vice versa

// Object.create() constructor method


//declaring a symbol

const mySym = Symbol("aryan")

//literal method of creating a object
const jsUser = {
    name : "Aryan",
    [mySym]: "sharma",  //inorder to use a symbol you need to write it inside []
    age : 19,
    location : "Dharmashala",
    isLoggedIn : false
}

console.log(jsUser.name)        //normal way of accessing the object members
console.log(jsUser["name"])

//for symbol you need to use it inside []
console.log(jsUser[mySym])

//freezing a value
//bject.freeze(jsUser)  //this will freeze all the objects values

console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello World");
}

console.log(jsUser.greeting())


//this is the only way to use a member inside the object in any other member
jsUser.greeting2 = function(){
    console.log(`hello World, ${this.name}`);
}

console.log(jsUser.greeting2())

// Declaring singleton or constructor method

const user = new Object()

user.id = "123abc"
user.name = "aryan"
user.isLogged = false

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userName : {
            firstName : "aryan",
            lastName : "sharma"
        }
    }
}

console.log(regularUser.fullName.userName.firstName)

// fullname?.userName this ? is only user if we dont know that fullname has the member userName or not 


// combining two objects 
const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const object3 = Object.assign(obj1, obj2)
console.log(object3)

//here the {} are used as the target is not necessary to add but can be added if three can are added then the other two will be added in the first object
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

//actually the method that is used is
//this is the spread operator
const obj4 = {...obj1, ...obj2}
console.log(obj4)


const users = [
    {
        id: "1",
        mail : "h@gmail.com"
    },
    {

    },
    {

    }
]

console.log(users[0].mail);

console.log(user)

//this will make a array of keys of the object user
console.log(Object.keys(user))
console.log(Object.values(user))

//will make a array of key with their correspoding values
console.log(Object.entries(user));

//returns true if it has this property
console.log(user.hasOwnProperty('isLogged'));


// object de-structuring
 

const course = {
    courseName : "JS",
    prince : 999,
    courseTeacher : "Aryan"
}

//this course.courseTeacher can be used as a teacher as the object is de-structured
const {courseTeacher: teacher} = course
console.log(teacher);

//JSON
//Even the keys are in ""
// {
//     name : "aryan",
//     lastName : "sharma",
//     age : 19
// }