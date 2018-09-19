//Twój kod
const fs = require("fs");

fs.readFile("./data/zadanie01/input.json", "utf8", (err, data) =>{
    if(err === null){
        let resultArray = JSON.parse(data);
        console.log(resultArray);
        let sum = resultArray.reduce((a, b) => a+b);
        console.log(sum);
        fs.writeFile("./data/zadanie01/sum.txt", sum, err => {
            if (err === null){
                console.log('Zapisano poprawnie!');
            } else {
                console.log('Błąd podczas zapisu pliku!', err);
            }
        })
    }
    else{
        console.log('Błąd podczas odczytu pliku!', err);
    }
})