var a = [20,53,78,4,91,12];
document.write("Initial Array: "+a+"<br>");
var len=a.length;
var temp;
for(var i=0;i<len;i++){
  for(var j=0;j<len;j++){
    if(a[j]>a[i]){
      temp=a[i];
      a[i]=a[j];
      a[j]=temp
    }
  }
}
document.write("Sorted Array: "+a);
