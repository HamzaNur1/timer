const stdOut = process.stdout;
const arg = process.argv.slice(2);

const timer = function(number) {
  if (isNaN(number) || number <= 0) {
    return;
  }
  setTimeout(() => {
    stdOut.write("\x07");
  }, number * 1000);
};

for (let i = 0; i < arg.length; i++) {
  timer(arg[i]);
}