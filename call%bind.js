
  //notes   
  //this.keyword is used for self refercing of its bjects

//call  -:it mean boorowing from another object's data


const user1 = {

    name: "nilesh",
    age: 30,
    sal: 100,
    // details: function () {
    //     console.log(this)
    // }
}

// user1.details();


const user2={
    name:"Priyanka",
    age:22,
    sal:200,
    no:1,
    details: function () {
        console.log(this)
    }  
}

// user1.details.call(user2.no);


const user3={
    name:"pallvi",
    age:22,
    sal:200,
    no:1,
    // details:function(){
    //     console.log(this)
    // }
}

details=function(city,COUNRTY){
    console.log(this.name + " "+ city +" "+COUNRTY   )
}

details.call(user3,"yetapalli","IND");
details.call(user2, "Nagpur" ,"USA" )
//   user2.details.call
// user3.details.call( user2.name, `${user2} call`)





                  ///apply  (use array)



details.apply(user1 ,["kanpur", "uk"]);






              //bind  -:it is user for take copy of object   and store new variable and used it whenever is required


              const data={

                name:"pallvi",
                lastname:"zale",
                sal:7300  
              }


              const userdetails=function(city, state){
                  console.log(this +" "+ city + " " +state)
              }

 let newdata=userdetails.bind(data.name ,"pune", "maharastra"  )

newdata()








//////////////////////practice//////////

 let User1={
      stname:"nikhil",
      stage:25,
      stsal:9000,
// fulldetails:function(city, state){
//     console.log(this,+" "+city+" "+state )
// }
 }

let User2={
    stname:"pallvi zale",
      stage:25,
      stsal:"10,000", 
}
let pr=function(city, state, country){
    console.log(this, `${city} ${state} ${country} `)
}
pr.call(User2,"nagpur","mh", "india")
// User1.fulldetails.call(User2,"Nagpur","mh")
// // pr.apply(User1,["raipur","mh","Gondiyak"])

 let newdata1=pr.bind(User2.stname ,"pune", "maharastra"  )
 newdata1()

          
                  
