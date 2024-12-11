// Function to fade an element in
function fadeIn(element, duration = 500) {
  element.style.opacity = 0;
  element.style.display = 'block';
  
  let last = +new Date();
  const tick = function() {
    element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity < 1) {
      requestAnimationFrame(tick);
    }
  };

  tick();
}

// Function to fade an element out
function fadeOut(element, duration = 500) {
  element.style.opacity = 1;

  let last = +new Date();
  const tick = function() {
    element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
    last = +new Date();

    if (+element.style.opacity > 0) {
      requestAnimationFrame(tick);
    } else {
      element.style.display = 'none';
    }
  };

  tick();
}

// Example usage:

// Get an element by its ID and fade it in
const myElement = document.getElementById('myElement');
fadeIn(myElement, 1000); // fade-in over 1 second

// Fade out the element after 3 seconds
setTimeout(() => {
  fadeOut(myElement, 1000); // fade-out over 1 second
}, 3000);
