function validateForm(){
    var name = document.forms["val_form"]["username"].value;
    var email = document.forms["val_form"]["useremail"].value;
    var place = document.forms["val_form"]["place_option"].value;

    if(name == "" && email == "" && place == ""){
        blankname();
        blankemail();
        blankPlace();
        return false;
    } else if(name == ""){
        blankname();
        if(email == ""){
            blankemail();
            style_reset_place();
        } else if(place == ""){
            blankPlace();
            style_reset_email();
        } else {
            style_reset_place();
            style_reset_email();
        }
        return false;
    } else if(email == ""){
        blankemail();
        if(name == ""){
            blankname();
            style_reset_place();
        } else if(place == ""){
            blankPlace();
            style_reset_name();
        } else {
            style_reset_place();
            style_reset_name();
        }
        return false;
    } else if(place == ""){
        blankPlace();
        if(name == ""){
            blankname();
            style_reset_email();
        } else if(email == ""){
            blankemail();
            style_reset_name();
        } else {
            style_reset_email();
            style_reset_name();
        }
        return false;
    } else{
        style_reset_name();
        style_reset_email();
        style_reset_place();
    }

    document.getElementById("out_name").innerHTML = name;
    document.getElementById("out_email").innerHTML = email;
    document.getElementById("out_place").innerHTML = place;

    alert("Hello " + name +
    ", check " + email + " inbox for more informations. Enjoy your trip to "
    + place + " !!");

    return false;                         
}
function blankname(){
    document.getElementById("username").style.color = "red";
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("username").style.fontWeight = "bold";
    document.getElementById("username").placeholder = "please fill in your name";
}
function style_reset_name(){
    document.getElementById("username").style.borderColor = "";
    document.getElementById("username").style.color = "";
    document.getElementById("username").style.fontWeight = "";
}
function blankemail(){
    document.getElementById("useremail").style.color = "red";
    document.getElementById("useremail").style.borderColor = "red";
    document.getElementById("useremail").style.fontWeight = "bold";
    document.getElementById("useremail").placeholder = "please fill in your email";
}
function style_reset_email(){
    document.getElementById("useremail").style.borderColor = "";
    document.getElementById("useremail").style.color = "";
    document.getElementById("useremail").style.fontWeight = "";
}

function blankPlace(){
    document.getElementById("place_option").style.color = "red";
    document.getElementById("place_option").style.borderColor = "red";
}

function style_reset_place(){
    document.getElementById("place_option").style.color = "";
    document.getElementById("place_option").style.borderColor = "";
}