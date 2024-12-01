[Previous sections remain the same until Installation]

## 🚀 Installation

<div align="center">

[![NPM](https://img.shields.io/badge/NPM-aqua?style=for-the-badge&logo=npm&logoColor=black)](#npm)
[![CDN](https://img.shields.io/badge/CDN-black?style=for-the-badge&logo=jsdelivr&logoColor=aqua)](#cdn)
[![Download](https://img.shields.io/badge/Download-aqua?style=for-the-badge&logo=github&logoColor=black)](#download)

</div>

### NPM
```bash
npm install viks-animation
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/viks-animation.min.js"></script>
```

### Download
Download the latest version from the [releases page](https://github.com/Vixsry/viks-animation/releases).

## 📖 Basic Usage

### 1. Initialize the Library
```javascript
const viks = new ViksAnimation({
  offset: 120,        // offset (in px) from the original trigger point
  delay: 0,           // values from 0 to 3000, with step 50ms
  duration: 400,      // values from 0 to 3000, with step 50ms
  easing: 'ease',     // default easing for animations
  once: false,        // whether animation should happen only once
  mirror: true,       // whether elements should animate out while scrolling past them
  threshold: 0.2,     // ratio of element's visibility needed to trigger animation
});
```

### 2. Add Animations to HTML
```html
<div viks-animation="fade-up" 
     viks-duration="800" 
     viks-delay="200" 
     viks-easing="ease-out">
  Content here
</div>
```

### 3. Add Custom Animations (Optional)
```javascript
viks.addAnimation('custom-animation', 'scale(2) rotate(45deg)');
```

## ✨ Key Features

<div align="center">

![HTML Attributes](https://img.shields.io/badge/Easy_HTML_Attributes-aqua?style=flat-square&logoColor=black)
![Animation Support](https://img.shields.io/badge/Rich_Animation_Library-black?style=flat-square&logoColor=aqua)
![Customizable](https://img.shields.io/badge/Highly_Customizable-aqua?style=flat-square&logoColor=black)
![Performance](https://img.shields.io/badge/Optimized_Performance-black?style=flat-square&logoColor=aqua)

</div>

- 🎯 Easy to use with HTML attributes
- 🎨 Supports all animations (bounce, fade, flip, slide, zoom)
- ⚙️ Customizable per element:
  - Duration
  - Delay
  - Easing
- 🔄 Automatic mirror animations on scroll
- 🚀 Intersection Observer for better performance
- 🎮 Easy to add new custom animations
- 📱 Minimal CSS requirements
- 🌐 Supports all modern browsers

## 🛠 Automatic Handling

The library intelligently manages:
- ⏱️ Animation timing
- 📜 Scroll detection
- 🔧 Performance optimization
- 📱 Mobile responsiveness
- 🌍 Browser compatibility

[Rest of the README remains the same]