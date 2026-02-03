The Promise object we create has 4 major properties 
1.Status
2.Values
3.Onfulfillment
4.onreject

#status
status shows current promise status 
status has 3 state/status
1. Pendingn => still going on
2. fullfillment => complete or promise gives some result
3. reject => promise get rejected

#value
when the status of the promise is pending this value property is undefined. This moment promided is resolved (status => fullfilled) the value property is updated from undefined to the new value (this value we can consider as the returned value or resolved valur) . So the value property acts like a placeholder till the time promise finished.

#onfullfillment 
This is an array , which contains functions that we attached to our promise object. (to a promise object we can attaches some function using .then() method).
when the value properly is updated from undefined , to the new value, JS gives chance to these attached function one by one with the value property as their argument (if there is no piece of code in the call stack and globalcode left).

#how to create a promise
1.To create a promise call the promise constructure.
2. The promise constructure takes a callback as an argument.
3. The callback passed inside constructure expects two arrgument resolve, reject.
4. Then inside the callback write your logic.

syntax
function fetch(url){
 return new Promise(function(resolve,reject){
    // logic
})
}

5. If you want to return something on succes then call resolve finction with whatever value you want to return.

Note => Creation of promises object is synchronise.

exapmle for promise is the dost kai sath resturant mai gaya or baha dost nai promise kara ki tu sare pase dadai mai tuzai dai dunga lakin 10 days tk nahi diye to promise is still pending . 10 din bd pase dai diye toh promise complete ho gaya toh mtlb resolve ho gaya or pase nahi diye toh reject ho gya



#consuming a promise
The promise consumption is the main beauty , using when we will avoid inversion of control.
whenever we call a function, returning a promise.we will get a promise object which is like any JS object that we can store in a variable.

Now, the qustion is that will js wait for promise to be resolved if it involved any asunc piece of code
ans is if the creation of promise involves sync piece of code it will wait, otherwisw not wait.


Now technically , when promise gets resolved, we have to execute some functions.
We can use [.then()] function on the promises object , to bend the function we want to execute once we fulfill a promise.
The [.then()] function takes function as an argument that we want to execute after promise fullfill , and the argument function takes [value] property as a parameter.

.then mai ager last mai return likh kr kuch return kara to boh ek or promise bana dega or return karega.
[The .then() function itself return a new promises]


Micro task is given heigher priority as compare to evevt queue.
In micro task que primises is gone (check on chatgpt).
promise callback goes to microtask queue. And Normal callback goes to event queue.

Promise goes to microtask queue when it will be completely resolve. 