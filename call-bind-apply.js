
const User1={
    name:"pallavi",
    age:"30"
}

const user2={
    name:"Nilesh",
    age:'31'
}

const call=function(state, city){
    console.log(this,`${state} ${city}`)
}

call.call(user2,"mp","india")
call.apply(User1, ["nag", "mh"])
const data=call.bind(User1,"SUCHITA","MP"  )
data()
