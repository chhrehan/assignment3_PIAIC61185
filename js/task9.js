var a = [24, 53, 78, 91, 12,20];
var len=a.length;
var large;
for(var i=0;i<len;i++){
  if(a[i]>a[i+1]){
    large=a[i];
  }
}
document.write("Array Items: "+a);
document.write("<br>The largest number is: "+large);
