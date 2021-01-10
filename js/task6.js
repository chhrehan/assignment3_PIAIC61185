var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
var len = aCities.length;
for(var i=0;i<len-1;i++){
  document.write(i+1 + o[i+1] +" choice is " + aCities[i]+"<br>");
}