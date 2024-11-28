<h1 align="center"><span style="color: aqua">VIKS</span> Animation Library</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Library-aqua?style=for-the-badge&logoColor=black" alt="JavaScript Library Badge"/>
</p>

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.0.0-aqua?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)
![Downloads](https://img.shields.io/badge/downloads-1k%2Fmonth-aqua?style=flat-square)

</div>

<div align="center">
  <strong>A lightweight JavaScript library for smooth and engaging scroll animations</strong>
</div>

<div align="center">
  <sub>Created with ❤️ by
  <a href="https://github.com/Vixsry">Vixsry</a>
</div>

---
## Our Story:
Inspired by the brilliance of AOS.js, I embarked on a journey to create a simpler, more streamlined version of animation code. What started as a personal exploration turned into a project I’m proud to share. There’s no intention to compete, only to create something meaningful for my own use. But if you find it valuable, feel free to make it yours and use it as you see fit.

---
## 📱 Connect With Developer
<div align="center">
  
[![Email](https://img.shields.io/badge/Email-aqua?style=for-the-badge&logo=gmail&logoColor=black)](mailto:viksry@proton.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=aqua)](https://www.linkedin.com/in/viksry)
[![Instagram](https://img.shields.io/badge/Instagram-aqua?style=for-the-badge&logo=instagram&logoColor=black)](https://www.instagram.com/viksry12)
[![TikTok](https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=aqua)](https://www.tiktok.com/@viksry)
[![Threads](https://img.shields.io/badge/Threads-aqua?style=for-the-badge&logo=threads&logoColor=black)](https://www.threads.net/@viksry12)
[![Facebook](https://img.shields.io/badge/Facebook-black?style=for-the-badge&logo=facebook&logoColor=aqua)](https://www.facebook.com/share/19aKzAtBeZ/)

</div>

---
## Overview
This project is a modification of [AOS.js](https://github.com/michalsnik/aos) (Animate On Scroll) by Michał Sajnóg, which is used for scroll animations on websites. It provides simple and customizable animations triggered when an element enters the viewport.

## MODIFICATION
This project is a modification of [AOS.js](https://github.com/michalsnik/aos) under the MIT license. The original license for AOS.js is as follows:

---

## 📋 Table of Contents
<div align="center">

[![Installation](https://img.shields.io/badge/Installation-aqua?style=for-the-badge&logoColor=black)](#installation)
[![Usage](https://img.shields.io/badge/Usage-black?style=for-the-badge&logoColor=aqua)](#basic-usage)
[![Animations](https://img.shields.io/badge/Animations-aqua?style=for-the-badge&logoColor=black)](#available-animations)
[![Config](https://img.shields.io/badge/Configuration-black?style=for-the-badge&logoColor=aqua)](#configuration)

</div>

[Previous header content remains the same until the Installation section]

## 🚀 Installation

<div align="center">

[![NPM](https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=aqua)](#npm)
[![Yarn](https://img.shields.io/badge/Yarn-aqua?style=for-the-badge&logo=yarn&logoColor=black)](#yarn)
[![Bower](https://img.shields.io/badge/Bower-black?style=for-the-badge&logo=bower&logoColor=aqua)](#bower)
[![CDN](https://img.shields.io/badge/CDN-aqua?style=for-the-badge&logo=jsdelivr&logoColor=black)](#cdn)

</div>

### Using Package Managers

#### NPM
```bash
npm install viks --save
```

#### Yarn
```bash
yarn add viks
```

#### Bower
```bash
bower install viks --save
```

### CDN Sources

Add to your HTML:

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/gh/Vixsry/viks-animation/src/css/viks-animation.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/Vixsry/viks-animation/src/js/main.js"></script>
```

### Manual Installation

1. Download the CSS and JavaScript files:
   - `viks-animation.css`
   - `viks-animation.js`

2. Include the files in your HTML:
```html
<link rel="stylesheet" href="path/to/viks-animation.css">
<script src="path/to/viks-animation.js"></script>
```
[Rest of the README content remains the same]
```

## 🎯 Basic Usage

```html
<div data-viks="fade-up">
  Your content here
</div>
```

## ✨ Available Animations

<div align="center">

[![Fade](https://img.shields.io/badge/Fade-Animations-aqua?style=flat-square&logoColor=black)](#fade-animations)
[![Flip](https://img.shields.io/badge/Flip-Animations-black?style=flat-square&logoColor=aqua)](#flip-animations)
[![Slide](https://img.shields.io/badge/Slide-Animations-aqua?style=flat-square&logoColor=black)](#slide-animations)
[![Zoom](https://img.shields.io/badge/Zoom-Animations-black?style=flat-square&logoColor=aqua)](#zoom-animations)

</div>

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

## ⚙️ Configuration

### Delay
```html
<div data-viks="fade-up" data-viks-delay="1000">
  1 second delay
</div>
```
or
```html
<div data-viks="fade-up delay-1000">
  1 second delay
</div>
```

### Duration
```html
<div data-viks="fade-up" data-viks-duration="2000">
  2 seconds duration
</div>
```
or
```html
<div data-viks="fade-up duration-2000">
  2 seconds duration
</div>
```

### Easing Functions
```html
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

</details>

## 🔄 Advanced Usage

### Combining Multiple Attributes
```html
<div data-viks="fade-up delay-1000 duration-2000 easing-ease-out">
  Multiple attributes combination
</div>
```

### Control Scroll Animations
```html
<!-- Disable animations when scrolling up -->
<div data-viks="fade-up" data-viks-animation-top="off">
  No animation on upscroll
</div>

<!-- Disable animations when scrolling down -->
<div data-viks="fade-up" data-viks-animation-bottom="off">
  No animation on downscroll
</div>
```

## 🌐 Browser Support

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-Latest-aqua?style=flat-square&logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-Latest-aqua?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-Latest-aqua?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-Latest-aqua?style=flat-square&logo=microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-Latest-aqua?style=flat-square&logo=opera&logoColor=white)

</div>

## 🎮 Demo
See the full demo in the [viks-animation-demo.html](./viks-animation-demo.html) file.

## 📝 License
This project is [MIT](./LICENSE) licensed.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-aqua?style=for-the-badge&logo=github&logoColor=black)](https://vixsry.github.io/portfolio/)
[![Star](https://img.shields.io/badge/Star-black?style=for-the-badge&logo=github&logoColor=aqua)](https://github.com/Vixsry/viks-animation)

<h3><span style="color: aqua">✨ "Bringing Life to Web Elements" ✨</span></h3>

</div>

---

<div align="center">

Made with ❤️ by [Vixsry](https://github.com/Vixsry)

</div>