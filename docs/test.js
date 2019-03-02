window.onload = function (){
    var data = [{TIN:       123456789, 
                NPI:        1234567891, 
                PTAN:       "1234abcd", 
                BenHICN:    "123456789a", 
                BenMBI:     "123456abcdef", 
                BenName:    "Bob Robertson", 
                BenDOB:     "01/01/2000", 
                BenSSN:     123456789, 
                ICN:        123456789123456, 
                FCN:        12345678912345, 
                BenDOS:     "01/01/0001"},
                {TIN:       123456789, 
                NPI:        1234567891, 
                PTAN:       "1234abcd", 
                BenHICN:    "123456789a", 
                BenMBI:     "123456abcdef", 
                BenName:    "Bob Robertson", 
                BenDOB:     "01/01/2000", 
                BenSSN:     123456789, 
                ICN:        123456789123456, 
                FCN:        12345678912345, 
                BenDOS:     "01/01/0001"}];
    
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
                
                
        for (var key in data){
            alert(key + ": " + data[key]);
        }
        
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