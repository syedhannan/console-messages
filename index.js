const chalk = require("chalk");

const success = (text) => {
  if (text === "") return;
  console.log(chalk.green(text));
};
const error = (text) => {
  if (text === "") return;
  console.log(chalk.redBright(text));
};

module.exports = { success, error };
