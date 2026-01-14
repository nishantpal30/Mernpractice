// Non prem datatype (Array , Object , function)

let arr =[10,20,30, "nishant pal"];
console.log(arr);
console.log(typeof arr);


let fun= function(){
    console.log("Nishant Pal");
}

let str= {
    name : "Nishant Pal" ,
    branch : "cs" ,
    college : "kitps",
    roll_num : 23052 ,
    nik_name : fun() ,
}
console.log(str);



fun();