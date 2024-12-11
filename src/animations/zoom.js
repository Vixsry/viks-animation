// Function to zoom an element in
function zoomIn(element, scale = 1.5, duration = 500) {
  element.style.transition = `transform ${duration}ms ease`;
  element.style.transform = `scale(${scale})`;
}

// Function to zoom an element out
function zoomOut(element, scale = 1, duration = 500) {
  element.style.transition = `transform ${duration}ms ease`;
  element.style.transform = `scale(${scale})`;
}

// Example usage:

// Get an element by its ID and zoom it in
const myElement = document.getElementById('myElement');
zoomIn(myElement, 1.5, 1000); // Zoom in to 1.5x size over 1 second

// Zoom out the element after 3 seconds
setTimeout(() => {
  zoomOut(myElement, 1, 1000); // Zoom out back to original size over 1 second
}, 3000);
