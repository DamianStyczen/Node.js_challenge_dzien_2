//Twój kod
const fs = require("fs");

const fileURL = process.argv[2];

fs.readFile(fileURL, "utf8", (err, data)=>{
    if(err === null){
        let str = data.split("");
        let resultString = "";
        str.forEach((element, index) => {
            
            if(index%2 == 0){
                element = element.toUpperCase();
            }
            resultString += element;
            
        })
        fs.writeFile(fileURL, resultString, err =>{
            if(err === null){
                console.log("Zapisano poprawnie");
            }
            else{
                console.log("Błąd zapisu pliku.", err);
            }
        })
    }
    else{
        console.log("Błąd odczytu pliku.", err);
    }
})
