

     // callback is 



const student=[
    {name:"pallavi zale"  ,profession:"Ui desiner"},
    {name:"Nilesh thakre"  ,profession:"berozgar"}
]



function getvalue(value) {
      let output;
    setTimeout(()=>{
        student.forEach((name, index)=>{
            output+= `<li>${name.name}</li> `
        })
            document.body.innerHTML=output
    },1000)
}


// getvalue(student);


function setvalue(value, callback){
    setTimeout(()=>{
      student.push(value);
      callback()
    },2000)
}

setvalue({name:"suchita karokar" ,profession:"Angular devpoler"},getvalue)