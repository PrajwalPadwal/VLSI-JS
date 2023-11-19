var Array = [];
var n;
function lengthh() {
    var n = document.getElementById('1').value;
    var str = "You have entered length:" + n;
    document.getElementById("res1").innerHTML = str;
}
function arrayip() {
    let arrval = document.getElementById('2').value;
    Array = arrval.split(',');
    var str = "You have entered :" + Array;
    document.getElementById("res2").innerHTML = str;
}
function del() {
    let val = document.getElementById('delete').value;
    var f = Array.indexOf(val);
    if (f == -1) {
        var str = "Value :" + val + " is not present in array";
        document.getElementById("res3").innerHTML = str;
    }
    else {
        delete Array[f];
        var str = "Value :" + val + " is deleted";
        document.getElementById("res3").innerHTML = str;
    }
}
function find() {
    var val = document.getElementById('fnd').value;
    var f = Array.indexOf(val);
    if (f == -1) {
        var str = "Value :" + val + " is not present in array";
        document.getElementById("res4").innerHTML = str;
    }
    else {
        var str = "Value :" + val + " is present in array";
        document.getElementById("res4").innerHTML = str;
    }
}
function Empty() {
    Array = [];
    document.getElementById("res5").innerHTML = "Array is Emptied";
}
function Display() {
    var str = "";
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] != undefined)
            str += Array[i];
        str += " ";
    }
    document.getElementById("res6").innerHTML = str;
}