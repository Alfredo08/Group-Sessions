
let names = ["Alex", "Julie", "Alan"];
//             0        1       2
console.log(names, names.length);
console.log(names[1]);
names[2] = "Michael";
console.log(names, names.length);

// Adds to the end of the array
names.push("Brianna");
names.push("Roger");
names.push("Martha");
console.log(names, names.length);

// Removes from the end of the array
names.pop();
console.log(names, names.length);

// Adds to the beginning of the array
names.unshift("George");
console.log(names, names.length);

// Removes from the beginning of the array
names.shift();
console.log(names, names.length);

// splice - Adds, removes or do both at any index of the array


