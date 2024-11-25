interface VIKSOptions {
  disable?: boolean;
  startEvent?: string;
  initClassName?: string;
  animatedClassName?: string;
  disableMutationObserver?: boolean;
  debounceDelay?: number;
  throttleDelay?: number;
  offset?: number;
  delay?: number;
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
}

class VIKS {
  private static defaultOptions: VIKSOptions = {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'viks-init',
    animatedClassName: 'viks-animate',
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
  };

  private static options: VIKSOptions = { ...VIKS.defaultOptions };

  static init(customOptions: VIKSOptions = {}) {
    this.options = { ...this.defaultOptions, ...customOptions };
    
    document.addEventListener(this.options.startEvent, () => {
      this.initializeAnimations();
    });
  }

  private static initializeAnimations() {
    const elements = document.querySelectorAll('[data-viks]');
    
    elements.forEach((element) => {
      const animationType = element.getAttribute('data-viks') || '';
      const duration = parseInt(element.getAttribute('data-viks-duration') || '') || this.options.duration;
      const delay = parseInt(element.getAttribute('data-viks-delay') || '') || this.options.delay;
      
      element.classList.add(this.options.initClassName);
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(this.options.animatedClassName);
            entry.target.classList.add(`viks-${animationType}`);
            
            (entry.target as HTMLElement).style.animationDuration = `${duration}ms`;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
            (entry.target as HTMLElement).style.animationTimingFunction = this.options.easing;
            
            if (this.options.once) {
              observer.unobserve(entry.target);
            }
          } else if (this.options.mirror) {
            entry.target.classList.remove(this.options.animatedClassName);
            entry.target.classList.remove(`viks-${animationType}`);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: `-${this.options.offset}px`
      });

      observer.observe(element);
    });
  }

  static refresh() {
    this.initializeAnimations();
  }
}

export default VIKS;
