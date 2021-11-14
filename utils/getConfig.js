const getConfig = (args) => {
  let value = null;
  for (let i = 0; i < args.length; i++) {
    const index = process.argv.indexOf(args[i]);
    if (index !== -1) {
      value = process.argv[index + 1];
    }
  }
  return value;
};

module.exports = { getConfig };
