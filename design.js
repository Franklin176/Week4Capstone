var x = 0;
var array = Array();


function userChoice() {
  //Step 1: find the element
  var list = document.getElementById("list");
}
function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}