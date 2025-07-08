
function addTwoNumbers(num1 = 0, num2 = 0){
    if(typeof(num1) == "number" && typeof(num2) === "number"){
        let sum = num1 + num2;
        return sum;
    }
    else{
        return "You need to send a pair of numbers!";
    }
}

let total = addTwoNumbers(20, 30);
console.log(total);
let total2 = addTwoNumbers(100, 200);
console.log(total2);
let finalResult = addTwoNumbers(total, total2)
console.log(finalResult);

let message = addTwoNumbers("Hey", " there");
console.log(message);

