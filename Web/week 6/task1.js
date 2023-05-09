let name = prompt("What is your name?");
name = name.toLowerCase();
let firstLater = name[0].toUpperCase();
name = name.slice(1);
result = firstLater.concat(name);
alert("Hello " + result);