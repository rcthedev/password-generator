//generate random password
function generate(){
//set password complexity
    let complexity= document.getElementById("slider").value;
    

//possible password values
    let values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#";

    let password= "";
    //create for loop to choose password characters
    
    for(var i= 0; i <= complexity; i++){
        password= password + values.charAt(Math.floor(Math.random() * Math.floor(values.length- 1)));
    }
    //add password to textbox/display area
   document.getElementById("display").value= password;

    function newFunction() {
        return document.getElementById("slider").values;
    }
}