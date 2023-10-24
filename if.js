// < ------------------- Alternatives of If and else --------->//
let age = 5;
let gender = "male";
let finalResult;
if (age <= 5) {
  finalResult = "100%";
} else if (gender === "Female" || age <= 8) {
  finalResult = " 50%";
} else if (age >= 65) {
  finalResult = "30%";
} else {
  finalResult = "0";
}

console.log(`Your final discount is ${finalResult}`);
