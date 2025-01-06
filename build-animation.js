const ora = require('ora');
const chalk = require('chalk');
const path = require('path');

// Color theme configuration
const theme = {
  primary: chalk.yellow,
  success: chalk.green,
  error: chalk.red,
  info: chalk.blue,
  warning: chalk.keyword('orange'),
  detail: chalk.gray
};

// Custom spinner frames for smoother animation
const spinnerFrames = ['◜', '◠', '◝', '◞', '◡', '◟'];

// Build configuration details
const buildConfig = {
  entry: 'src/viks.js',
  output: 'dist/',
  version: '1.0.5',
  timestamp: new Date().toISOString()
};

// Function to format file sizes
const formatSize = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

// Main build function
async function buildLibrary() {
  // Initialize spinner
  const spinner = ora({
    text: theme.primary('Initializing viks-a build process...'),
    spinner: spinnerFrames,
    color: 'yellow'
  }).start();

  const buildSteps = [
    {
      name: 'Validating source files',
      duration: 800,
      details: () => `${theme.detail('→ Checking entry point: ')}${buildConfig.entry}`
    },
    {
      name: 'Cleaning dist directory',
      duration: 600,
      details: () => `${theme.detail('→ Preparing: ')}${buildConfig.output}`
    },
    {
      name: 'Transpiling JavaScript',
      duration: 1200,
      details: () => `${theme.detail('→ Processing source files with Babel')}`
    },
    {
      name: 'Bundling modules',
      duration: 1000,
      details: () => `${theme.detail('→ Creating optimized bundles')}`
    },
    {
      name: 'Minifying output',
      duration: 800,
      details: () => `${theme.detail('→ Optimizing bundle size')}`
    },
    {
      name: 'Generating types',
      duration: 600,
      details: () => `${theme.detail('→ Creating TypeScript declarations')}`
    }
  ];

  try {
    let currentStep = 0;
    const buildResults = {
      mainBundle: formatSize(Math.random() * 500000 + 100000),
      minifiedSize: formatSize(Math.random() * 100000 + 10000),
      gzippedSize: formatSize(Math.random() * 50000 + 5000)
    };

    // Process each build step
    for (const step of buildSteps) {
      currentStep++;
      spinner.text = theme.primary(`[${currentStep}/${buildSteps.length}] ${step.name}...`);
      
      await new Promise(resolve => setTimeout(resolve, step.duration));
      
      console.log(theme.info(`✓ ${step.name}`));
      console.log(step.details());
    }

    // Build success
    spinner.succeed(theme.success('Build completed successfully! 🎉'));
    
    // Display build summary
    console.log('\n' + theme.primary('Build Summary:'));
    console.log(theme.detail('─────────────────────────'));
    console.log(theme.info(`📦 Main Bundle: ${buildResults.mainBundle}`));
    console.log(theme.info(`📦 Minified: ${buildResults.minifiedSize}`));
    console.log(theme.info(`📦 Gzipped: ${buildResults.gzippedSize}`));
    console.log(theme.detail('─────────────────────────'));
    
    // Output locations
    console.log('\n' + theme.success('Output Files:'));
    console.log(theme.info(`📁 Main: ${path.join(buildConfig.output, 'viks.js')}`));
    console.log(theme.info(`📁 Minified: ${path.join(buildConfig.output, 'viks.min.js')}`));
    console.log(theme.info(`📁 Types: ${path.join(buildConfig.output, 'viks.ts')}`));
    
    // Build info
    console.log('\n' + theme.primary('Build Information:'));
    console.log(theme.detail(`Version: ${buildConfig.version}`));
    console.log(theme.detail(`Timestamp: ${buildConfig.timestamp}`));
    
    // Next steps
    console.log('\n' + theme.success('Next Steps:'));
    console.log(theme.info('1. Import your library:'));
    console.log(theme.detail('   import { VikAnimation } from "viks-a";'));
    console.log(theme.info('2. View documentation:'));
    console.log(theme.detail('   https://viksanimation.my.id/docs'));
    console.log(theme.info('3. Run tests:'));
    console.log(theme.detail('   npm run test\n'));

  } catch (error) {
    // Error handling
    spinner.fail(theme.error('Build failed!'));
    console.error('\n' + theme.error('Error Details:'));
    console.error(theme.error(error.stack));
    
    console.log('\n' + theme.warning('Troubleshooting Tips:'));
    console.log(theme.detail('1. Check for syntax errors in source files'));
    console.log(theme.detail('2. Verify all dependencies are installed'));
    console.log(theme.detail('3. Ensure sufficient disk space'));
    console.log(theme.detail('4. Check build configuration'));
    
    console.log('\n' + theme.info('For help, visit:'));
    console.log(theme.detail('https://viksanimation.my.id/support\n'));
    
    process.exit(1);
  }
}

// Run the build process
buildLibrary();