
  //notes   
  //this.keyword is used for self refercing of its bjects

//call  -:it mean boorowing from another object's data


const user1 = {

    name: "nilesh",
    age: 30,
    sal: 100,
    details: function () {
        console.log(this)
    }
}

user1.details();


const user2={
    name:"Priyanka",
    age:22,
    sal:200,
    no:1,
    details: function () {
        console.log(this)
    }  
}

user1.details.call(user2.no);


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
