var colorArr=["red","yellow"];
document.write("<h2>Initial Array.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

var userColor=prompt("What color you want to add on the bigining of array!");
colorArr.unshift(userColor);
document.write("<h2>After Add at the Bigning.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

var userColor=prompt("What color you want to add on the end of array!");
colorArr.push(userColor);
document.write("<h2>After Add at the End.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

colorArr.unshift("black", "white");
document.write("<h2>After Add two more colors at the bigining</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

colorArr.shift();
document.write("<h2>After delete first element form bigning.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

colorArr.pop();
document.write("<h2>After delete first element form end.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");

var userIndex=parseInt(prompt("At which index you want to add color!", 0));
var userColor=prompt("What color you want to add.!");
colorArr.splice(userIndex,0, userColor);
document.write("<h2>After add color at your specified index.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");
var userIndex=parseInt(prompt("At which index you want to delete color!", 0));
var userDelteNumber=parseInt(prompt("How many colors you want to delet from that index of array!"));
colorArr.splice(userIndex,userDelteNumber);
document.write("<h2>After remove colors as you specified.</h2><br>");
document.write("[ "+ colorArr+ "]<br>");


