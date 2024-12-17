<h1 align="center">
  <span style="background: linear-gradient(45deg, #00FFFF, #40E0D0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
     VIKS ANIMATION
  </span>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Library-aqua?style=for-the-badge&logoColor=black" alt="JavaScript Library Badge"/>
</p>

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.1.4-aqua?style=flat-square)
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

<h2 align="center">CONTACT WITH DEVELOPER</h2>
<div align="center">
  
[![Email](https://img.shields.io/badge/Email-aqua?style=for-the-badge&logo=gmail&logoColor=black)](mailto:viksry@proton.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=aqua)](https://www.linkedin.com/in/viksry)
[![Instagram](https://img.shields.io/badge/Instagram-aqua?style=for-the-badge&logo=instagram&logoColor=black)](https://www.instagram.com/viksry12)
[![TikTok](https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=aqua)](https://www.tiktok.com/@viksry)
[![Threads](https://img.shields.io/badge/Threads-aqua?style=for-the-badge&logo=threads&logoColor=black)](https://www.threads.net/@viksry12)
[![Facebook](https://img.shields.io/badge/Facebook-black?style=for-the-badge&logo=facebook&logoColor=aqua)](https://www.facebook.com/share/19aKzAtBeZ/)

</div>

---

<h2 align="center">AVAILABLE ANIMATION</h2>

<div align="center">

[![Fade](https://img.shields.io/badge/Fade-Animations-aqua?style=flat-square&logoColor=black)](#fade-animations)
[![Flip](https://img.shields.io/badge/Flip-Animations-black?style=flat-square&logoColor=aqua)](#flip-animations)
[![Slide](https://img.shields.io/badge/Slide-Animations-aqua?style=flat-square&logoColor=black)](#slide-animations)
[![Zoom](https://img.shields.io/badge/Zoom-Animations-black?style=flat-square&logoColor=aqua)](#zoom-animations)
[![Shake](https://img.shields.io/badge/Shake-Animations-black?style=flat-square&logoColor=aqua)](#Shake-Animation)
[![Shpin](https://img.shields.io/badge/Spin-Animations-aqua?style=flat-square&logoColor=black)](#Spin-Animation)
[![Bounce](https://img.shields.io/badge/Bounce-Animations-aqua?style=flat-square&logoColor=black)](#Bounce-Animation)

</div>

---

<h2 align="center">NEW UPDATE 1.1.4</h2>

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/viks.min.css">

<!-- JavaScript -->
<script src="https://unpkg.com/viks-animation@latest/dist/viks.min.js"></script>
<script src="path/to/viks.js"></script>
<script>
    viks3D.addShadow(); // Shadow
    viks3D.addParallax(20); // Parallax Efex
</script>
```

```html
<script src="path/to/viks.js"></script>
<script>
    viks3D.addShadow();
    viks3D.addParallax(20);
</script>
```

<h2 align="center">EXAMPLES OF USE VIKS 3D</h2>

```html
<div data-viks="3D">
    <h2>Examples</h2>
    <p>Examples</p>
</div>
```




<h2 align="center">INTALLATION</h2>

<div align="center">

[![NPM](https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=aqua)](#npm)
[![Yarn](https://img.shields.io/badge/Yarn-aqua?style=for-the-badge&logo=yarn&logoColor=black)](#yarn)
[![CDN](https://img.shields.io/badge/CDN-aqua?style=for-the-badge&logo=jsdelivr&logoColor=black)](#cdn)

</div>

### NPM
```bash
npm install viks-animation --save
```

### YARN
```bash
yarn add viks-animation
```

### CDN
```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/viks.min.css">

<!-- JavaScript -->
<script src="https://unpkg.com/viks-animation@latest/dist/viks.min.js"></script>
<script>
// Initialization VIKS
VIKS.init();
</script>
```

### COMBINATION WITH ANIMATION NUMBERS
```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/viks-animation@latest/dist/viks.min.css">

<!-- JavaScript -->
<script src="https://unpkg.com/viks-animation@latest/dist/viks.min.js"></script>
<script>
   // Initialization VIKS
   VIKS.init();
        
  // Initialization VIKS Number
   VIKSNumber.init();
</script>
```

```html
<script>
// Initialize VIKS first
VIKS.init({
offset: 120,
delay: 100,
duration: 600,
}); 
// Then initialize NumberAnimation
VIKSNumber.init();
</script>
```

<h2 align="center">MANUAL INSTALL</h2>

1. Download the CSS and JavaScript files:
   - `viks.css`
   - `viks.js`

2. Include the files in your HTML:
```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/viks.css">

<!-- JavaScript -->
<script src="path/to/viks.js"></script>
<script>
    VIKS.init();
</script>
```

<h2 align="center">BASIC USAGE</h2>

```html
<div data-viks="fade-up">
  Your content here
</div>
```


<h2 align="center">QUICK START</h2>

```html
<script>
 // Basic initialization with global configuration
VIKS.init({
    offset: 120, // Animation trigger distance (px)
    duration: 800, // Default duration of animation (ms)
    easing: 'ease-out', // Timing function default
    once: true, // Animation only once or repeatedly
    disable: 'mobile', // Disable on certain devices
    threshold: 0.2, // Threshold value for trigger
    throttle: 100, // Throttle scroll event (ms)
});
</script>
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


## Conditional Animation:
```javascript
// Different animations based on viewport
<div data-viks="fade-up"
     data-viks-desktop="zoom-in"
     data-viks-tablet="fade-left"
     data-viks-mobile="fade-down">
    Responsive animation
</div>
```

### NUMBERS ANIMATION
```html
<span data-viks="type-nbr duration-1000 fps-120">1000</span>

<span data-viks="type-nbr">1000</span>
```
or
```html
<span data-viks="type-nbr duration-2000 fps-60 bottom-off">2000</span>
```

---

<h2 align="center">CUSTOM USAGE GUIDE</h2>

<p align="center">Introduction</p>

The VIKS ANIMATION library allows you to create custom animations for your web elements, providing flexibility and control over your site's appearance. By defining custom animations in CSS and applying them through the data-viks attribute, you can easily enhance the user experience with unique transitions and movements.

<p align="center">Features</p>

Custom Animations: Create your own animations using CSS @keyframes.

Easy Integration: Apply custom animations using the data-viks attribute on any HTML element.

Control Durations and Timing: Customize the animation duration, timing functions, and delays to suit your design.

JavaScript Integration: Trigger custom animations dynamically through JavaScript.

<p align="center">Step-by-Step Guide</p>

1.Defining Custom Animations in CSS
First, define your custom animations using CSS @keyframes. This allows you to control how your element will change over time.

<p align="center">Example: Define a Custom Fade Animation</p>

```css
/* Define a custom animation using keyframes */
@keyframes custom-fade {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

In the example above, the custom-fade animation fades in an element from transparent (opacity: 0) while moving it upward (translateY: 100px) to its original position (opacity: 1, translateY: 0).

2.Applying the Custom Animation to HTML Elements
Once the animation is defined in CSS, you can apply it to any HTML element by setting the data-viks attribute to the animation's name.

<p align="center">Example: Apply the Custom Animation</p>

```html
<div data-viks="custom-fade" class="viks-animate">This is an element with a custom fade animation</div>
```

Here, the data-viks="custom-fade" will apply the custom-fade animation to the element when the page loads.

3.Customizing the Animation Duration and Timing
You can also specify the duration, timing function, and delay of your custom animation directly in CSS.

```html
<div data-viks="custom-fade" class="viks-animate">Example: Customize Duration and Timing</div>
```

```css
.viks-animate[data-viks="custom-fade"] {
  animation: custom-fade 2s ease-out;
}
```

In this example, the animation custom-fade will last 2 seconds and use an ease-out timing function, which creates a smooth transition at the end of the animation.

4.Using JavaScript to Trigger Animations Dynamically
If you want to trigger the animation based on user interaction or other events, you can do so by using JavaScript.

```html
<div data-viks="custom-fade" class="viks-animate">Example: Trigger Animation on Click</div>
```

```javascript
document.querySelector('.my-element').addEventListener('click', function() {
  this.setAttribute('data-viks', 'custom-fade'); // Trigger custom animation on click
});
```

Here, the custom animation is triggered when the .my-element is clicked, by setting the data-viks attribute to custom-fade.

5.Advanced Animation Customizations
You can also customize your animations further by adjusting the following properties:

Timing Function: Choose different timing functions like linear, ease-in, ease-out, ease-in-out, or use a custom cubic-bezier function.

Animation Delay: Set a delay before the animation starts using the animation-delay property.

Transformations: Use transformations like translate, scale, rotate, skew, etc., to create dynamic effects.


## Example: Advanced Custom Animation

```css
@keyframes custom-bounce {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.viks-animate[data-viks="custom-bounce"] {
  animation: custom-bounce 1s ease-in-out infinite;
}
```

And in HTML:

```html
<div data-viks="custom-bounce" class="viks-animate">This element will bounce</div>
```

## Conclusion

By using the custom animation feature of the VIKS ANIMATION library, you can easily create engaging and dynamic animations tailored to your website’s design needs. Define your custom animations with CSS, apply them with the data-viks attribute, and control their behavior through CSS and JavaScript for maximum flexibility.

---

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

<h2 align="center">CONFIGURATION</h2>

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

<div align="center">

<h2 align="center">SUPPORT MY WORK</h2>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Buy%20Me%20A%20Coffee&fontSize=60&fontAlignY=35&animation=twinkling&fontColor=gradient" />

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=white&color=aqua&width=435&lines=Support+my+work;Buy+me+a+coffee+☕)](https://ko-fi.com/viksry)

<p align="center">If you find my work helpful, consider buying me a coffee!</p>

<a href="https://ko-fi.com/viksry">
  <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" width="200">
</a>

Your support helps me continue creating and maintaining projects! ✨

</div>

<h2 align="center">ADVANCED USAGE</h2>

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

<h2 align="center">BROWSER SUPPORT</h2>

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-Latest-aqua?style=flat-square&logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-Latest-aqua?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-Latest-aqua?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-Latest-aqua?style=flat-square&logo=microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-Latest-aqua?style=flat-square&logo=opera&logoColor=white)

</div>

<h2 align="center">DEMO</h2>

See the full demo in the [viks-animation-demo.html](./viks-animation-demo.html) file.

## 📝 License
This project is [MIT](./LICENSE) licensed.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-aqua?style=for-the-badge&logo=github&logoColor=black)](https://viksry.my.id)
[![Star](https://img.shields.io/badge/Star-black?style=for-the-badge&logo=github&logoColor=aqua)](https://github.com/Vixsry/viks-animation)

<h3><span style="color: aqua">✨ "Bringing Life to Web Elements" ✨</span></h3>

</div>

---

<div align="center">

Made with ❤️ by [Vixsry](https://github.com/Vixsry)

</div>
