function result(index, type1, type2, text) {
    if (type1 < index && type2 > index) {
        alert("Your BMI is " + index + text);
    }
}

let weight = prompt("What is your weight?");
let height = prompt("What is your height?");
weight = Number(weight);
height = Number(height);
let bmi = weight / height**2;
let underweight = 18.5;
let normal = 24.9;
let overweight = 29.9;
let obese = 34.9;
let extremelyObese = 35;

result(bmi, 0, underweight, ", so you are underweight");
result(bmi, underweight, normal, ", so you have a normal weight");
result(bmi, normal, overweight, ", so you are overwight");
result(bmi, overweight, obese, ", so you are obese");
result(bmi, obese, extremelyObese, ", so you are extremely obese");