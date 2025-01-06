const ora = require('ora');
const chalk = require('chalk');

// Color and style configuration
const colors = {
  loading: chalk.blue,
  success: chalk.green,
  error: chalk.red,
  warning: chalk.yellow,
  info: chalk.cyan
};

// Custom spinner characters for smoother animation
const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

// Function to simulate the installation process
function installPackage() {
  return new Promise((resolve, reject) => {
    const spinner = ora({
      text: colors.loading('Initializing viks-a library installation...'),
      spinner: spinnerChars,
      color: 'blue'
    }).start();

    const steps = [
      { message: 'Checking dependencies...', duration: 1000 },
      { message: 'Downloading package files...', duration: 1500 },
      { message: 'Extracting files...', duration: 800 },
      { message: 'Configuring settings...', duration: 1200 },
      { message: 'Finalizing installation...', duration: 500 }
    ];

    let currentStep = 0;

    const updateSpinner = () => {
      if (currentStep < steps.length) {
        spinner.text = colors.loading(steps[currentStep].message);
        
        setTimeout(() => {
          spinner.info(colors.info(`✓ ${steps[currentStep].message}`));
          currentStep++;
          updateSpinner();
        }, steps[currentStep].duration);
      } else {
        // Simulate potential errors (10% chance)
        if (Math.random() < 0.1) {
          spinner.fail(colors.error('Installation failed: Connection timeout'));
          reject(new Error('Installation failed: Connection timeout'));
        } else {
          spinner.succeed(colors.success('Installation complete! viks-a is ready to use.'));
          console.log('\n' + colors.info('Quick Start Guide:'));
          console.log(colors.info('- Import viks-a using: import viks from "viks-a"'));
          console.log(colors.info('- View documentation at: https://docs.viks-a.dev'));
          console.log(colors.info('- Join our Discord community: https://discord.gg/viks-a'));
          console.log(colors.info('- Report issues: https://github.com/viks-a/issues\n'));
          resolve();
        }
      }
    };

    updateSpinner();
  });
}

// Error handling with detailed troubleshooting
installPackage()
  .catch(error => {
    console.log(colors.error('\nError Details:'));
    console.log(colors.error(error.stack));
    console.log(colors.warning('\nTroubleshooting Steps:'));
    console.log(colors.warning('1. Check your internet connection'));
    console.log(colors.warning('2. Clear npm cache: npm cache clean --force'));
    console.log(colors.warning('3. Try reinstalling the package'));
    console.log(colors.warning('4. Check system compatibility'));
    console.log(colors.warning('5. Verify Node.js version requirements\n'));
    console.log(colors.info('For additional support, visit: https://support.viks-a.dev\n'));
  });