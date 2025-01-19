<h1 align="center">VIKS ANIMATION</h1>

<div align="center">
  <img src="assets/viks-swip-logo.png" alt="VIKS SWIP Logo" width="200"/>

  <p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Library-aqua?style=for-the-badge&logoColor=black" alt="JavaScript Library Badge"/>
</p>
</div>

<div align="center">

<a href="https://github.com/Vixsry/viks-animation/blob/main/LICENSE" target="_blank">
  <img src="https://img.shields.io/badge/LICENSE-MIT-black?style=flat-square" alt="License Badge">
</a>
<a href="https://example.com/dashboard" target="_blank">
  <img src="https://img.shields.io/badge/DOWNLOAD-1K%2FMONTH-aqua?style=flat-square" alt="Downloads Badge">
</a>

</div>


<div align="center">
  <strong>Lightweight JavaScript library for smooth and engaging scroll animations</strong>
</div>

<div align="center">
  <sub>Created with ❤️ by
  <a href="https://github.com/Vixsry">Vixsry</a>
</div>

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h1 align="center">
  <strong>INTRODUCTION</strong>
</h1>

## What is VIKS Animation?

VIKS Animation is a modern animation library designed to make websites and applications more dynamic with minimal effort. It is beginner-friendly and suitable for professionals, offering both basic and advanced configuration options to cater to diverse animation needs.

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

## ✨ Features

🎯 **Core Features**
- Smooth Scroll Animation
- Number Animation
- 3D Transformations
- Multiple Easing Functions
- Cross-Browser Support

🛠️ **Technical Highlights**
- Zero Dependencies
- Lightweight (~12KB gzipped)
- High Performance
- Mobile-First Design
- TypeScript Support

🎨 **Animation Types**
- Fade Effects
- Slide Animations
- Scale Transformations
- 3D Rotations
- Custom Animations

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h2 align="center">SOCIAL MEDIA</h2>
<div align="center">
  
