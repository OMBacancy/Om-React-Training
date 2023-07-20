// const/let vs var //

if (false) {
    let x = 1
} else {
    let x = 2 // cannot be accessed outside even though it is executed
}

console.log(x) // throws an undefined error because let/const declare variable in lexical/inner scoping

// -------------------------------------------------------- //

if (false) {
    var x = 1
} else {
    var x = 2
}

console.log(x) // prints 2 because var declares variable in global scoping
