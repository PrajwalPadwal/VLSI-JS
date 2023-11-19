const number = process.argv[2];

if (!number || isNaN(number) || number <= 0) {
  console.log("Please provide a valid positive number as an argument.");
} else {
  console.log(`Multiplication Table for ${number}:\n`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
  let num1=1;
  console.log(`Multiplication Table while ${number}:\n`);
  while(num1<=10)
  {
    console.log(`${number} x ${num1} = ${number * num1++}`);
  }
  num1=1;
  console.log(`Multiplication Table do while ${number}:\n`);
  do{
    console.log(`${number} x ${num1} = ${number * num1++}`);
  }
  while(num1<=10)
}
