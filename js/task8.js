var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("Counting: "+counting+"<br>");
//copy array
var reverse=[counting]
document.write("Reverse counting: "+reverse.reverse()+"<br>");
//copy the length of array
var len=counting.length;
//increase size of array
for(var k=len;k<len*2;k++){
  counting.push(k+1);
}
len=counting.length;
document.write("Even: ");
for(var i=0;i<len;i++){
  if(counting[i]%2===0){
  document.write(counting[i]+",");
  }
}
document.write("<br>Odd: ");
for(var j=0;j<len;j++){
   if(counting[j]%2 !== 0){
   document.write(counting[j]+",");
   }
}
document.write("<br>Series: ");
for(var i=0;i<len;i++){
  if(counting[i]%2===0){
  document.write(counting[i]+"k,");
  }
}