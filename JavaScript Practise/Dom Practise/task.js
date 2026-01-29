function fetchdata(url, fun) {
  console.log("Starting download", url);
  setTimeout(function process() {
    console.log("Download complete");
    let respose = "Dummy data";
    fun(respose);
    // console.log("down",respose)
    // console.log("end")
    // return 30;
  }, 3000);
}

function saveinfile(data, fo) {
  console.log("saving start", data);
  setTimeout(function saveprocess() {
    console.log("saving done");
    let filename = "file.data";
    fo(filename);
  }, 3000);
}

// function uploadfile( toupload , upo){
//  console.log("Your file startuploading",toupload);
//  setTimeout(function fileupload(){

//  },3000)

// }

fetchdata("www.google.com", (response) => {
  console.log("down", response);

  saveinfile(response, (filename) => {
    console.log("your file has been saved", filename);

    // uploadfile(filename,())
  });
});
