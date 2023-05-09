function random(names) {
    let length = names.length - 1;
    let select = Math.floor(Math.random() * length);
    let name = names[select];
    return name + " is going to buy lunch today.";
}

let names = ["Kamila Abdullaeva", "Adiletali Abikenov", "Danial Askarov", "Syrymzhan Aueskhan", "Zhasmin Kadyr", "Vladislav Khegay", "Nazerke Kydyrgozha", "Nurbol Meirambai",
"Nazar Mukhtaruly", "Abduakhad Myrzakhanov", "Alinur Nurpeiis", "Dias Omarkhan", "Adil Rakhimzhanov", "Tamerlan Tastanbek", "Aruzhan Turlybai", "Dias Yeskendirov",
"Adil Zhalgas", "Symbat Zhanassay"];

let answer = random(names);
document.getElementById("answer").innerHTML = answer;