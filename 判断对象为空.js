let object = {}
let isEmpty = false

//es6
if (Object.keys(object).length === 0) {
    isEmpty = true
} else {
    isEmpty = false
}
console.log(isEmpty)

//es5
let arr = []
for (let i in object) {
    arr.push(i)
}
arr.length === 0 ? isEmpty = true : isEmpty = false
console.log(isEmpty)

//JSON.stringify
if (JSON.stringify(object)==='{}'){
    isEmpty = true
}else {
    isEmpty = false
}
console.log(isEmpty)
