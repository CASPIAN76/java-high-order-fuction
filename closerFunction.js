
// a closure gives you access to an outer function's scope from an inner function.



const mul=function(a){
    console.log(a,"a")
var c=20
    return function(b){
        return a+b+c
    }
}
const d=mul(2)
console.log(d(3))


// ===========================================================================================


const add=(a,b,c)=>{
     
    return {
        gettwo:function(){
            return a+b
        },
        getthree:function(){
            return a+b+c
        }

    }
}

const f=add(1,2,3);
console.log(f.getthree())

console.log(f.gettwo())


