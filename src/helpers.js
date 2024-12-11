// Helper functions for VIKS Animation

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {Object} options - Options for threshold and offset
 * @returns {boolean}
 */
export function isInViewport(element, options = { offset: 0, thresholdTop: 0, thresholdBottom: 0 }) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  const topVisible = rect.top + options.offset >= 0 && rect.top <= windowHeight * (1 - options.thresholdTop);
  const bottomVisible = rect.bottom - options.offset <= windowHeight && rect.bottom >= windowHeight * options.thresholdBottom;

  return topVisible && bottomVisible;
}

/**
 * Add a CSS class to an element
 * @param {HTMLElement} element - The target element
 * @param {string} className - The class to add
 */
export function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}

/**
 * Remove a CSS class from an element
 * @param {HTMLElement} element - The target element
 * @param {string} className - The class to remove
 */
export function removeClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
}

/**
 * Trigger a custom event
 * @param {HTMLElement} element - The target element
 * @param {string} eventName - The name of the custom event
 * @param {Object} [detail={}] - Additional event data
 */
export function triggerEvent(element, eventName, detail = {}) {
  const event = new CustomEvent(eventName, { detail });
  element.dispatchEvent(event);
}

/**
 * Throttle function calls to improve performance
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function}
 */
export function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Debounce function calls to delay execution
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay time in milliseconds
 * @returns {Function}
 */
export function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}
