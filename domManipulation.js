const clas=document.getElementsByClassName("heading")
console.log(clas,"class");

const id=document.getElementById("he");
console.log(id,'by id');

const tag=document.getElementsByTagName("p");
console.log(tag,"tag");


const que=document.querySelector("#demo");
console.log(que,"query selector");

const quew=document.querySelectorAll(".heading");
console.log(quew);



// traverse node

const mainHeading=document.querySelector(".main")
console.log(mainHeading.childNodes)

const parent= document.querySelector(".pallu");
console.log(parent.parentNode)

const sib= document.querySelector(".pallu")
console.log(sib.nextElementSibling)

const privious=document.querySelector(".wo")
console.log(privious.previousElementSibling)


 ///////////////// Manipulation //////////////////////
const head= document.querySelector('.head')
head.innerHTML=" WELCOME DOM MANIPULATION ! "
head.style.fontSize="40px"
head.style.color="white"
head.style.backgroundColor="green"
head.classList.add("title");
head.classList.remove("head")


///////////////////////////////  element creation /////////////////////



const ta=document.createElement("h1");
ta.innerHTML="i am angular dev"
const d=document.querySelector("#demo")
d.appendChild(ta);



 const ptage=document.createElement("p");
 ptage.innerHTML="Title:Automatic solar tracking system";
  ptage.style.color="white";
//  ptage.style.backgroundColor="blue";
 ptage.style.textAlign="center"

 ptage.style.fontFamily="cursive"
const des=document.querySelector(".des");
des.appendChild(ptage)

const mainT= document.createElement("h2")
mainT.innerHTML="Devoloper"
ptage.style.backgroundColor="blue";
mainT.style.color="red";
mainT.style.textAlign="center"
ptage.insertAdjacentElement("afterbegin", mainT)


    
