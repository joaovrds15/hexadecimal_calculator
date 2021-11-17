let integerValue;
let hexValue;
let convertHex = false;
//Aprender a fazer commit para gitHub para quando der merda no código igual agora poder retroceder umas versões
//Check if my code will bug when submit clicked more than once

function getVal(){
    integerValue = parseInt(document.getElementById("integer_input").value);
}

function getValHex(){
    hexValue = document.getElementById("hex_input").value;
}

document.getElementById("hex_input").addEventListener("click", function () {
    convertHex = true;
});

document.getElementById("integer_input").addEventListener("click", function () {
    convertHex = false;
});

document.getElementById("submit").addEventListener("click", function(){
    if(convertHex == false){
        decimalToHex(integerValue);
    }
    else{
        hexValue = document.getElementById("hex_input").value;
        console.log(hexValue);
        hexToDecimal(hexValue);
    }
    
    
});


function decimalToHex(integerValue){
   let hexString = integerValue.toString(16);
   document.getElementById("hex_input").value = hexString.toUpperCase();
   
}

function hexToDecimal(hexValue){
    yourNumber = parseInt(hexValue, 16);
    document.getElementById("integer_input").value = yourNumber;
}