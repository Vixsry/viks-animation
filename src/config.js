// Configuration for VIKS Animation

const config = {
  appName: "VIKS Animation",
  version: "1.1.3",

  // Animation Settings
  animationDuration: 500, // Duration in milliseconds
  animationEasing: "ease-out", // Easing style for animations

  // Scroll Thresholds
  scrollOffset: 100, // Offset in pixels for triggering animations
  thresholdTop: 0.2, // Top threshold as a fraction of viewport height
  thresholdBottom: 0.8, // Bottom threshold as a fraction of viewport height

  // Default Class Names
  activeClass: "active", // Class applied when an element becomes active
  hiddenClass: "hidden", // Class applied to hidden elements

  // Debug Mode
  debug: false, // Set to true for logging debug information in the console
};

export default config;
