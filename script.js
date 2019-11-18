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

   //add password to previously generated passwords
    document.getElementById("LastPassword").innerHTML += password + "<br />"

       
    
}

//set default legnth display of 25
document.getElementById("legnth").innerHTML= "Legnth 25";

document.getElementById("slider").oninput= function(){

    if (document.getElementById("slider").value > 0) {

        document.getElementById("legnth").innerHTML= "legnth:" + document.getElementById("slider").value;
         
    }
   else{
        document.getElementById("legnth").innerHTML= "legnth: 1";
        
    }
}
//function to copy to clipboard
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("copy");

    alert("It has been copied");
}
