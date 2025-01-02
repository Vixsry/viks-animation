<h1 align="center">
  <span style="background: linear-gradient(45deg, #00FFFF, #40E0D0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
     VIKS ANIMATION
  </span>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Library-aqua?style=for-the-badge&logoColor=black" alt="JavaScript Library Badge"/>
</p>

<div align="center">
  
![Version](https://img.shields.io/badge/version-1.0.1-aqua?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-black?style=flat-square)
![Downloads](https://img.shields.io/badge/downloads-1k%2Fmonth-aqua?style=flat-square)

</div>

<div align="center">
  <strong>Pustaka JavaScript ringan untuk animasi gulir yang halus dan menarik</strong>
</div>

<div align="center">
  <sub>Created with ❤️ by
  <a href="https://github.com/Vixsry">Vixsry</a>
</div>

---

<h2 align="center">HUBUNGI PENGEMBANG</h2>
<div align="center">
  
[![Email](https://img.shields.io/badge/Email-aqua?style=for-the-badge&logo=gmail&logoColor=black)](mailto:viksry@proton.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-black?style=for-the-badge&logo=linkedin&logoColor=aqua)](https://www.linkedin.com/in/viksry)
[![Instagram](https://img.shields.io/badge/Instagram-aqua?style=for-the-badge&logo=instagram&logoColor=black)](https://www.instagram.com/viksry12)
[![TikTok](https://img.shields.io/badge/TikTok-black?style=for-the-badge&logo=tiktok&logoColor=aqua)](https://www.tiktok.com/@viksry)
[![Threads](https://img.shields.io/badge/Threads-aqua?style=for-the-badge&logo=threads&logoColor=black)](https://www.threads.net/@viksry12)
[![Facebook](https://img.shields.io/badge/Facebook-black?style=for-the-badge&logo=facebook&logoColor=aqua)](https://www.facebook.com/share/19aKzAtBeZ/)

</div>

---

<h2 align="center">ANIMASI YANG TERSEDIA</h2>

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

<h2 align="center">INSTALASI</h2>

<div align="center">

[![NPM](https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=aqua)](#npm)
[![Yarn](https://img.shields.io/badge/Yarn-aqua?style=for-the-badge&logo=yarn&logoColor=black)](#yarn)
[![CDN](https://img.shields.io/badge/CDN-aqua?style=for-the-badge&logo=jsdelivr&logoColor=black)](#cdn)

</div>

### NPM
```bash
npm install viks-a --save
```

### YARN
```bash
yarn add viks-a
```

### CDN
```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/viks-a@latest/dist/viks.min.css">
```

```html
<!-- Java Script -->
<script src="https://unpkg.com/viks-a@latest/dist/viks.min.js"></script>
```

---

<h2 align="center">PEMASANGAN MANUAL</h2>

1. Unduh File Java Script Dan CSS:
   - `viks.css`
   - `viks.js`

2. Masukan Ke HTML Seperti Contoh Ini:
```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/viks.css">

<!-- JAVA SCRIPT -->
<script src="path/to/viks.js"></script>
```
---

<h2 align="center">INISIALISASI</h2>

```javascript
// VIKS ANIMASI SCROLL
VIKS.init()

// VIKS ANIMASI NUMBER
VIKSNumber.init();

// VIKS 3D ANIMASI
const viks3D = new Viks3D(); 
viks3D.addShadow();
viks3D.addParallax(20);
```

```javascript
// Inisialisasi dasar dengan konfigurasi global
VIKS.init({
    offset: 120, // Jarak pemicu animasi (px)
    duration: 800, // Durasi default animasi (ms)
    easing: 'ease-out', // Fungsi waktu default
    once: true, // Animasi hanya sekali atau berulang
    disable: 'mobile', // Nonaktifkan pada perangkat tertentu
    threshold: 0.2, // Nilai ambang untuk pemicu
    throttle: 100, // Batas waktu untuk acara scroll (ms)
});
```

---

<h2 align="center">CARA PENGGUNAAN</h2>

---

<p align="center">ANIMASI ON SCROLL</p>

```html
<!-- Penggunaan Dasar
=====================-->
<div data-viks="fade-up">
  CONTENT VIKS
</div>
```

```html
<!-- Animasi Sesuai Ukuran Layar
================================-->
<div data-viks="fade-up"
     data-viks-desktop="zoom-in"
     data-viks-tablet="fade-left"
     data-viks-mobile="fade-down">
    VIKS CONTEN
</div>
```


```html
<!-- Kontrol Delay 1
=====================-->
<div data-viks="fade-up" data-viks-delay="1000">
  VIKS CONTENT
</div>
```

```html
<!-- Kontrol Delay 2
=====================-->
<div data-viks="fade-up delay-1000">
  VIKS CONTENT
</div>
```

```html
<!-- Kontrol Durasi 1
======================-->
<div data-viks="fade-up" data-viks-duration="2000">
  2 seconds duration
</div>
```

```html
<!-- Kontrol Durasi 2
======================-->
<div data-viks="fade-up duration-2000">
  2 seconds duration
</div>
```

```html
<!-- MEMATIKAN ANIMASI SCROLL KE ATAS
=====================================================-->
<div data-viks="fade-up" data-viks-animation-top="off">
  No animation on upscroll
</div>

<!-- MEMATIKAN ANIMASI SCROLL BAWAH
===========================================================-->
<div data-viks="fade-up" data-viks-animation-bottom="off">
  No animation on downscroll
</div>
```

```html
<!-- MENGABUNGKAN BEBERAPA ATRIBUT 
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

</details>

___

<p align="center">3D ANIMASI</p>

---

```html
<!-- PENGGUNAAN 3D ANIMATION
===============================-->
<div data-viks="3D">
    <h2>Examples</h2>
    <p>Examples</p>
</div>
```

---

<p align="center">NUMBER ANIMASI</p>

---

```html
<!-- PENGGUNAAN ANIMATION NUMBER
===========================================================-->
<span data-viks="type-nbr duration-1000 fps-120">1000</span>
<span data-viks="type-nbr">1000</span>
```
or
```html
<!-- PENGGUNAAN KOMBINASI FPS,DURASI DAN KONTROL ANIMASI
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

<p align="center">Ucapkan Terima Kasih dengan Mentraktir Seseorang Kopi!.</p>

<a href="https://ko-fi.com/viksry">
  <img src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" width="200">
</a>

Dukungan Anda membantu saya terus membuat dan memelihara proyek! ✨

</div>


<h2 align="center">DUKUNGAN BROWSER</h2>

<div align="center">

![Chrome](https://img.shields.io/badge/Chrome-Latest-aqua?style=flat-square&logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-Latest-aqua?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-Latest-aqua?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-Latest-aqua?style=flat-square&logo=microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-Latest-aqua?style=flat-square&logo=opera&logoColor=white)

</div>

<h2 align="center">DEMO</h2>

Lihat demo lengkapnya di [viks-animation-demo.html](./viks-animation-demo.html) file.

## 📝 Lisensi
Proyek ini adalah [MIT](./LICENSE) licensed.

---

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-aqua?style=for-the-badge&logo=github&logoColor=black)](https://viksry.my.id)
[![Star](https://img.shields.io/badge/Star-black?style=for-the-badge&logo=github&logoColor=aqua)](https://github.com/Vixsry/viks-animation)

<h3><span style="color: aqua">✨ "Membawa Kehidupan ke Elemen Web" ✨</span></h3>

</div>

---

<div align="center">

Made with ❤️ by [Vixsry](https://github.com/Vixsry)

</div>

## 🤝 Berkontribusi
Kontribusi, masalah, dan permintaan fitur diterima! Lihat [CONTRIBUTING.md](./CONTRIBUTING.md)