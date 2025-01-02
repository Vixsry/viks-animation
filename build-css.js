module.exports = {
  plugins: [
    require('postcss-banner')({
      banner: `/*!
 * MIT LISENSI
 * Copyright (c) 27 Nov 2024 Vixsry
 * Lisensi   : https://github.com/Vixsry/viks-animation/blob/main/LICENSE
 * Website   : https://viksanimation.my.id/
 * Github    : https://github.com/Vixsry/viks-animation
 * Author    : VIKRI AHPAD TANTOWI
 * Instagram : https://www.instagram.com/viksry12
 * Facebook  : https://www.facebook.com/share/1E17jqYu34/
 */`,
      important: true
    }),
    require('cssnano')()
  ]
};

const fs = require('fs');
const path = require('path');
const cssnano = require('cssnano');
const postcss = require('postcss');

// Baca file CSS sumber
const inputCss = fs.readFileSync(path.join(__dirname, 'src/viks.css'), 'utf8');

// Gunakan CSSNano untuk meminify CSS
postcss([cssnano])
  .process(inputCss, { from: undefined })
  .then(result => {
    // Tulis hasil minifikasi ke file output
    fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css'), result.css);
    if (result.map) {
      fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css.map'), result.map);
    }
  })
  .catch(error => {
    console.error('Error during CSS minification:', error);
  });
