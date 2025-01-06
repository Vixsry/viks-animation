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
      text: colors.loading('Initializing Viks Animation installation...'),
      spinner: spinnerChars,
      color: 'blue'
    }).start();

    const steps = [
      { message: 'Checking dependencies...', duration: 1000 },
      { message: 'Downloading Viks Animation files...', duration: 1500 },
      { message: 'Extracting resources...', duration: 800 },
      { message: 'Configuring animation settings...', duration: 1200 },
      { message: 'Finalizing setup...', duration: 500 }
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
          spinner.succeed(colors.success('Installation complete! Viks Animation is ready to use.'));
          console.log('\n' + colors.info('Quick Start Guide:'));
          console.log(colors.info('- Visit our website: https://viksanimation.my.id'));
          console.log(colors.info('- Documentation: https://viksanimation.my.id/docs'));
          console.log(colors.info('- Examples: https://viksanimation.my.id/examples'));
          console.log(colors.info('- Support: https://viksanimation.my.id/support\n'));
          
          console.log(colors.success('Thank you for installing Viks Animation!'));
          console.log(colors.success('Start creating amazing animations today!\n'));
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
    console.log(colors.warning('4. Visit https://viksanimation.my.id/support for help'));
    console.log(colors.warning('5. Check system compatibility\n'));
    console.log(colors.info('Need help? Visit: https://viksanimation.my.id/contact\n'));
  });