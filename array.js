// array is collection of object 

///////////////////////////// methode //////////////////


const Languages=["java","node","pythen"];
// Languages.push("Nilesh")
// console.log(Languages.pop())
// Languages.shift()
// console.log(Languages.shift())
// Languages.unshift("mean")
// Languages.splice(1,2)
console.log(Languages)
// console.log(Languages.length) 

///////////////////////////// Loop in arrays ////////////////////

   //simple for loop


// for(let i=0;i<10;i++){
//     console.log("s*")
// }

// const Employee=[
//     {name:"Nikhilesh", payment:9200},
//     {name:"Pallavi", payment:7500},
//     {name:"Suchita", payment:7500},
//     {name:"Nilesh", payment:0}
// ]

// for(let i=0;i<Employee.length;i++){
// Employee[i].payment=Employee[i].payment-200;
//     console.log(Employee[i])
// }
// console.log(Employee)

                   ////////////




                   //forEach loop
// const Employee=[
//          {name:"Nikhilesh", payment:9200},
//          {name:"Pallavi", payment:7500},
//          {name:"Suchita", payment:7500},
//          {name:"Nilesh", payment:0}
//      ];

//      Employee.forEach((data,index)=>{
//          data.payment=data.payment-500
//       console.log(index, data)
//      })
//      console.log(Employee)


// const Employee=[
//               {name:"Nikhilesh", payment:9200},
//               {name:"Pallavi", payment:7500},
//               {name:"Suchita", payment:7500},
//               {name:"Nilesh", payment:0}
//           ];

// for(let Emp of Employee){
//     Emp.payment=Emp.payment-700;

// }
// console.log(Employee)


const Student=[
    {name:"Nikhilesh", mark:43},
    {name:"Narayan", mark:80},
    {name:"Suchita", mark:69},
    {name:"Pallvi", mark:37},
    {name:"Nilesh", mark:75},

]
const failed=Student.filter((stud)=>
 stud.mark<45
    // if(stud.mark<45){
    //     return true;

    // }else{
    //     return false
    // }
)

console.log(failed,"failed")
console.log(Student)





const Students=[
    {name:"Nikhilesh", mark:43},
    {name:"Narayan", mark:80},
    {name:"Suchita", mark:69},
    {name:"Pallvi", mark:37},
    {name:"Nilesh", mark:75},
    {name:"Suchita", mark:69}

]


const filterdata=Students.filter((data)=>{
    return data.name === 'Suchita'
})

console.log(filterdata)



const fil=Students.find((data)=>{
    return data.name === 'Suchita'
})

console.log(fil)
