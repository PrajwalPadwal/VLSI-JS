
function method2(){
    
    // let s1 = "true";
    s1 = document.getElementById("str1").value;
    // let s2 = "true";
    s2 = document.getElementById("str2").value;

    var a = s1.length;
    var b = s2.length;
    if(a==b)
            document.getElementById("display2").innerHTML = "String lengths are equal";
        else if(a>b)
            document.getElementById("display2").innerHTML = "String 1 length is greater than String 2 length ";
    
    else  document.getElementById("display2").innerHTML = "String 1 length is less than String 2 length";
}

function method1(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
  
    let val = (str1.toLowerCase() === str2.toLowerCase());
    let s =val.toString();

    if(s=="true") 
        document.getElementById("display1").innerHTML = "Strings are equal";
    else 
        document.getElementById("display1").innerHTML = "Strings are not equal";
}

function method3(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    let val = str1.localeCompare(str2);
    let s =val.toString();

    document.getElementById("display3").innerHTML = s==0?"Strings are equal":"Strings are not equal";
}