let names = ["Roger", "Alan", "Julie", "Alex", "Martha"];

// console.log(names);
// console.log(names[4]);

names.push("Brianna");
console.log("Length:", names.length);
console.log(names);
names.pop();
names.pop();
console.log("Length:", names.length);
console.log(names);

names.unshift("Mike");
console.log("Length:", names.length);
console.log(names);
names.shift();
names.shift();
console.log("Length:", names.length);
console.log(names);

// .splice(index, how many you want to remove, New values to add);
