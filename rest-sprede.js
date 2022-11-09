

///       rest oprator->it combine other value of array or objects      
function addNumber(a,b,c,...other){
    console.log(arguments)
    return a+b+c;
}

const sum=addNumber(1,2,3,0,0,0)
console.log(sum,"sum")

///////   sprede oprator =it remove form array  and create independant  and spreade   such like [a,v,c]     sol=a v c
const Name=['Nilesh',"Pallwi", "Thakre"];
function GetName(a,b,c){
console.log(a,b,c)

}
GetName(...Name)




//////////////objects  ////////////////////

const student={
    name:"Nilesh",
    age:30,
    hobbies:["cricket", "singging"]
}


const {age, name}=student;    /////array destruring
console.log(age, name,"{{{}}}")
const {...resy}=student
console.log(resy);



const newStudent={
    ...student,
    name:"pallu"
}
console.log(newStudent)