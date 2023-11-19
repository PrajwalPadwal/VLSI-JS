var arr;
var n;
function lengthh() {
    n = parseInt(document.getElementById('1').value);
    arr = new Array();
    var str = "You have entered length:" + n;
    document.getElementById("res").innerHTML = str;
}
function Append() {
    let arrval = document.getElementById('2').value;

    try {
        // JSON.parse function tries to convert a valid JSON string into a JavaScript object
        let parsedArray = JSON.parse(arrval);
        // alert(typeof parsedArray);
        if (arr.length < n) {
            arr.push(parsedArray);
            var str = "You have entered :" + arr;
            document.getElementById("res").innerHTML = str;
        }
        else {
            document.getElementById("res").innerHTML = "Array full";
        }

    }
    catch (error) {
        document.getElementById("res").innerHTML = error;
    }
}
function IsArray() {
    try {
        // JSON.parse function tries to convert a valid JSON string into a JavaScript object
        let arrval = document.getElementById('2').value;
        let parsedArray = JSON.parse(arrval);
        let checkarr = Array.isArray(parsedArray);

        document.getElementById("res").innerHTML = checkarr;

    }
    catch (error) {
        document.getElementById("res").innerHTML = "false";
    }
}
function Empty() {
    arr = [];
    document.getElementById("res").innerHTML = "Array is Emptied";
}
function Display() {
    var str = "";
    var str = "You have entered :" + arr;
    document.getElementById("res").innerHTML = str;
}