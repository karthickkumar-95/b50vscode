// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

let userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let a = userInput[0];
  // for (let i=0; i< a.length; i++){
  a = a.split("");
  a = a.join(",");

  console.log(a);
});
