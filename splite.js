


const d=[
    {val:123456},   {val:461230},   {val:125078},
]

const obj=[]
  const f=d.forEach(element => {
     console.log(element.val.toString().slice(3,6))
  obj.push( element.val.toString().slice(3,6))
});

console.log(obj,"d")