window.onload = function(){
    // Reads in cookie and splits it apart
    var allcookies = document.cookie;
    cookiearray = allcookies.split(';');
    
    // Number of cookies in the thing
    var length = cookiearray.length;
    if (document.cookie.length == 0){
        length = 0;
    }
    
    document.writeln('<head><link rel="stylesheet" type="text/css" href="format.css"></head>');
    
    document.writeln("<p>Results found: " + length + "<br><p>");
    
    // Read through all cookies and display them to the page
    var result = "<br>";
    for (var i = 0; i < length; i++){
        name = cookiearray[i].split('=')[0];
        
        value = cookiearray[i].split('=')[1];
        value = AttemptParse(value);
        
        // Adds results to their own table (don't look its gross)
        result += '<div>';
        result += '<table style="width:50%;">';
        for (var key in value){
            result += '<tr>';
            result += '<td>';
            result += key + ': ';
            result += '</td><td>';
            result += '<input aria-disabled="True" disabled="disabled" type="text" value="';
            result += value[key];
            result += '"/><br></td>\n';
            result += '</tr>';
        }
        result += "</table></div><br>";
        
        eraseCookie(name);
    }
    
    document.writeln(result + "<p>");
    
    // Add button to window that returns user to index.html when clicked
    var menuButton =    '<br><input type="button" value="Main Menu" onclick="ReturnToMain()" />' +
                        '<script> function ReturnToMain(){' +
                        'window.location.href = "index.html";' +
                        '} </script>';
    document.writeln(menuButton);
}

function eraseCookie(name){
    console.log('deleting ' + name);
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

// Attempts to convert input from a string to an object
function AttemptParse(check){
    var temp;
    try{
        temp = JSON.parse(check);
    }
    catch(e){
        temp = null;
        console.log('failure in parsing for element ' + check);
    }
    return temp;
}