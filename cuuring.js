
function add(a){
    return function(b){
     
           if(b) return add(a+b);
             return a;
    }
}
console.log(add(4)(5)(6)(15)())


  //  function sub(a){
  //   return function (b){
  //     return  sub(a-b);
  //   }
  //  }


  //  let s=sub(5)(4)
  //  console.log(s)

////////////////////////////////////////////////
  function addition(a,b,c){return a+b+c;}
  console.log(addition(5,5,5))
//////////////////////////////////////////////////////////////////


  function aditions(a){
    return function(b){
      return function(c){
        return a+b+c;
      }
    
    }
  }

  let d=aditions(5);
  const f = d(6);
  const g=f(4)
 console.log(g);

/////////////////////////////////////////////////////


const User={
  name:"Nilesh",
  age:"30"
}

function user(ob){
  return function(data){
    return ob[data]
  }
}

 let da=user(User)
console.log(da("age"));

const studentdata={
  name:"pallvi zale",
  age:"90",
  qualifivation:"be failed"
}


function studentInf(stdata){
 return function(name){
  return stdata[name]
 }
}

 const st=studentInf(studentdata);
 console.log(st("qualifivation"))



 function substraction(a){
  return function(b){
  if(b) return substraction(a-b);
  
  return a;
  }

 }


 console.log(substraction(15)(4)(1)(2)(3)(1)());





function mult(a){
  return function(b){
    if(b)  return mult(a*b);
    return a;
  }
}
console.log(mult(5)(5)(5)())