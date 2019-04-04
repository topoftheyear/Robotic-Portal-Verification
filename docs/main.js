debug = false;

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
                BenDOS:     "01/01/2000",
                Program:    "A",
                Comment:    "Help I can't find my wallet."},
                
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
                BenDOS:     "11/11/1111",
                Program:    "B",
                Comment:    "Where is the bathroom?"},
                
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
                BenDOS:     "09/11/2018",
                Program:    "JA DME",
                Comment:    "I’ll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda."},
                
                {TIN:       222222222, 
                NPI:        3333333333, 
                PTAN:       "2222bbbb", 
                BenHICN:    "222222222b", 
                BenMBI:     "222222bbbbbb", 
                BenName:    "Greg Washton", 
                BenDOB:     "03/04/1991", 
                BenSSN:     222222222, 
                ICN:        222222222222222, 
                FCN:        22222222222222, 
                BenDOS:     "12/12/2018",
                Program:    "JD DME",
                Comment:    "The memes..."},
                ];
    
    var subbutton = document.getElementById("SubmitButton");
    subbutton.addEventListener('click', function(){
        
        var tinssn      = AttemptElement("TINSSNText");
        var npi         = AttemptElement("NPIText");
        var ptan        = AttemptElement("PTANText");
        var program     = AttemptElement("ProgramOption");  
        var medicare    = AttemptElement("MedicareText");
        var last        = AttemptElement("LastNameText");   
        var first       = AttemptElement("FirstNameText");
        var dateBirth   = AttemptElement("DOBText");
        var dateService = AttemptRadio("DOSRadio");
        var icn         = AttemptElement("IcnDcnCcnText");
        var fcn         = AttemptElement("FCNText");
        var hicn        = AttemptElement("HICNText");
        
        aler("tinssn: "       + tinssn       + "\n" +
                    "npi: "          + npi          + "\n" +
                    "ptan: "         + ptan         + "\n" +
                    "program: "      + program      + "\n" +
                    "medicare: "     + medicare     + "\n" +
                    "last: "         + last         + "\n" +
                    "first: "        + first        + "\n" +
                    "dateBirth: "    + dateBirth    + "\n" +
                    "dateService: "  + dateService  + "\n" +
                    "icn: "          + icn          + "\n" +
                    "fcn: "          + fcn          + "\n" +
                    "hicn: "         + hicn         + "\n");
                
        // Verify all results that match inputted data
        results = [];
        for (var i = 0; i < data.length; i++){
            // TIN and SSN verification
            if (tinssn != null && (!(tinssn === data[i].TIN || tinssn == data[i].BenSSN))){
                aler("TIN failure: " + tinssn + "\n" + 
                        tinssn + " " + data[i].TIN + " " + data[i].BenSSN);
                continue;
            }
            
            // NPI verification
            if (npi != null && !(npi == data[i].NPI)){
                aler("NPI failure: " + npi + "\n" + 
                        npi + " " + data[i].NPI);
                continue;
            }
            
            // PTAN verification
            if (ptan != null && !(ptan === data[i].PTAN)){
                aler("PTAN failure: " + ptan + "\n" +
                        ptan + " " + data[i].PTAN);
                continue;
            }
            
            // Program verification
            if (program != null && !(program === data[i].Program)){
                aler("Program failure: " + program + "\n" +
                        program + " " + data[i].Program);
                continue;
            }
            
            // Medicare Beneficiary Identifier verification
            if (medicare != null && !(medicare === data[i].BenMBI)){
                aler("MBI failure: " + medicare + "\n" +
                        medicare + " " + data[i].BenMBI);
                continue;
            }
            
            // Name verification
            var name = data[i].BenName.split(" ");
            if (first != null && !(first.toLowerCase() == name[0].toLowerCase())){
                aler("First Name failure: " + first + "\n" +
                        first + " " + name[0]);
                continue;
            }
            
            if (last != null && !(last.toLowerCase() == name[name.length - 1].toLowerCase())){
                aler("Last Name failure: " + last + "\n" +
                        last + " " + name[name.length - 1]);
                continue;
            }
            
            // Date of Birth verification
            if (dateBirth != null && !(dateBirth == data[i].BenDOB)){
                aler("DOB failure: " + dateBirth + "\n" +
                        dateBirth + " " + data[i].BenDOB);
                continue;
            }
            
            // Date of Service verification
            if (dateService != null){
                if (dateService == 0){
                    aler(dateService);
                    var current = Date.parse(data[i].BenDOS);
                    var earliest = Date.parse("09/11/2017");
                    var latest = Date.parse("01/11/2019");
                    
                    if (!(earliest <= current && current <= latest)){
                        aler("DOS failure: 0:" + dateService);
                        continue;
                    }
                }
                else if (dateService == 1){
                    aler(dateService);
                    if (!(data[i].BenDOS === "09/11/2018")){
                        aler("DOS failure: 1:" + dateService);
                        continue;
                    }
                }
                else if (dateService == 2){
                    aler(dateService);
                    var current = Date.parse(data[i].BenDOS);
                    var earliest = Date.parse(AttemptElement("FromDateText"));
                    var latest = Date.parse(AttemptElement("ToDateText"));
                    aler(earliest + " " + latest);
                    
                    // If the "provide date os service below option is selected yet
                    // the date text boxes are not filled, provide a failure
                    if (earliest == null || earliest == NaN || earliest == '' || latest == null || latest == NaN || latest == null){
                        aler("DOS failure: 2a:" + dateService);
                        continue;
                    }
                    
                    if (!(earliest <= current && current <= latest)){
                        aler("DOS failure: 2b:" + dateService);
                        continue;
                    }
                }
            }
            
            // ICN verification
            if (icn != null && !(icn == data[i].ICN)){
                aler("ICN failure: " + icn + "\n" +
                        icn + " " + data[i].ICN);
                continue;
            }
            
            // HICN verification
            if (hicn != null && !(hicn == data[i].BenHICN)){
                aler("HICN failure: " + hicn + "\n" +
                        hicn + " " + data[i].BenHICN);
                continue;
            }
            
            // FCN verification
            if (fcn != null && !(fcn == data[i].FCN)){
                aler("FCN failure: " + fcn + "\n" +
                        fcn + " " + data[i].FCN);
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

function AttemptRadio(check){
    var temp;
    try{
        temp = ReadValue(document.querySelector('input[name="' + check + '"]:checked'));
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

function aler(message){
    if (debug){
        alert(message);
    }
}