var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,11,10];
var union=a.concat(b);
var sortUnion=union.sort((a,b)=>{
  return a -b;
});
var unique=[];
var temp;
var len=union.length;
for(var i=0;i<len;i++){
  if(sortUnion[i]!== temp){
    unique.push(sortUnion[i]);
    temp=sortUnion[i];
  }
}
document.write("First Array is: "+a+"<br>");
document.write("Second Array is: "+b+"<br>");
document.write("After Union of Arrays is: "+union+"<br>");
document.write("After remove redundancy of Elements is: "+unique+"<br>");



