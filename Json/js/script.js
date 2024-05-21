let a ={name: "person 1",age :5}
let b={ age: 5,name: "person 1"}

function check(a,b){
    for(key in a){
        if(a[key] !== b[key]){
            return false
        }
    }
    return true
}
console.log( check(a,b))


