//promise 1
//it is a object

const promiseOne = new Promise(function(resolve, reject){
    //do all task you want to do
    setTimeout(function(){
        console.log('task is complete');
        resolve();
    }, 1000)
});
//no we need to consume the promise
//also you need to connect the resolve to the then function

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log('function resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "aryan",
            email: "aryan@gmail.com"
        })
    }, 1000)
})
//you can also pass a object through the resolve inside the promise which can be further accessed by the then function
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Aryan"})
        }
        else{
            reject('ERROR!')
        }
    }, 1000)
})
// now we are assuming that sometimes we receive a error and sometimes not therefore we are using both resolve and reject


promiseFour
.then((user) => {
    console.log(user);
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Finally the promise is either resolved or rejected"))
//now then can be used when there is no error and catch for the reject case 
//finally is like a default case that is always running no matter the error is either resolved or rejected


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "JS"})
        }
        else{
            reject('ERROR!')
        }
    }, 1000)
})

//while using async is cannot directly handle errors and if you know that there might be some errors in this program then you need to use try catch block
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("ERROR!", error);
    }

}

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


