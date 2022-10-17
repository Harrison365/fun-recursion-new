function printSequence(n) {
  if (n === 1) {
    console.log(`The current value in the sequence is ${n}! End of sequence`);
    return;
  }
  console.log(`The current value in the sequence is ${n}`);

  if (n % 2 === 0) printSequence(n / 2);
  else printSequence(3 * n + 1);
}

printSequence(8);
