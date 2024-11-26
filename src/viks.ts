// src/viks.ts

interface VIKSOptions {
  disable: boolean;
  startEvent: string;
  initClassName: string;
  animatedClassName: string;
  disableMutationObserver: boolean;
  debounceDelay: number;
  throttleDelay: number;
  offset: number;
  delay: number;
  duration: number;
  easing: string;
  once: boolean;
  mirror: boolean;
  anchorPlacement: string;
}

interface VIKSInstance {
  refresh: () => void;
  init: (options?: Partial<VIKSOptions>) => void;
}

const defaultOptions: VIKSOptions = {
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

class VIKS implements VIKSInstance {
  private options: VIKSOptions;
  private initialized: boolean = false;
  private elements: HTMLElement[] = [];
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.options = { ...defaultOptions };
  }

  public init(options: Partial<VIKSOptions> = {}): void {
    if (this.initialized) return;
    
    this.options = { ...defaultOptions, ...options };
    this.setupObserver();
    this.refresh();
    
    document.addEventListener(this.options.startEvent, () => {
      this.initialized = true;
    });
  }

  private setupObserver(): void {
    if (this.options.disableMutationObserver) return;

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          this.animate(element);
          
          if (this.options.once) {
            this.observer?.unobserve(element);
          }
        } else if (this.options.mirror) {
          const element = entry.target as HTMLElement;
          this.removeAnimation(element);
        }
      });
    }, {
      threshold: 0,
      rootMargin: `${this.options.offset}px`
    });
  }

  private animate(element: HTMLElement): void {
    const animation = element.getAttribute('data-viks');
    const duration = element.getAttribute('data-viks-duration') || this.options.duration;
    const delay = element.getAttribute('data-viks-delay') || this.options.delay;
    const easing = element.getAttribute('data-viks-easing') || this.options.easing;

    element.style.animationDuration = `${duration}ms`;
    element.style.animationDelay = `${delay}ms`;
    element.style.animationTimingFunction = easing;
    element.classList.add(this.options.animatedClassName, animation!);
  }

  private removeAnimation(element: HTMLElement): void {
    const animation = element.getAttribute('data-viks');
    element.classList.remove(this.options.animatedClassName, animation!);
  }

  public refresh(): void {
    this.elements = Array.from(document.querySelectorAll('[data-viks]'));
    this.elements.forEach(element => {
      this.observer?.observe(element);
    });
  }
}

export default new VIKS();
