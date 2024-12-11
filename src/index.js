// Import or include the VIKS Animation library if using a bundler or add it directly in the HTML file
document.addEventListener("DOMContentLoaded", () => {
  // Initialize VIKS Animation
  VIKS.init({
    thresholdTop: 0.2,          // Distance from the top of the screen before the animation starts
    thresholdBottom: 0.2,       // Distance from the bottom of the screen before the animation starts
    disable: false,             // Disable animations if needed
    offset: 100,                // Offset to detect elements
    delay: 100,                 // Delay before the animation starts (in ms)
    duration: 600,              // Animation duration (in ms)
    easing: "ease-out",         // Animation easing
    once: true,                 // Run the animation only once
    mirror: false,              // Run animation again when the element exits the viewport
  });

  console.log("VIKS Animation initialized!");
  
  // Add event listeners if required
  document.querySelectorAll("[data-viks]").forEach((element) => {
    element.addEventListener("viksAnimated", (e) => {
      console.log(`Element animated: ${e.detail.animation}`);
    });
  });
});
