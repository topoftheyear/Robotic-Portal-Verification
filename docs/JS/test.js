window.onload = function (){
    var subbutton = document.getElementById("SubmitButton");
    subbutton.addEventListener('click', function(){
        
        var tinssn  = AttemptElement("TINSSNoption");
        var npi     = AttemptElement("NPIoption");
        var ptan    = AttemptElement("PTANoption");
        var program = AttemptElement("Programoption");
        
        alert(  "TIN or SSN: "  + ReadValue(tinssn) + "\n" +
                "NPI: "         + ReadValue(npi) + "\n" +
                "PTAN: "        + ReadValue(ptan) + "\n" +
                "Program: "     + ReadValue(program) + "\n");
                
        var medicare    = AttemptElement("Medicaretext");
        var last        = AttemptElement("Lasttext");
        
        alert(  "Medicare: "    + ReadValue(medicare) + "\n" +
                "Last: "        + ReadValue(last) + "\n");
                
        var first   = AttemptElement("Firsttext");
        var date    = AttemptElement("Datetext");
        
        alert(  "First: "   + ReadValue(first) + "\n" +
                "Date: "    + ReadValue(date) + "\n");
    });
    
}

function AttemptElement(check){
    var temp;
    try{
        temp = document.getElementById(check);
    }
    catch(e){
        temp = null;
    }
    return temp;
}

function ReadValue(check){
    var temp;
    try{
        temp = check.value;
    }
    catch(e){
        temp = null;
    }
    return temp;
}