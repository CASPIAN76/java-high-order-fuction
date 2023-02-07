


// rest oprator



function sum(a,b,c,...other){
  console.log(other)
    return a+b+c;
}

console.log(sum(3,5,2,4,5,6,6))


//sprede oprator

const name=["Nilesh", "pallavi ", "suchita" , "narayan"];
function postname(name1,name2,name3,name4, ) {
      console.log(name1,name2,name3,name4, )
}
postname(...name);




// with array

const stud={
    name:"pallavi",
    age:"23",
    hobbies:["cricket", "tenish","chesss"]
}


const {age,...rest}=stud;
console.log(age, rest);


const stude1={
    ...stud,
    age:30
}
console.log(stude1)


