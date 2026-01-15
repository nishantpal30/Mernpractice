// if(0>1)
// {
//     let num =`Nishant Pal`
//     console.log(num)
// }
// else{
//     console.log(`TaTa Byee`);
// }

// if(0<1)
// {
//     let num =`Nishant Pal`
//     console.log(num)
// }
// else{
//     console.log(`TaTa Byee`);
// }

// let nu =Math.floor( Math.random()*100)+1000;
// console.log(nu);


// program for grade checking
// function grade(a){
//     if(a>=90){
//         console.log("A grade")
//     }
//     else if(a>=80)
//     {
//         console.log("B grade")
//     }
// }
// grade(85)


// let arr =[20,40,"Nishant Pal",true]
// for (let value of arr ){
//     console.log(value)
// }

// for (let i=0;i<=3;i++){
//     console.log(arr[i]);
// }
// let arr =[10,40,60, 80]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])

// }
// for(let name of arr){
//     console.log(name)
// }

// arr.forEach((value , index) =>{
//     console.log(value ,index)
// })

let obj = {
name:"Nishant",
age : 19,
company : "Google",
}

console.log(obj)

for(let data in obj ){
    console.log(data , obj[data])
}