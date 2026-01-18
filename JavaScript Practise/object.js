// let obj ={
//     username: "Nishant Pal",
//     roll : 4564,
//     ammount : 459934,
//     num:787
// }


// const {roll:nu,ammount:sal} =obj;
// console.log(nu,sal)


// for(let num in obj){
//     console.log(num , obj[num])
// }



// console.log(obj)

// console.log(obj.username)

// obj.adar = 4587889;
// console.log(obj)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// let arr = [49,48,43,323]

// let [second,five,...foi]=arr
// console.log(second,five,foi)
// let obj ={
//     username: "Nishant Pal",
//     roll : 4564,
//     ammount : 459934,
//     num:787
// }

// for([vale,tou] of Object.entries(obj)){
//     console.log(vale,tou)
// }

let obj ={
    username: "Nishant Pal",
    roll : 4564,
    ammount : 459934,
    num:787,
    fun:function()
    {
        console.log(`Gate crack kr kai IIT Bombay jana hai ${this.username}`)
    }
}

obj.fun()
