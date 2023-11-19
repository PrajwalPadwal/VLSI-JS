document.body.style.backgroundColor = "#FFFFFF";
function Reverse() {
    var s1= document.getElementById("s1").value;
    var reversed=s1.split('').reverse().join('');
    document.getElementById("display").innerHTML = reversed;
     
}

function LoopReverse() {
    var sl= document.getElementById("sl").value;
    var slr = ""; 
    for(var i=(sl.length-1); i>=0 ; i--){ 
        slr+=sl[i];
    }
    document.getElementById("displayrev").innerHTML = slr;
     
}

function ChangeSub() {
    var s2= document.getElementById("subs").value;
    
    var subx= document.getElementById("subx").value;
    var suby= document.getElementById("suby").value;
    var subl=s2.split(subx);    
    var sans=subl.join(suby);
    document.getElementById("displaysub").innerHTML = sans;
}

function ChangeChar() {
    var s2= document.getElementById("s2").value;
    
    var x= document.getElementById("x").value;
    var y= document.getElementById("y").value;
    var l=s2.split(x);    
    var ans=l.join(y);
    document.getElementById("display1").innerHTML = ans;
}

function Palindrome() {

    var s3= document.getElementById("s3").value;
    var s1=s3.split('').reverse().join('')
    let result = s1.localeCompare(s3);
    if(result==0)
    {
        ans="Given string is palindrome";
    }
    else{
        ans="Given string is not palindrome";
    }

    document.getElementById("display2").innerHTML = ans;
 
}