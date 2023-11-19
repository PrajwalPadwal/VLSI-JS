// function AreaTriangle(){
//     let a=Number(document.getElementById("side1").value);
//     let b=Number(document.getElementById("side2").value);
//     let c=Number(document.getElementById("side3").value);
//     let s=(a+b+c)/2;
//     let Area3=Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     let Ans3="";
//     Ans3=Ans3+Area3;
//     document.getElementById(Area3).value=Ans3;
// }
function AreaCircle(){ 
    let r= Number(document.getElementById("r").value); 
    let Area1=3.14159*r*r; 
    let Ans1=""; 
    Ans1=Ans1+Area1;
    document.getElementById("Area1").value=Ans1;
   
}
function AreaRectangle(){ 
    let l= Number(document.getElementById("l").value); 
    let bd= Number(document.getElementById("bd").value);
    let Area2=l*bd; 
    let Ans2=""; 
    Ans2=Ans2+Area2;
    document.getElementById("Area3").value=Ans2;
   
}
function AreaTriangle()
{ 
    let a= Number(document.getElementById("side1").value); 
    let b= Number(document.getElementById("side2").value);
    let c= Number(document.getElementById("side3").value); 
    let s= (a+b+c)/2;
    let Area3=Math.sqrt(s*((s-a)*(s-b)*(s-c))); 
    let Ans3=""; 
    Ans3=Ans3+Area3;
    document.getElementById("Area3").value=Ans3;
}
