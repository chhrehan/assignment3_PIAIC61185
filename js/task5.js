var a = ['a', 1, 'a', 2, 1, 'a'];
var b=[];
var len=a.length;
for(var i=0;i<len;i++){
  if(b.indexOf(a[i]) === -1){
    b.push(a[i]);
  }
}
document.write("Initial Array: ");
document.write("[ "+a+" ]");
document.write("<br><br>After unique: ");
document.write("[ "+b+" ]");