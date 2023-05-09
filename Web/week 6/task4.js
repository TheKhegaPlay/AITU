let x = 365, y = 52, z = 12;
let age = prompt("How old are you?");
age = Number(age);
let yourDays = x*age;
let yourWeeks = y*age;
let yourMonths = z*age;

let ninetyYearsDays = x*90;
let ninetyYearsWeeks = y*90;
let ninetyYearsMonths = z*90;

let leftDays = ninetyYearsDays - yourDays;
let leftWeeks = ninetyYearsWeeks - yourWeeks;
let leftMonths = ninetyYearsMonths - yourMonths;

alert("You have " + leftDays + " days " + leftMonths + " months " + leftWeeks + " weeks left" );