let year = prompt("what year are you interested in?");
year = Number(year);

let firstDivision = year % 4;
let secondDivision = year % 100;
let thirdDivision = year % 400;

if (firstDivision == 0) {
    if (secondDivision == 0 && thirdDivision == 0) {
        alert("Year leap");
    } else {
        alert("Not year leap");
    }
} else {
    alert("Not year leap");
}