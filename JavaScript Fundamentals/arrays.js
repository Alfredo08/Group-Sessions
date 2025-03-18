let names = ["Alex", "Roger", "Martha", "Julie", "Adam"];
console.log(names, names.length);
console.log(names[2]);
names[0] = "Alexander";
names.push("Brianna"); // Adds to the end of the array
names.unshift("Alfredo"); // Adds to the front of the array
// .splice() Adds or removes at a given index
console.log(names, names.length);