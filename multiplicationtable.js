const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (inputNumber) => {
  const number = parseInt(inputNumber);

  if (isNaN(number)) {
    console.log('Please enter a valid number.');
    rl.close();
  } else {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
    rl.close();
  }
});
