var names = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(names.sort());
// Intermediate 1.1 END

var fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

var animals = ["dog", "horse", "monkey"];
console.log(animals.sort());
animals.unshift("cat");
console.log(animals);
// Intermediate 1.2 END 


var fruitString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(fruitString);
var tempFruit = new Array();
tempFruit = fruitString.split("/");
console.log(tempFruit.join("\n"));
document.write(tempFruit.join("<br>"));
// Intermediate 1.3 END 