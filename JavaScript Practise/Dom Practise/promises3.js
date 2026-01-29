function doorder(){
    
    return new Promise(function(accept,notaccept){
 console.log("Your order is on the way")
 setTimeout(function process(){
    console.log("You order pizza");
    let price = 300;
    accept(price)
 },5000)
 console.log("delivery partner pickup the order")
    })
}

let ammount = doorder();
// console.log(`You need to pay ${ammount} to complete the order`);

