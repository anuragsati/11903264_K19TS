function displayError(label){
    label.classList.remove("errMsg");
    label.classList.add("errStyle");
}

function undisplayError(label){
    label.classList.add("errMsg");
    label.classList.remove("errStyle");
}

function validate(){

    //for username validation
    var username = document.getElementById("username").getElementsByTagName("input")[0].value;
    var uLabel = document.getElementById("username").getElementsByTagName("label")[0];
    if(username === ""){
        displayError(uLabel);
    }
    else{
        undisplayError(uLabel);
    }

    //for email validation 
    var email = document.getElementById("email").getElementsByTagName("input")[0].value;
    var eLabel= document.getElementById("email").getElementsByTagName("label")[0];

    if(email==""){
        displayError(eLabel);
    }
    else{
        if(validEmail(email))
            undisplayError(eLabel);
        else
            displayError(eLabel);
    }

    //for password validation
    var pass= document.getElementById("pass").getElementsByTagName("input")[0].value;
    var pLabel= document.getElementById("pass").getElementsByTagName("label")[0];

    if(pass==""){
        displayError(pLabel);
    }
    else{
        undisplayError(pLabel);
    }

    //for confirm pass 
    var conPass = document.getElementById("confirmPass").getElementsByTagName("input")[0].value;
    var cpLabel = document.getElementById("confirmPass").getElementsByTagName("label")[0];

    if(conPass != pass){
        displayError(cpLabel);
    }
    else{
        undisplayError(cpLabel);
    }

    //for dob

    var dob = document.getElementById("dob").getElementsByTagName("select");
    var dobLabel= document.getElementById("dob").getElementsByTagName("label")[1]

    var date = dob[0].vlaue;
    var month = dob[1].value;
    var year= document.getElementById("dob").getElementsByTagName("input")[0].value;


    if(month == "Month" || date =="Date"){
        displayError(dobLabel);
    }
    else{
        if(validYear(year))
            undisplayError(dobLabel);
        else
            displayError(dobLabel);
    }
    

    //validate access :)
    var accessLabel= document.getElementById("access").getElementsByTagName("label")[1];

    if(!document.getElementById("access").getElementsByTagName("input")[0].checked){
        displayError(accessLabel);
    }
    else{
        undisplayError(accessLabel);
    }

};

function validYear(y){
    if(y>=1900 && y<=2020 && y!="")
        return true;
    else 
        return false;
}

function validEmail(email){
    var reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;       //regex (this was hard)

    if(email.match(reg))
        return true;
    else
        return false;
}