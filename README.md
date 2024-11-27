# VIKS Animation Library

VIKS is a lightweight JavaScript library to add smooth and engaging scroll animations to your HTML elements. This library supports various animation types like fade, flip, slide, and zoom with several customization options.

## 📋 Table of Contents
- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Available Animations](#available-animations)
- [Configuration](#configuration)
- [Advanced Usage](#advanced-usage)
- [Browser Support](#browser-support)
- [Demo](#demo)

## 🚀 Installation

1. Download the CSS and JavaScript files:

viks-animation.css viks-animation.js

2. Include the files in your HTML:
```html
<link rel="stylesheet" href="path/to/viks-animation.css">
<script src="path/to/viks-animation.js"></script>

3. Initialize VIKS at the end of the body:

<script>
  VIKS.init();
</script>



🎯 Basic Usage

Add the data-viks attribute to the element you want to animate:

<div data-viks="fade-up">
  Your content here
</div>

✨ Available Animations

Fade Animations

fade

fade-up

fade-down

fade-left

fade-right

fade-up-right

fade-up-left

fade-down-right

fade-down-left


Flip Animations

flip-up

flip-down

flip-left

flip-right


Slide Animations

slide-up

slide-down

slide-left

slide-right


Zoom Animations

zoom-in

zoom-in-up

zoom-in-down

zoom-in-left

zoom-in-right

zoom-out

zoom-out-up

zoom-out-down

zoom-out-left

zoom-out-right


⚙️ Configuration

Delay

Set a delay before the animation starts:

<div data-viks="fade-up" data-viks-delay="1000">
  1 second delay
</div>

or

<div data-viks="fade-up delay-1000">
  1 second delay
</div>

Duration

Set the animation duration:

<div data-viks="fade-up" data-viks-duration="2000">
  2 seconds duration
</div>

or

<div data-viks="fade-up duration-2000">
  2 seconds duration
</div>

Easing

Set the easing function:

<div data-viks="fade-up" data-viks-easing="ease-out">
  Ease-out easing
</div>

or

<div data-viks="fade-up easing-ease-out">
  Ease-out easing
</div>

Available Easing Functions

linear

ease

ease-in

ease-out

ease-in-out

ease-in-back

ease-out-back

ease-in-out-back

ease-in-sine

ease-out-sine

ease-in-out-sine

ease-in-quad

ease-out-quad

ease-in-out-quad

ease-in-cubic

ease-out-cubic

ease-in-out-cubic

ease-in-quart

ease-out-quart

ease-in-out-quart


🔄 Advanced Usage

Combining Multiple Attributes

You can combine multiple attributes in one element:

<div data-viks="fade-up delay-1000 duration-2000 easing-ease-out">
  Multiple attributes combination
</div>

Control Scroll Animations

Disable animations when scrolling up:

<div data-viks="fade-up" data-viks-animation-top="off">
  No animation when scrolling up
</div>

Disable animations when scrolling down:

<div data-viks="fade-up" data-viks-animation-bottom="off">
  No animation when scrolling down
</div>

🌐 Browser Support

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Opera (latest)

iOS Safari (latest)

Android Chrome (latest)


🎮 Demo

See the full demo in the viks-animation-demo.html file to view all animations in action.

📝 License

MIT License

🤝 Contributing

Contributions, issues, and feature requests are welcome!

🙏 Credits

Made with ❤️ by Vixsry


---

For more information or questions, please open an issue in this repository.

You can now copy the entire content above directly to your `README.md` file in your GitHub repository!

