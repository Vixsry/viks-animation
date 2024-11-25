// src/viks.ts
interface ViksOptions {
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

class Viks {
  private options: ViksOptions;
  private observer: IntersectionObserver | null = null;

  constructor(options: ViksOptions = {}) {
    this.options = {
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
      anchorPlacement: 'top-bottom',
      ...options
    };

    this.init();
  }

  private init() {
    document.addEventListener(this.options.startEvent, () => {
      this.initializeElements();
      this.createIntersectionObserver();
    });
  }

  private initializeElements() {
    const elements = document.querySelectorAll('[data-viks]');
    elements.forEach(el => {
      this.prepareElement(el);
    });
  }

  private prepareElement(element: Element) {
    const animationType = element.getAttribute('data-viks') || '';
    const delay = parseInt(element.getAttribute('data-viks-delay') || '0');
    const duration = parseInt(element.getAttribute('data-viks-duration') || this.options.duration.toString());
    const easing = element.getAttribute('data-viks-easing') || this.options.easing;

    element.classList.add(this.options.initClassName);
    
    this.setElementStyles(element, {
      animationType,
      delay,
      duration,
      easing
    });
  }

  private setElementStyles(element: Element, config: {
    animationType: string, 
    delay: number, 
    duration: number, 
    easing: string
  }) {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .${this.options.initClassName}[data-viks="${config.animationType}"] {
        opacity: 0;
        transition: all ${config.duration}ms ${config.easing} ${config.delay}ms;
        transform: translate3d(0, 0, 0);
      }
      .${this.options.animatedClassName}[data-viks="${config.animationType}"] {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleElement);
  }

  private createIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: `${this.options.offset}px`,
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.options.animatedClassName);
          
          if (this.options.once) {
            this.observer?.unobserve(entry.target);
          }
        } else if (this.options.mirror) {
          entry.target.classList.remove(this.options.animatedClassName);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`[data-viks]:not(.${this.options.animatedClassName})`);
    elements.forEach(el => this.observer?.observe(el));
  }

  public refresh() {
    this.observer?.disconnect();
    this.initializeElements();
    this.createIntersectionObserver();
  }

  public static init(options?: ViksOptions) {
    return new Viks(options);
  }
}

export default Viks;
