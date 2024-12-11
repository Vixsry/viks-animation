// Function to slide an element in
function slideIn(element, direction = 'left', distance = '100%', duration = 500) {
  const originalPosition = element.style.position;
  element.style.position = 'relative';
  element.style.transition = `all ${duration}ms ease`;

  // Start with the element off-screen based on the chosen direction
  if (direction === 'left') {
    element.style.left = `-${distance}`;
  } else if (direction === 'right') {
    element.style.left = `${distance}`;
  } else if (direction === 'top') {
    element.style.top = `-${distance}`;
  } else if (direction === 'bottom') {
    element.style.top = `${distance}`;
  }

  // Force a reflow (to ensure the transition happens)
  element.offsetHeight;

  // Slide the element into view
  element.style.left = '0';
  element.style.top = '0';
}

// Function to slide an element out
function slideOut(element, direction = 'left', distance = '100%', duration = 500) {
  element.style.transition = `all ${duration}ms ease`;

  // Slide the element out of view based on the chosen direction
  if (direction === 'left') {
    element.style.left = `-${distance}`;
  } else if (direction === 'right') {
    element.style.left = `${distance}`;
  } else if (direction === 'top') {
    element.style.top = `-${distance}`;
  } else if (direction === 'bottom') {
    element.style.top = `${distance}`;
  }

  // Optionally, hide the element after sliding out
  setTimeout(() => {
    element.style.display = 'none';
  }, duration);
}

// Example usage:

// Get an element by its ID and slide it in from the left
const myElement = document.getElementById('myElement');
slideIn(myElement, 'left', '100%', 1000); // Slide in from the left over 1 second

// Slide out the element after 3 seconds
setTimeout(() => {
  slideOut(myElement, 'left', '100%', 1000); // Slide out to the left over 1 second
}, 3000);
