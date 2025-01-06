const ora = require('ora');
const chalk = require('chalk');

const spinner = ora(chalk.yellow('Membangun pustaka viks-a...')).start();

setTimeout(() => {
  spinner.succeed(chalk.green('Build selesai! File tersedia di folder dist.'));
}, 4000);