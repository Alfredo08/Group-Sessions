const names = ["Alex", "Martha", "Julie", "Alan"];
/*
const [firstName, secondName, thirdName] = names;

console.log(firstName);
console.log(secondName);
console.log(thirdName); */

const newFormat = names.map((firstName) => {
    return firstName.toUpperCase();
});

console.log(newFormat);