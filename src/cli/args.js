const parseArgs = () => {
  const argsArr = process.argv.slice(2).reduce((acc, arg, i, args) => {
    if (arg.startsWith('--')) {
      return [...acc, `${arg.slice(2)} is ${args[i + 1]}`];
    }
    return acc;
  }, []);

  if (argsArr.length) {
    console.log(argsArr.join(', '));
  }
};

parseArgs();
