// MIT License
//Copyright (c) 27 Nov 2024 Vixsry

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

// VIKS ANIMATION LIBRARY
const VIKS = {
  init() {
    this.elements = document.querySelectorAll('[data-viks]');
    this.windowHeight = window.innerHeight;
    this.config = {
      thresholdTop: 0.1,
      thresholdBottom: 0.1
    };

    this.setupEventListeners();
    this.initObserver();
  },
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
  initObserver() {
    const options = {
      root: null,
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        const animateTop = element.getAttribute('data-viks-animation-top') !== 'off';
        const animateBottom = element.getAttribute('data-viks-animation-bottom') !== 'off';
        if (entry.isIntersecting) {
          this.applyAnimation(element);
        } else {
          const boundingRect = element.getBoundingClientRect();
          const scrollingUp = boundingRect.top > this.windowHeight;
          if ((scrollingUp && animateTop) || (!scrollingUp && animateBottom)) {
            this.removeAnimation(element);
          }
        }
      });
    }, options);
    this.elements.forEach(element => observer.observe(element));
  },
  applyAnimation(element) {
    const delay = this.getDelay(element);
    const duration = this.getDuration(element);
    const easing = this.getEasing(element);
    element.style.transitionDuration = `${duration}ms`;
    element.style.transitionDelay = `${delay}ms`;
    element.style.transitionTimingFunction = easing;
    element.classList.add('viks-animate');
  },
  removeAnimation(element) {
    element.classList.remove('viks-animate');
  },
  getDelay(element) {
    return element.getAttribute('data-viks-delay') || 
           this.getAttributeFromString(element.getAttribute('data-viks'), 'delay-') || 
           0;
  },

  getDuration(element) {
    return element.getAttribute('data-viks-duration') || 
           this.getAttributeFromString(element.getAttribute('data-viks'), 'duration-') || 
           1000;
  },
  getEasing(element) {
    return element.getAttribute('data-viks-easing') || 
           this.getAttributeFromString(element.getAttribute('data-viks'), 'easing-') || 
           'ease';
  },
  getAttributeFromString(str, prefix) {
    if (!str) return null;
    const regex = new RegExp(`${prefix}(\\d+)`);
    const match = str.match(regex);
    return match ? match[1] : null;
  }
};
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

VIKS.init();
