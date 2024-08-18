import inquirer from "inquirer"

let data:any=[]
class person{
    name:string
    age:number
    constructor(n:string,a:number){
    this.age=a
    this.name=n
    }
}

let startop= async ()=>{


let asking=await inquirer.prompt([{
    message:'enter name',
    name:'na',
    type:'input'
},{
    message:'enter age',
    name:'age',
    type:'input'
}])

let cal=new person(asking.na,asking.age)
data.push(cal)
console.log(data);
console.log(data.indexOf('urooba'));


console.log(data[0].age);

await startop()
}




let marks=[1,2,3,4,5,6]

console.log(marks.indexOf(5)); // 4

let friends:string[]=['urooba','raniya','taniya','saniya','urooba']
console.log(friends.lastIndexOf('urooba'));  // output 4
 


console.log(10/3
);
let janu:string=23
janu='ali '
console.log(janu);

