function go(x , to){
    for(x; x<5;x++ ){
        console.log("haha")
    }
to();
}

go(1 , ()=> console.log("callback"))

