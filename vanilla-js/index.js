let a = '1'
console.log(a) // 1 because called `a` right away
const b = function a1() {
    console.log(a) // 3 because a1() is innerScoped, so it searches for most recent updated value of `a` in outerScope
    a = 2;
    console.log(a) // 2 because after fetching from outerScope, it gets new value inside the scope
    return a; // most updated value is returned which is 2
}

a = '3'
console.log(b()) // 2 because function call returned 2