[![Email](https://img.shields.io/badge/Email-aqua?style=for-the-badge&logo=gmail&logoColor=black)](mailto:viksry@proton.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=aqua)](https://www.linkedin.com/in/viksry)
[![Instagram](https://img.shields.io/badge/Instagram-aqua?style=for-the-badge&logo=instagram&logoColor=black)](https://www.instagram.com/viksry12)
[![TikTok](https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=aqua)](https://www.tiktok.com/@viksry)
[![Threads](https://img.shields.io/badge/Threads-aqua?style=for-the-badge&logo=threads&logoColor=black)](https://www.threads.net/@viksry12)
[![Facebook](https://img.shields.io/badge/Facebook-black?style=for-the-badge&logo=facebook&logoColor=aqua)](https://www.facebook.com/share/19aKzAtBeZ/)

</div>

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h2 align="center">AVAILABLE ANIMATIONS</h2>

<div align="center">

[![Fade](https://img.shields.io/badge/Fade-Animations-aqua?style=flat-square&logoColor=black)](#fade-animations)
[![Flip](https://img.shields.io/badge/Flip-Animations-black?style=flat-square&logoColor=aqua)](#flip-animations)
[![Slide](https://img.shields.io/badge/Slide-Animations-aqua?style=flat-square&logoColor=black)](#slide-animations)
[![Zoom](https://img.shields.io/badge/Zoom-Animations-black?style=flat-square&logoColor=aqua)](#zoom-animations)
[![Shake](https://img.shields.io/badge/Shake-Animations-black?style=flat-square&logoColor=aqua)](#Shake-Animation)
[![Spin](https://img.shields.io/badge/Spin-Animations-aqua?style=flat-square&logoColor=black)](#Spin-Animation)
[![Bounce](https://img.shields.io/badge/Bounce-Animations-aqua?style=flat-square&logoColor=black)](#Bounce-Animation)

</div>

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h2 align="center">INSTALLATION</h2>

<div align="center">

[![NPM](https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=aqua)](#npm)
[![Yarn](https://img.shields.io/badge/Yarn-aqua?style=for-the-badge&logo=yarn&logoColor=black)](#yarn)
[![CDN](https://img.shields.io/badge/CDN-aqua?style=for-the-badge&logo=jsdelivr&logoColor=black)](#cdn)

</div>

Get started by including production-ready Viks Animation CSS and JavaScript via CDN without any build steps required.

<div><strong>1.Create a new file index.html in the root of your project</strong></div>

## EXAMPLE
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Viks Animation</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

<div><strong>2.Include Viks Animation CSS and JS</strong></div>

Place a <link> tag inside the <head> for our CSS, and a <script> tag for our JavaScript bundle (including Popper to position the dropdown, popper, and tooltip) before the closing </body>.

## EXAMPLE

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Viks Animatiom demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/viks-a@latest/dist/viks.min.css">
  </head>
  <body>
    <h1 data-viks="fade-up">Hello, world!</h1>
    <h2 data-viks="fade-down">Hello, world!</h2>
    <h3 data-viks="fade-right">Hello, world!</h3>
    <h4 data-viks="fade-left">Hello, world!</h4>
    <h5 data-viks="zoom-out">Hello, world!</h5>
    <h6 data-viks="zoom-in">Hello, world!</h6>
    <script src="https://cdn.jsdelivr.net/npm/viks-a@latest/dist/viks.min.js"></script>
  </body>
</html>
```

<div><strong>3.Open the page in your preferred browser to view your Viks Animation page</strong></div>

Now you can start building with Viks Animation by creating your own Animations , adding dozens of animations , and taking advantage of our official examples .

### CDN
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/viks-a@latest/dist/viks.min.css">
```

```html
<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/viks-a@latest/dist/viks.min.js"></script>
```

<div><strong>4.Install via package manager</strong></div>
Install the Viks Animation source Sass and JavaScript files via npm, YARN, or Composer.

### NPM
```bash
npm install viks-a --save
```

### YARN
```bash
yarn add viks-a
```

![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h2 align="center">MANUAL INSTALLATION</h2>

1. Download the JavaScript and CSS files:
   - `viks.css`
   - `viks.js`

2. Add them to your HTML as shown below:
```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/viks.css">

<!-- JAVA SCRIPT -->
<script src="path/to/viks.js"></script>
```
![Divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png)

<h2 align="center">INITIALIZATION</h2>

```javascript
// VIKS SCROLL ANIMATION
VIKS.init()

// VIKS NUMBER ANIMATION
VIKSNumber.init();

// VIKS 3D ANIMATION
const viks3D = new Viks3D(); 
viks3D.addShadow();
viks3D.addParallax(20);
```

```javascript
VIKS.init({
  thresholdTop: 0.2, // Set threshold when element appears at the top of the viewport
  thresholdBottom: 0.2, // Set threshold when element appears at the bottom of the viewport
  disable: false, // Disable animation if set to true
  startEvent: 'load', // Wait until the page is fully loaded
  animatedClassName: 'viks-animate', // Add animation class to animated elements
  initClassName: 'viks-init', // Class added to initialized elements
  useClassNames: false, // Enable or disable the use of CSS classes
  throttleDelay: 100, // Set delay time for throttle on scroll
  debounceDelay: 50, // Set delay time for debounce on resize
  offset: 120, // Add offset distance from the viewport
  delay: 0, // Delay animation after element appears
  duration: 800, // Animation duration
  easing: 'ease-in-out', // Default easing function
  once: false, // Animation runs only once
  mirror: true, // Display animation in both directions (mirroring)
  animateTop: false,  // Turn off all scroll-up animations
  animateBottom: true // Enable scroll-down animations
});
```

---

<h2 align="center">USAGE</h2>

---

<p align="center">ON SCROLL ANIMATION</p>

```html
<!-- Basic Usage
=====================-->
<div data-viks="fade-up">
  VIKS CONTENT
</div>
```

```html
<!-- Animation Based on Screen Size
================================-->
<div data-viks="fade-up"
     data-viks-desktop="zoom-in"
     data-viks-tablet="fade-left"
     data-viks-mobile="fade-down">
    VIKS CONTENT
</div>
```


```html
<!-- Control Delay 1
=====================-->
<div data-viks="fade-up" data-viks-delay="1000">
  VIKS CONTENT
</div>
```

```html
<!-- Control Delay 2
=====================-->
<div data-viks="fade-up delay-1000">
  VIKS CONTENT
</div>
```

```html
<!-- Control Duration 1
======================-->
<div data-viks="fade-up" data-viks-duration="2000">
  2 seconds duration
</div>
```

```html
<!-- Control Duration 2
======================-->
<div data-viks="fade-up duration-2000">
  2 seconds duration
</div>
```

```html
<!-- DISABLE SCROLL UP ANIMATION
=====================================================-->
<div data-viks="fade-up" data-viks-animation-top="off">
  No animation on upscroll
</div>

<!-- DISABLE SCROLL DOWN ANIMATION
===========================================================-->
<div data-viks="fade-up" data-viks-animation-bottom="off">
  No animation on downscroll
</div>
```

```html
<!-- COMBINE MULTIPLE ATTRIBUTES 
================================================================-->
<div data-viks="fade-up delay-1000 duration-2000 easing-ease-out">
  Multiple attributes combination
</div>
```

```html
<!-- Easing
============-->
<div data-viks="fade-up" data-viks-easing="ease-out">
  Ease-out easing
</div>
```

<details>
  <summary>Available Easing Functions</summary>

  - `linear`
  - `ease`
  - `ease-in`
  - `ease-out`
  - `ease-in-out`
  - `ease-in-back`
  - `ease-out-back`
  - `ease-in-out-back`
  - `ease-in-sine`
  - `ease-out-sine`
  - `ease-in-out-sine`
  - `ease-in-quad`
  - `ease-out-quad`
  - `ease-in-out-quad`
  - `ease-in-cubic`
  - `ease-out-cubic`
  - `ease-in-out-cubic`
  - `ease-in-quart`
  - `ease-out-quart`
  - `ease-in-out-quart`
  - `ease-elastic`
  - `ease-bounce`
  - `ease-in-expo`
  - `ease-out-expo`
  - `ease-in-out-expo`
  - `ease-in-circ`
  - `ease-out-circ`
  - `ease-in-out-circ`

</details>

___

<p align="center">3D ANIMATION</p>

---

```html
<!-- USAGE OF 3D ANIMATION
===============================-->
<div data-viks="3D">
    <h2>Examples</h2>
    <p>Examples</p>
</div>
```

---

<p align="center">NUMBER ANIMATION</p>

---

```html
<!-- USAGE OF NUMBER ANIMATION
===========================================================-->
<span data-viks="type-nbr duration-1000 fps-120">1000</span>
<span data-viks="type-nbr">1000</span>
```
or
```html
<!-- USAGE COMBINATION OF FPS, DURATION, AND ANIMATION CONTROL
===========================================================-->
<span data-viks="type-nbr duration-2000 fps-60 bottom-off">2000</span>
```

### EVENT CALLBACK

```javascript
// Callbacks for various events
function onStart(element) {
    console.log('Animation started:', element);
}

function onComplete(element) {
    console.log('Animation completed:', element);
}

function onReset(element) {
    console.log('Animation reset:', element);
}

// Listeners for VIKS built-in events
document.addEventListener('viksAnimated', function(event) {
    const element = event.target; // Element being animated
    onStart(element);
    onComplete(element);
});

document.addEventListener('viksHidden', function(event) {
    const element = event.target; // Element whose animation was removed
    onReset(element);
});
```

---

### Bounce Animation
- `bounce`
- `bounce-up`
- `bounce-down`
- `bounce-left`
- `bounce-right`


### Fade Animations
- `fade`
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `fade-up-right`
- `fade-up-left`
- `fade-down-right`
- `fade-down-left`

### Flip Animations
- `flip-up`
- `flip-down`
- `flip-left`
- `flip-right`

### Slide Animations
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`

## Shake Animation
- `shake`
- `shake-horizontal`
- `shake-vertical`

## Spin Animation
- `spin`
- `spin-bounce`
- `spin-slow`
- `spin-fast`
- `spin-reverse`

### Zoom Animations
- `zoom-in`
- `zoom-in-up`
- `zoom-in-down`
- `zoom-in-left`
- `zoom-in-right`
- `zoom-out`
- `zoom-out-up`
- `zoom-out-down`
- `zoom-out-left`
- `zoom-out-right`


<div align="center">

<h2 align="center">SUPPORT MY WORK</h2>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Buy%20Me%20A%20Coffee&fontSize=60&fontAlignY=35&animation=twinkling&fontColor=gradient" />

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=white&color=aqua&width=435&lines=Support+my+work;Buy+Me+Golda+Coffee!+.☕)](https://ko-fi.com/viksry)

<p align="center">Say Thank You by Buying Someone a Coffee!.</p>

<a href="https://ko-fi.com/viksry">
  <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" width="200">
</a>

Your support helps me to continue creating and maintaining projects! ✨

</div>


<h2 align="center">BROWSER SUPPORT</h2>

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-Latest-aqua?style=flat-square&logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-Latest-aqua?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-Latest-aqua?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-Latest-aqua?style=flat-square&logo=microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-Latest-aqua?style=flat-square&logo=opera&logoColor=white)

</div>

<h2 align="center">DEMO</h2>

See the full demo in the [Website](https://viksanimation.my.id) file.

## 📝 License
This project is [MIT](./LICENSE) licensed.

---

<div align="center">

[![Website Soon](https://img.shields.io/badge/Portfolio-aqua?style=for-the-badge&logo=github&logoColor=black)](-#)
[![Star](https://img.shields.io/badge/Star-black?style=for-the-badge&logo=github&logoColor=aqua)](https://github.com/Vixsry/viks-animation)

<h3><span style="color: aqua">✨ "Bringing Life to Web Elements" ✨</span></h3>

</div>

---

<div align="center">

Made with ❤️ by [Vixsry](https://github.com/Vixsry)

</div>

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)



<div align="center">

# 🌊 VIKS Animation Library 🌊

[![Version](https://img.shields.io/badge/version-1.0.0-00ffff.svg?style=for-the-badge)](https://github.com/yourusername/viks)
[![License](https://img.shields.io/badge/license-MIT-00ffff.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/badge/stars-★★★★★-00ffff.svg?style=for-the-badge)](https://github.com/yourusername/viks)
[![Downloads](https://img.shields.io/badge/downloads-10k/month-00ffff.svg?style=for-the-badge)](https://github.com/yourusername/viks)

<p align="center">
  <strong>🚀 Professional Animation Library for Modern Web Applications 🚀</strong>
</p>

[Live Demo](https://yourusername.github.io/viks) • [Documentation](https://yourusername.github.io/viks/docs) • [Examples](https://yourusername.github.io/viks/examples)



</div>



## 📦 Installation

```bash
# Using npm
npm install viks-animation

# Using yarn
yarn add viks-animation

# Using pnpm
pnpm add viks-animation
```

## 🚀 Quick Start

### Basic Usage

```html
<!-- Add VIKS to your project -->
<script src="viks.min.js"></script>

<!-- Add animation attributes to elements -->
<div data-viks="fade-up">
  Animated content
</div>
```

### JavaScript Initialization

```javascript
// Initialize VIKS
VIKS.init({
  duration: 1000,
  offset: 120,
  easing: 'ease-in-out'
});

// Initialize Smooth Scroll
VIKSSmooth.init({
  duration: 800,
  easing: 'easeOutQuint'
});

// Initialize Number Animation
VIKSNumber.init();

// Initialize 3D Effects
new Viks3D();
```

## 🎮 Animation Types

### Fade Animations
```html
<div data-viks="fade-up">Fade Up</div>
<div data-viks="fade-down">Fade Down</div>
<div data-viks="fade-left">Fade Left</div>
<div data-viks="fade-right">Fade Right</div>
```

### 3D Animations
```html
<div data-viks="3D">
  <h2>3D Card</h2>
  <p>Hover to see the effect</p>
</div>
```

### Number Animation
```html
<span data-viks="type-nbr" data-value="1000">0</span>
```

## ⚙️ Configuration

### Global Settings

```javascript
VIKS.init({
  // Animation settings
  duration: 1000,
  offset: 120,
  easing: 'ease-in-out',
  
  // Animation control
  once: false,
  mirror: true,
  
  // Special settings
  disable: false,
  debounceDelay: 50,
  throttleDelay: 99
});
```

### Smooth Scroll Settings

```javascript
VIKSSmooth.init({
  duration: 800,
  offset: -50,
  easing: 'easeOutQuint',
  updateHistory: true,
  smoothWheel: true,
  smoothTouch: true
});
```

## 🎨 Custom Easing Functions

```javascript
// Add custom easing
VIKS.easingMap['custom-bounce'] = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';

// Use custom easing
<div data-viks="custom-bounce">Custom Animation</div>
```

## 🌐 Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome  | 49+              |
| Firefox | 52+              |
| Safari  | 10+              |
| Edge    | 14+              |
| Opera   | 36+              |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by modern animation libraries
- Built with love for the web community

<div align="center">

## 💖 Support

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Development-00ffff.svg?style=for-the-badge)](https://ko-fi.com/yourusername)
[![Patreon](https://img.shields.io/badge/Patreon-Become%20a%20Patron-00ffff.svg?style=for-the-badge)](https://patreon.com/yourusername)

</div>

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</div>

