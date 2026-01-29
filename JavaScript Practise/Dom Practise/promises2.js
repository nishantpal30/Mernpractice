function fetchdata(url ,fun){
    console.log("Starting download",url);
    setTimeout(function process(){
        console.log("Download complete");
        let respose = "Dummy data";
        fun(respose)
        console.log("end")
        // return 30;
    },3000);
}

fetchdata("www.google.com" , (response) => {
console.log("down",response)
})
// console.log(respose)