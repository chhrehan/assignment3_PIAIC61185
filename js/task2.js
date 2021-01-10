var studentsName=["Ali", "Ahmad", "Rehan"];
var scoreOfStudents=[444, 350, 410];
var totalMarks=500;
for(var i=0; i<studentsName.length; i++){
  percentage=(scoreOfStudents[i]/totalMarks)*100;
  document.write("Score of "+ studentsName[i]+ " is "+ scoreOfStudents[i]+ ". Percentage: "+percentage+"<br>");
  percentage=0;
}