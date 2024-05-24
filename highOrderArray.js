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