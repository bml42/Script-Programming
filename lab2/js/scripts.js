var myFamily = [];
var bool = true;

//  Function that creates a person object
function buildPerson() {
// prompt for input
   var fullName = prompt("Enter full name");
   var age = prompt("Enter age");
   var relationship = prompt("Enter relationship to you");
   var color = prompt("Enter favorite color");
   var food = prompt("Enter favorite food");

//assign value
var familyMember = new Object();
   familyMember.name = fullName;
   familyMember.age = age;
   familyMember.relationship = relationship;
   familyMember.color = color;
   familyMember.food = food;
   
   return familyMember;
}
do {
    // Create a person and add it to the list
    myFamily.push(buildPerson());
    bool = confirm("Do you want to continue adding family members?")
} while (bool == true);

// Print out the family
for (var i = 0; i < myFamily.length; i++)  {

   document.write("<h1>" + myFamily[i].name + "</h1>");
   document.write("<p>" + "Age: " + myFamily[i].age + "</p>");
   document.write("<p>" + "Relationship: " + myFamily[i].relationship + "</p>");
   document.write("<p>" + "Favorite Food: " + myFamily[i].color + "</p>");
   document.write("<p>" + "Favorite Color: " + myFamily[i].food + "</p>");
}