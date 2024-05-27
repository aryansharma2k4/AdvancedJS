const arr = [1,2,3,4,5,6]
//for of loop
for (const val of arr) {
    console.log(val);
}

const greeting = ["Hello", "world", "namaste"]
for(const str of greeting){
    console.log(str);
}
 
//maps
const mpp = new Map()
mpp.set('IN', "India")
mpp.set('USA', "United States Of America")

console.log(mpp);

for(const [key, value] of mpp){
    console.log(key, ':-', value);
}

const myObj = {
    1 : 'NFS',
    2 : 'GTA'
}

for (const key in myObj) {
    console.log(myObj[key]);
}

const myArr = ["a", "b", "c"]
for(const key in myArr){
    console.log(myArr[key]);
}

//higher order 

myArr.forEach((item) => {
    console.log("Hello World ")
} )

function print(){
    console.log('print')
}

myArr.forEach(print)

myArr.forEach((item, index , arr) => {
    console.log(item, index, arr)
})


const languages  = [
    {
        name : "Java",
        fileName : "java"
    },
    {
        name : "C++",
        fileName : "cpp"
    },
    {
        name : "Python",
        fileName : "py"
    },
    {
        name : "Javascript",
        fileName : "js"
    }
]

languages.forEach((item) => {
    console.log(item.name);
})

languages.forEach((item) => {
    console.log(item.fileName)
})

const city = ["dhm", "shm", "mnd"]

//forEach function in js can be stored in another variable but i does not return any value to the variable is stored in
const values = city.forEach((item) => {
    console.log(item)
    return item
})

//filter operation takes the returned value and can be stored in a new variable
const myNums = [1,2,3,4,5,6,7,8]

const newNums = myNums.filter ((num) => num >4)
console.log(newNums)


//if using a {} then a new scope is started therefore you need to use a return statement 
//without the {} there is no need to use a return statement 
const nNums = myNums.filter ((num) => {
    return num>4
})

console.log(nNums);

//same way of doing filter function with forEach loop
myNums.forEach( (num) => {
    if( num>4){
    }
})
console.log(newNums)

//reduce function
const arr1 = [1,2,3,4,5]

//this will add the elements in the array
//this will initialize the acc with a value and then after every time the we proceed in the array the acc adds with the current value 
const iniVal = 0
const myTotal = arr1.reduce( (acc, currVal) => acc + currVal, 0)

console.log(myTotal);