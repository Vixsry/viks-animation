<h1 align="center">VIKS Animation Library</h1>

<p align="center">
  <img src="./assets/logo.png" alt="VIKS Animation Logo" width="200"/>
</p>

<div align="center">
  
[![Version](https://img.shields.io/github/package-json/v/Vixsry/viks-animation?style=flat-square&color=blue)](https://github.com/Vixsry/viks-animation/releases)
[![License](https://img.shields.io/github/license/Vixsry/viks-animation?style=flat-square&color=blue)](/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/viks-animation?style=flat-square&color=blue)](https://www.npmjs.com/package/viks-animation)
[![Stars](https://img.shields.io/github/stars/Vixsry/viks-animation?style=flat-square&color=blue)](https://github.com/Vixsry/viks-animation/stargazers)
[![Issues](https://img.shields.io/github/issues/Vixsry/viks-animation?style=flat-square&color=blue)](https://github.com/Vixsry/viks-animation/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/Vixsry/viks-animation?style=flat-square&color=blue)](https://github.com/Vixsry/viks-animation/pulls)

</div>

<div align="center">
  <strong>A lightweight and powerful JavaScript animation library for creating smooth scroll-triggered animations</strong>
</div>

<br />

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#examples">Examples</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#support">Support</a>
</p>

## 🚀 Key Features

- 📦 Zero dependencies
- 🎯 Simple HTML attribute-based implementation
- 🎨 Rich animation library with 30+ preset animations
- ⚡ High-performance scroll detection using Intersection Observer
- 📱 Fully responsive and mobile-friendly
- 🔧 Highly customizable with extensive configuration options
- 🌐 Cross-browser compatibility
- 🎮 Easy custom animation creation
- 📄 Comprehensive documentation
- 🤝 Active community and maintenance

## 📥 Installation

**NPM**
```bash
npm install viks-animation
```

**Yarn**
```bash
yarn add viks-animation
```

**CDN**
```html
<script src="https://cdn.jsdelivr.net/npm/viks-animation@latest/dist/viks-animation.min.js"></script>
```

## 🎯 Quick Start

### 1. Initialize the Library

```javascript
const viks = new ViksAnimation({
  offset: 120,        // offset (in px) from the original trigger point
  delay: 0,           // values from 0 to 3000, with step 50ms
  duration: 400,      // values from 0 to 3000, with step 50ms
  easing: 'ease',     // default easing for animations
  once: false,        // whether animation should happen only once
  mirror: true,       // whether elements should animate out while scrolling past them
  threshold: 0.2      // ratio of element's visibility needed to trigger animation
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

## 📚 Documentation

### Available Animations

#### Fade Animations
- `fade`
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `fade-up-right`
- `fade-up-left`
- `fade-down-right`
- `fade-down-left`

[View all animations in the documentation →](https://github.com/Vixsry/viks-animation/wiki/Animations)

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| offset | number | 120 | Offset from trigger point (px) |
| delay | number | 0 | Animation delay (0-3000ms) |
| duration | number | 400 | Animation duration (0-3000ms) |
| easing | string | 'ease' | Animation timing function |
| once | boolean | false | Run animation only once |
| mirror | boolean | true | Reverse animation on scroll past |
| threshold | number | 0.2 | Visibility ratio to trigger |

[View full configuration documentation →](https://github.com/Vixsry/viks-animation/wiki/Configuration)

## 🎨 Examples

View our collection of examples and use cases:

- [Basic Usage](examples/basic.html)
- [Advanced Animations](examples/advanced.html)
- [Custom Animations](examples/custom.html)
- [Performance Optimization](examples/performance.html)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Support

### Documentation
- [Full Documentation](https://github.com/Vixsry/viks-animation/wiki)
- [API Reference](https://github.com/Vixsry/viks-animation/wiki/API)
- [FAQ](https://github.com/Vixsry/viks-animation/wiki/FAQ)

### Community
- [GitHub Discussions](https://github.com/Vixsry/viks-animation/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/viks-animation)

### Social Media

<div align="center">

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/viksry)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/viksry)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Vixsry)
[![Dev.to](https://img.shields.io/badge/dev.to-%230A0A0A.svg?style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/viksry)

</div>

### Support My Work

<div align="center">

[!["Buy Me A Coffee"](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/viksry)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/viksry)
[![GitHub Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/Vixsry)

</div>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [All Contributors](CONTRIBUTORS.md)

---

<div align="center">

**[Website](https://viks-animation.js.org)** • 
**[Documentation](https://github.com/Vixsry/viks-animation/wiki)** • 
**[Releases](https://github.com/Vixsry/viks-animation/releases)** • 
**[Issues](https://github.com/Vixsry/viks-animation/issues)**

Made with ❤️ by [Vixsry](https://github.com/Vixsry)

</div>