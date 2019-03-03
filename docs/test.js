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
                
                {TIN:       111111111, 
                NPI:        2222222222, 
                PTAN:       "1111aaaa", 
                BenHICN:    "111111111a", 
                BenMBI:     "111111aaaaaa", 
                BenName:    "Firstname Lastnameson", 
                BenDOB:     "01/01/1970", 
                BenSSN:     111111111, 
                ICN:        111111111111111, 
                FCN:        11111111111111, 
                BenDOS:     "11/11/1111"},
                
                {TIN:       123456789, 
                NPI:        2222222222, 
                PTAN:       "1234abcd", 
                BenHICN:    "111111111a", 
                BenMBI:     "123456abcdef", 
                BenName:    "Unoriginal Poser", 
                BenDOB:     "01/01/2000", 
                BenSSN:     111111111, 
                ICN:        123456789123456, 
                FCN:        11111111111111, 
                BenDOS:     "01/01/0001"}];
    
    var subbutton = document.getElementById("SubmitButton");
    subbutton.addEventListener('click', function(){
        
        var tinssn  = AttemptElement("TINSSNoption");
        var npi     = AttemptElement("NPIoption");
        var ptan    = AttemptElement("PTANoption");
        var program = AttemptElement("Programoption");
                
        var medicare    = AttemptElement("Medicaretext");
        var last        = AttemptElement("Lasttext");
                
        var first   = AttemptElement("Firsttext");
        var date    = AttemptElement("Datetext");
                
        // Verify all results that match inputted data
        results = [];
        for (var i = 0; i < data.length; i++){
            /*if (!(tinssn !== null && (tinssn === data[i].TIN or tinssn == tin.BenSSN))){
                continue;
            }*/
            
            // Medicare Beneficiary Identifier verification
            if (!(medicare != null && medicare != "" && medicare === data[i].BenMBI)){
                continue;
            }
            
            results.push(data[i]);
        }
        
        CreateCookie(results);
        window.location.href = "../results.html";
        
    });
}

function AttemptElement(check){
    var temp;
    try{
        temp = ReadValue(document.getElementById(check));
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

function CreateCookie(data){
    for (var x = 0; x < data.length; x++){
        addToCookie("object" + x + "=", JSON.stringify(data[x]));
    }
}

function addToCookie(id, value){
    var thing = id + value + "; path=/";
    document.cookie = thing;
}