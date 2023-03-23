const array=[
    {name:'Dawon',age:23},
    {name:'Alice',age:null},
    {name:'Charlie',age:33},
    {name:'Frank',age:43},
    {name:'Derek',age:null},
    {name:'Lucy',age:13}
]
const newArray=array.filter(x => typeof(x.age)==="number")
console.log(newArray);
const resultArray=newArray.sort((a,b) => a.age-b.age);
console.log(resultArray);