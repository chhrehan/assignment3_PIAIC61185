var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput=prompt("Welcome to Bakery. What you want to order:", "cake");
var len=bakery.length;
var outPut;
var flag = false;
for(var i=0;i<len;i++){
  if(bakery[i]==userInput){
    outPut=bakery.indexOf(userInput);
    docuemnt.write(userInput+" is available at index "+outPut +" in our Bakery.");
    flag=true;
    break;
  }
}
if(flag==false){
  document.write("We are sorry."+userInput+" is <b>not available</b> in our Bakery.")
}