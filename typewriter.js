let sentence = "hello there from lighthouse labs";
let newSentence = sentence + "\n";
let counter = 0;
for (const char of newSentence) {
  setTimeout (() => {
  process.stdout.write(char);
  }, counter += 50)
}