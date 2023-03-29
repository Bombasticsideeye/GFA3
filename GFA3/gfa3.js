let num1 = Math.floor((Math.random() * 27) + 0);
let num2 = Math.floor((Math.random() * 27) + 0);
let num3 = Math.floor((Math.random() * 27) + 0);
document.getElementById("Bio").innerHTML= "Biology: "+num1;
document.getElementById("Chem").innerHTML= "Chemistry: "+num2;
document.getElementById("Phy").innerHTML= "Physics: "+num3;
if (num1 > num2 && num1 > num3) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Biology "+num1;
  } else if (num1 < num2 && num2 > num3) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Chemistry "+num2;
  } else if (num1 < num3 && num2 <num3) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Physics "+num3;
  } else if (num1 == num2 && num2 > num3) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Bology and Chemistry "+num1;
  } else if (num1 == num3 && num2 < num3) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Biology and Physics "+num3;
  } else if (num2 == num3 && num1 < num2) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Chemistry and Physics "+num2;
  }  else if (num2 == num3 && num1 == num2) {
    document.getElementById("Mostnumpass").innerHTML= "Most number of passes: "+"Chemistry and Physics "+num1;
  }  
 
let alphabet = "AABCDEFGHIJKLMNOPQRSTUVWXYZ";
let firstletter = alphabet[num1];
 document.getElementById("Firstletterofname").innerHTML= "First letter of the name of a student who studied for the exam: "+firstletter;
 
 let time = num2*num3;
 let hours = time/60;
 let rhours = Math.floor(hours);
 let minutes = (hours - rhours) * 60;
 let rminutes = Math.round(minutes);
 document.getElementById("Timeinhours").innerHTML="Time it took for them to finish one of the exams "+ time +"min: " + rhours+ " hour(s) and " + rminutes + " minute(s).";