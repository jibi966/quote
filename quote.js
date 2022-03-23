const Quote = require("inspirational-quotes");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generate = () => {
  console.log(Quote.getRandomQuote());
};

readline.question("how many quotes?", (number) => {
  for (let i = 1; i <= number; i++) {
    generate();
  }
  readline.close();
});
