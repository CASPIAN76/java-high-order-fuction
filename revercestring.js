
  // for reverce
function rev(name){
const d=name.split("").reverse().join( "")
    console.log(d)
}
 const na=prompt("Enter name")
rev(na)

////////////////////////////////////////////////////////////////////////// end ---  //////////////////

//comparing string
const  f1="hello i am nILESH" ;
const f2="hello i am nILESH b" ;

if(f1===f2){
    console.log("same content")
}else{
    console.log("not same")
}

///////////////////////////////////////////////////
//palindrom
 function palindrom(string){
    const pal=string.split('').reverse().join("")
    if(string===pal){
        console.log("it is palindrom")
    }else{
        console.log("it is not")
    }
 }
 palindrom("madaaa")



